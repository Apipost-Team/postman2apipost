export interface Iheader {
  parameter: Array<any>
}
export interface Ibody  {
  mode:string,
  parameter: Array<any>,
  raw:string,
  raw_para: Array<any>
}

export interface IPostman2ApiPost {
  info: {
    _postman_id?:string,
    schema?:string,
    _exporter_id?:string,
    name?: string,
    description?: string
  },
  item: any[],
  event: any[],
  auth?: object,
  variable?:object
}
