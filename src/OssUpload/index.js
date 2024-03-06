import Upload, { UploadTips } from './Upload';
import Dragger from './Dragger';

let OssUpload = Upload;
OssUpload.Dragger = Dragger;
OssUpload.UploadTips = UploadTips;
export default OssUpload;
