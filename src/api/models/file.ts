import { DataObject } from './data-object.js';


export interface File extends DataObject {
  id: string;
  createdAt?: Date;
  url: string;
  width?: number;
  height?: number;
  fileType?: string;
  fileSize?: number;
}
