import { IPostman2ApiPost } from '../types/postman2apipost'
import { Postman2ApiPost } from '../src/postman2apipost'


describe('works', () => {
  const data: IPostman2ApiPost = {
    "info": {
      "_postman_id": "318a3a25-e601-4519-a070-a39b455c54fc",
      "name": "123999",
      "description": "# Introduction What does your API do?  # Overview Things that the developers should know about  # Authentication What is the preferred way of using the API?  # Error Codes What errors and status codes can a user expect?  # Rate limit Is there a limit to the number of requests an user can send?",
      "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
      "_exporter_id": "5424870"
    },
    "item": [
      {
        "name": "testFolder",
        "item": [
          {
            "name": "API key",
            "protocolProfileBehavior": {
              "disableBodyPruning": true
            },
            "request": {
              "auth": {
                "type": "apikey",
                "apikey": {
                  "value": "1231231",
                  "key": "123"
                }
              },
              "method": "GET",
              "header": [
                {
                  "key": "ikk",
                  "value": "123",
                  "type": "text"
                }
              ],
              "body": {
                "mode": "formdata",
                "formdata": [
                  {
                    "key": "body",
                    "value": "123",
                    "type": "text"
                  },
                  {
                    "key": "trtry",
                    "type": "file",
                    "src": "N1Fn2jwLg/deom.json"
                  }
                ]
              },
              "url": {
                "raw": "123/:bbb?999=123",
                "host": [
                  "123"
                ],
                "path": [
                  ":bbb"
                ],
                "query": [
                  {
                    "key": "999",
                    "value": "123"
                  }
                ],
                "variable": [
                  {
                    "key": "bbb",
                    "value": "9999000"
                  }
                ]
              },
              "description": "90237t09jhg90f3rhj90fg3rhj09g3"
            },
            "response": []
          },
          {
            "name": "encode",
            "protocolProfileBehavior": {
              "disableBodyPruning": true
            },
            "request": {
              "method": "GET",
              "header": [],
              "body": {
                "mode": "urlencoded",
                "urlencoded": [
                  {
                    "key": "123",
                    "value": "123",
                    "type": "text"
                  }
                ]
              }
            },
            "response": []
          },
          {
            "name": "raw json",
            "protocolProfileBehavior": {
              "disableBodyPruning": true
            },
            "request": {
              "method": "GET",
              "header": [],
              "body": {
                "mode": "raw",
                "raw": "sdfdsfdsf",
                "options": {
                  "raw": {
                    "language": "json"
                  }
                }
              }
            },
            "response": []
          }
        ],
        "description": "~~dsfdsfdsfdsfds~~",
        "auth": {
          "type": "apikey",
          "apikey": {
            "value": "32432",
            "key": "124"
          }
        },
        "event": [
          {
            "listen": "prerequest",
            "script": {
              "type": "text/javascript",
              "exec": [
                "999"
              ]
            }
          },
          {
            "listen": "test",
            "script": {
              "type": "text/javascript",
              "exec": [
                "12312"
              ]
            }
          }
        ]
      },
      {
        "name": "bearer",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": {
              "token": "12312312"
            }
          },
          "method": "GET",
          "header": []
        },
        "response": []
      },
      {
        "name": "basic",
        "request": {
          "auth": {
            "type": "basic",
            "basic": {
              "password": "22",
              "username": "11"
            }
          },
          "method": "GET",
          "header": []
        },
        "response": []
      },
      {
        "name": "New Request",
        "request": {
          "method": "GET",
          "header": []
        },
        "response": []
      }
    ],
    "auth": {
      "type": "bearer",
      "bearer": {
        "token": "sadasdas"
      }
    },
    "event": [
      {
        "listen": "prerequest",
        "script": {
          "type": "text/javascript",
          "exec": [
            "console.log('123')console.log('123')",
            "console.log('888')"
          ]
        }
      },
      {
        "listen": "test",
        "script": {
          "type": "text/javascript",
          "exec": [
            "console.log('456')"
          ]
        }
      }
    ],
    "variable": [
      {
        "key": "a",
        "value": "4566",
        "type": "string"
      },
      {
        "key": "a",
        "value": "123",
        "type": "string"
      }
    ]
  }
  const testData = '{"project":{"name":"123999","description":"# Introduction What does your API do?  # Overview Things that the developers should know about  # Authentication What is the preferred way of using the API?  # Error Codes What errors and status codes can a user expect?  # Rate limit Is there a limit to the number of requests an user can send?","request":{"header":[],"query":[],"body":[]},"script":{"pre_script":"","pre_script_switch":1,"test":"","test_switch":1},"variable":{"a":{"current_value":"123","value":"123","description":""}},"auth":{"type":"noauth","kv":{"key":"","value":""},"bearer":{"key":"sadasdas"},"basic":{"username":"","password":""}},"mark":[],"globalDescription":{"list":[]}},"env":[],"apis":[{"name":"testFolder","target_type":"folder","request":{"header":[],"query":[],"body":[],"auth":{"type":"noauth","kv":{"key":"","value":""},"bearer":{"key":""},"basic":{"username":"","password":""}},"description":""},"script":{"pre_script":"","test":"","pre_script_switch":1,"test_switch":1},"children":[{"name":"API key","target_type":"api","mark":"developing","method":"GET","url":"123/:bbb?999=123","request":{"header":{"parameter":[{"is_checked":"1","type":"Text","key":"ikk","value":"123","not_null":"1","description":"","field_type":"Text"}]},"query":{"parameter":[{"is_checked":"1","type":"Text","key":"999","value":"123","not_null":"1","description":"","field_type":"Text"}]},"resful":{"parameter":[{"is_checked":"1","type":"Text","key":"bbb","value":"9999000","not_null":"1","description":"","field_type":"Text"}]},"body":{"mode":"none","parameter":[{"is_checked":"1","type":"Text","key":"body","value":"123","not_null":"1","description":"","field_type":"Text"},{"is_checked":"1","type":"File","key":"trtry","value":"","not_null":"1","description":"","field_type":"Text"}],"raw":"","raw_para":[]},"auth":{"type":"noauth","kv":{"key":"123","value":"1231231"},"bearer":{"key":""},"basic":{"username":"","password":""}},"event":{"pre_script":"","test":""},"description":"90237t09jhg90f3rhj90fg3rhj09g3"},"response":{"success":{"raw":"","parameter":[]},"error":{"raw":"","parameter":[]}},"mock":"{}","mock_url":""},{"name":"encode","target_type":"api","mark":"developing","method":"GET","url":"","request":{"header":{"parameter":[]},"query":{"parameter":[]},"resful":{"parameter":[]},"body":{"mode":"none","parameter":[{"is_checked":"1","type":"Text","key":"123","value":"123","not_null":"1","description":"","field_type":"Text"}],"raw":"","raw_para":[]},"auth":{"type":"noauth","kv":{"key":"","value":""},"bearer":{"key":""},"basic":{"username":"","password":""}},"event":{"pre_script":"","test":""},"description":""},"response":{"success":{"raw":"","parameter":[]},"error":{"raw":"","parameter":[]}},"mock":"{}","mock_url":""},{"name":"raw json","target_type":"api","mark":"developing","method":"GET","url":"","request":{"header":{"parameter":[]},"query":{"parameter":[]},"resful":{"parameter":[]},"body":{"mode":"none","parameter":[],"raw":"sdfdsfdsf","raw_para":[]},"auth":{"type":"noauth","kv":{"key":"","value":""},"bearer":{"key":""},"basic":{"username":"","password":""}},"event":{"pre_script":"","test":""},"description":""},"response":{"success":{"raw":"","parameter":[]},"error":{"raw":"","parameter":[]}},"mock":"{}","mock_url":""}]},{"name":"bearer","target_type":"api","mark":"developing","method":"GET","url":"","request":{"header":{"parameter":[]},"query":{"parameter":[]},"resful":{"parameter":[]},"body":{"mode":"none","parameter":[],"raw":"","raw_para":[]},"auth":{"type":"noauth","kv":{"key":"","value":""},"bearer":{"key":"12312312"},"basic":{"username":"","password":""}},"event":{"pre_script":"","test":""},"description":""},"response":{"success":{"raw":"","parameter":[]},"error":{"raw":"","parameter":[]}},"mock":"{}","mock_url":""},{"name":"basic","target_type":"api","mark":"developing","method":"GET","url":"","request":{"header":{"parameter":[]},"query":{"parameter":[]},"resful":{"parameter":[]},"body":{"mode":"none","parameter":[],"raw":"","raw_para":[]},"auth":{"type":"noauth","kv":{"key":"","value":""},"bearer":{"key":""},"basic":{"username":"11","password":"22"}},"event":{"pre_script":"","test":""},"description":""},"response":{"success":{"raw":"","parameter":[]},"error":{"raw":"","parameter":[]}},"mock":"{}","mock_url":""},{"name":"New Request","target_type":"api","mark":"developing","method":"GET","url":"","request":{"header":{"parameter":[]},"query":{"parameter":[]},"resful":{"parameter":[]},"body":{"mode":"none","parameter":[],"raw":"","raw_para":[]},"auth":{"type":"noauth","kv":{"key":"","value":""},"bearer":{"key":""},"basic":{"username":"","password":""}},"event":{"pre_script":"","test":""},"description":""},"response":{"success":{"raw":"","parameter":[]},"error":{"raw":"","parameter":[]}},"mock":"{}","mock_url":""}]}'

  it('转换成简要类型', () => {
    console.log("~~~qqq", Postman2ApiPost(data));
    expect(Postman2ApiPost(data)).toBe(testData);
  });

});

