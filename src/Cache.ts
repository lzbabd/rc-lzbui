type CacheItem = {
  data: any;
  expiry: number;
};

export default class Cache {
  private memoryCache: Map<string, CacheItem>;
  private defaultExpirationInSeconds: number;
  private namespacePrefix: string;

  constructor(defaultExpirationInSeconds: number = 300, namespace: string = 'app') {
    this.memoryCache = new Map<string, CacheItem>();
    this.defaultExpirationInSeconds = defaultExpirationInSeconds;
    this.namespacePrefix = `${namespace}:`;
  }

  private prefixedKey(key: string): string {
    return `${this.namespacePrefix}${key}`;
  }

  public set(key: string, data: any, expirationInSeconds: number = this.defaultExpirationInSeconds, onlyMemory: boolean = true): void {
    const prefixedKey = this.prefixedKey(key);
    const now = Date.now();
    const expiry = now + expirationInSeconds * 1000;
    const item: CacheItem = { data, expiry };
    this.memoryCache.set(prefixedKey, item);

    if (!onlyMemory) {
      try {
        localStorage.setItem(prefixedKey, JSON.stringify(item));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  }

  public get(key: string): any | null {
    const prefixedKey = this.prefixedKey(key);
    const item = this.memoryCache.get(prefixedKey);
    if (item && item.expiry >= Date.now()) {
      return item.data;
    }

    try {
      const storedItemString = localStorage.getItem(prefixedKey);
      if (storedItemString) {
        const storedItem: CacheItem = JSON.parse(storedItemString);
        if (storedItem.expiry >= Date.now()) {
          this.memoryCache.set(prefixedKey, storedItem);
          return storedItem.data;
        } else {
          localStorage.removeItem(prefixedKey);
        }
      }
    } catch (error) {
      console.error('Error reading from localStorage:', error);
    }

    return null;
  }

  public remove(key: string): void {
    const prefixedKey = this.prefixedKey(key);
    this.memoryCache.delete(prefixedKey);
    localStorage.removeItem(prefixedKey);
  }

  public clearNamespace(): void {
    const prefix = this.namespacePrefix;
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(prefix)) {
        localStorage.removeItem(key);
        this.memoryCache.delete(key);
      }
    });
  }

  public clear(): void {
    this.memoryCache.clear();
    this.clearNamespace();
  }
}
