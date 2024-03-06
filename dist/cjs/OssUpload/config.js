var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/OssUpload/config.js
var config_exports = {};
__export(config_exports, {
  BUCKET_MAP: () => BUCKET_MAP
});
module.exports = __toCommonJS(config_exports);
var BUCKET_MAP = {
  "public": "/api/common-file/file/v1/uploadPubBucket",
  "private": "/api/common-file/file/v1/uploadPriBucket",
  "public-cdn": "/api/common-file/file/v1/uploadPubCdnBucket"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BUCKET_MAP
});
