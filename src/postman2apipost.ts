import { IPostman2ApiPost, Iheader, Ibody } from '../types/postman2apipost';
import schemaRule2 from './postman_schema2.0';
import schemaRule2_1 from './postman_schema2.1';

const ConvertResult = (status: string, message: string, data: any = '') => {
  return {
    status,
    message,
    data
  }
}

const extractProjectInfo = (data: IPostman2ApiPost, apiPostObject: object, version: number) => {
  const { info, event, auth, variable } = data;
  const { name, description } = info;
  // ToDo: 项目脚本
  let pre_script = '';
  let test = '';
  let apiPostVariable = {};
  if (event && event instanceof Array) {
    event.forEach(item => {
      if (item['script'] && item['script']['exec'] && item['script']['exec'] instanceof Array) {
        if (item['listen'] && item['listen'] == 'prerequest') {
          pre_script = item['script']['exec'].join('\n');
        } else if (item['listen'] && item['listen'] == 'test') {
          test = item['script']['exec'].join('\n');
        }
      }
    });
  }
  // 项目变量
  if (variable && variable instanceof Array) {
    variable.forEach(item => {
      let key = item['key'];
      let value = item['value'];
      if (key && key.length > 0) {
        apiPostVariable[key] = {
          current_value: value || '',
          value: value || '',
          description: '',
        }
      }
    });
  }
  // 全局认证
  let apiPostAuth = {
    type: 'noauth',
    kv: {
      key: '',
      value: '',
    },
    bearer: {
      key: ''
    },
    basic: {
      username: '',
      password: ''
    }
  }
  if (auth) {
    let type = auth['type'] || 'noauth';
    let apikey = auth['apikey'];
    let bearer = auth['bearer'];
    let basic = auth['basic'];
    switch (type) {
      case 'apikey':
        type = 'kv';
        break;
      case 'bearer':
        type = 'bearer';
        break;
      case 'basic':
        type = 'basic';
        break;
      default:
        type = 'noauth';
        break;
    }
    apiPostAuth.type = type;
    if (apikey) {
      apiPostAuth.kv = {
        key: apikey['key'] || '',
        value: apikey['value'] || ''
      }
    }
    if (bearer) {
      if (version == 2) {
        apiPostAuth.bearer = {
          key: bearer['token'] || '',
        }
      } else if (bearer instanceof Array && bearer.length > 0) {
        apiPostAuth.bearer = {
          key: bearer[0]['value'] || '',
        }
      }
    }
    if (basic) {
      apiPostAuth.basic = {
        username: basic['username'] || '',
        password: basic['password'] || ''
      }
    }
  }
  apiPostObject['project'] = {
    name: name || '新建项目',
    description: description || '',
    request: {
      header: [],
      query: [],
      body: []
    },
    script: {
      pre_script,
      pre_script_switch: 1,
      test,
      test_switch: 1,
    },
    variable: apiPostVariable || {},
    auth: apiPostAuth || {},
    mark: [],
    globalDescription: {
      list: []
    }
  }
}
const extractEnv = (data: IPostman2ApiPost, apiPostObject: object) => {
  //ToDo: [{
  //  name: '默认环境', //环境名称
  //       pre_url: '', //环境前置url
  //       type:'default', // 环境类型 mock/custom
  //       list: {
  //         userName: {
  //           current_value: '123', //当前参数值
  //           value: '123', //参数初始值
  //           description: '', // 参数描述
  //         },
  //       },
  //     }]
  apiPostObject['env'] = [];
}
const postmanTree2apipostTree = (apipostTree: Array<any>, postmanTree: Array<any>, version: number) => {
  if (postmanTree.length > 0) {
    postmanTree.forEach(item => {
      let target = {};
      let method = 'GET';
      let url = '';
      let header: any = [];
      let query: any = []
      let resful: any = []
      let body: Ibody = {
        mode: 'none',
        parameter: [],
        raw: '',
        raw_para: []
      }
      let auth = {
        type: 'noauth',
        kv: {
          key: '',
          value: '',
        },
        bearer: {
          key: ''
        },
        basic: {
          username: '',
          password: ''
        }
      }
      let description = '';
      const { request } = item;
      if (request) {
        if (request['method']) {
          method = request['method'];
        }
        if (request['url']) {
          if (request['url']['raw']) {
            url = request['url']['raw'];
          }
          if (request['url']['query'] && request['url']['query'] instanceof Array) {
            request['url']['query'].forEach(item => {
              item && query.push({
                is_checked: "1",
                type: 'Text',
                key: item['key'] || "",
                value: item['value'] || "",
                not_null: "1",
                description: item?.description || "",
                field_type: "Text"
              });
            })
          }
          if (request['url']['variable'] && request['url']['variable'] instanceof Array) {
            request['url']['variable'].forEach(item => {
              item && resful.push({
                is_checked: "1",
                type: 'Text',
                key: item['key'] || "",
                value: item['value'] || "",
                not_null: "1",
                description: item?.description || "",
                field_type: "Text"
              });
            })
          }
          if (request['url']['description']) {
            description = request['url']['description'];
          }
          if (typeof request['url'] == 'string') {
            url = request['url'];
          }
        }
        if (request['description']) {
          description = request['description'];
        }
        if (request['header'] && request['header'] instanceof Array) {
          request['header'].forEach(item => {
            item && header.push({
              is_checked: "1",
              type: 'Text',
              key: item['key'] || "",
              value: item['value'] || "",
              not_null: "1",
              description: item?.description || "",
              field_type: "Text"
            });
          })
        }
        if (request['body'] && request['body']['mode']) {
          switch (request['body']['mode']) {
            case 'formdata':
              body.mode = 'form-data';
              break;
            case 'urlencoded':
              body.mode = 'urlencoded'
              break;
            case 'raw':
              body.mode = 'json'
              break;
            default:
              break;
          }
          if (request['body']['raw']) {
            if (Object.prototype.toString.call(request['body']['raw']) == 'object Object') {
              body.raw = JSON.stringify(request['body']['raw']);
            } else {
              body.raw = String(request['body']['raw']);
            }
          }
          if (request['body']['urlencoded'] && request['body']['urlencoded'] instanceof Array) {
            request['body']['urlencoded'].forEach(item => {
              item && body.parameter.push({
                is_checked: "1",
                type: 'Text',
                key: item['key'] || "",
                value: item['value'] || "",
                not_null: "1",
                description: item?.description || "",
                field_type: "Text"
              });
            });
          }
          if (request['body']['formdata'] && request['body']['formdata'] instanceof Array) {
            request['body']['formdata'].forEach(item => {
              item && body.parameter.push({
                is_checked: "1",
                type: item['type'] && item['type'] == 'file' ? 'File' : 'Text',
                key: item['key'] || "",
                value: item['value'] || "",
                not_null: "1",
                description: "",
                field_type: "Text"
              });
            });
          }
        }
        if (request['auth']) {
          let type = request['auth']['type'] || 'noauth';
          let apikey = request['auth']['apikey'];
          let bearer = request['auth']['bearer'];
          let basic = request['auth']['basic'];
          switch (type) {
            case 'apikey':
              type = 'kv';
              break;
            case 'bearer':
              type = 'bearer';
              break;
            case 'basic':
              type = 'basic';
              break;
            default:
              type = 'noauth';
              break;
          }
          if (apikey) {
            auth.kv = {
              key: apikey['key'] || '',
              value: apikey['value'] || ''
            }
          }
          if (bearer) {
            auth.bearer = {
              key: bearer['token'] || '',
            }
          }
          if (basic) {
            auth.basic = {
              username: basic['username'] || '',
              password: basic['password'] || ''
            }
          }
        }
      }
      // const { method, url } = request || {};
      // 目录
      if (item['item'] && item['item'] instanceof Array) {
        // 解析目录脚本
        let pre_script = '';
        let test = '';
        if (item?.event instanceof Array) {
          item.event.forEach((i: any) => {
            if (i['script'] && i['script']['exec'] && i['script']['exec'] instanceof Array) {
              if (i['listen'] && i['listen'] == 'prerequest') {
                pre_script = i['script']['exec'].join('\n');
              } else if (i['listen'] && i['listen'] == 'test') {
                test = i['script']['exec'].join('\n');
              }
            }
          });
        }
        // 目录
        target = {
          name: item['name'] || '新建目录',
          target_type: 'folder',
          request: {
            header: [],
            query: [],
            body: [],
            auth,
            description,
            script: {
              pre_script: pre_script,
              test: test,
              pre_script_switch: 1,
              test_switch: 1,
            },
          },
        }
        target['children'] = [];
        postmanTree2apipostTree(target['children'], item['item'], version);
      } else {
        // 解析接口脚本
        let pre_script = '';
        let test = '';
        if (item?.event instanceof Array) {
          item.event.forEach((i: any) => {
            if (i['script'] && i['script']['exec'] && i['script']['exec'] instanceof Array) {
              if (i['listen'] && i['listen'] == 'prerequest') {
                pre_script = i['script']['exec'].join('\n');
              } else if (i['listen'] && i['listen'] == 'test') {
                test = i['script']['exec'].join('\n');
              }
            }
          });
        }
        target = {
          name: item['name'] || '新建接口',
          target_type: 'api',
          mark: 'developing',
          method: method || 'GET',
          url: url || '',
          request: {
            header,
            query,
            resful,
            body,
            auth,
            event: {
              pre_script: pre_script,
              test: test,
            },
            description: description
          },
          response: {
            success: {
              raw: '',
              parameter: []
            },
            error: {
              raw: '',
              parameter: []
            }
          },
          mock: '{}',
          mock_url: ''
        }
      }
      apipostTree.push(target);
    });
  }
}
const extractApis = (data: IPostman2ApiPost, apiPostObject: object, version: number) => {
  const { item } = data;
  apiPostObject['apis'] = [];
  if (item && item instanceof Array) {
    postmanTree2apipostTree(apiPostObject['apis'], item, version);
  }
}
export const Postman2ApiPost = (data: IPostman2ApiPost) => {
  let apiPostObject: object = {};
  try {
    let version = 2;
    var Validator = require('jsonschema').validate;
    // 格式验证
    let valid_2 = Validator(data, schemaRule2).valid;
    let valid_2_1 = Validator(data, schemaRule2_1).valid;
    if (valid_2) {
      version = 2;
    } else if (valid_2_1) {
      version = 2.1;
    } else {
      return ConvertResult('error', '传入格式错误，请使用正确格式传入。');
    }
    // 提取项目信息
    extractProjectInfo(data, apiPostObject, version);
    // 提取环境信息
    extractEnv(data, apiPostObject);
    // 提取接口信息以及目录信息
    extractApis(data, apiPostObject, version);
  } catch (error) {
    return ConvertResult('error', '异常信息:' + error)
  }
  console.log('project', JSON.stringify(apiPostObject));
  return ConvertResult('success', '', apiPostObject);
}

export default Postman2ApiPost;
