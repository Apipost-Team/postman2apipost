import { IPostman2ApiPost } from '../types/postman2apipost'
import { Postman2ApiPost } from '../src/postman2apipost'


describe('works', () => {
  const data: IPostman2ApiPost = {
    "info": {
      "_postman_id": "318a3a25-e601-4519-a070-a39b455c54fc",
      "name": "123999",
      "description": "# Introduction\nWhat does your API do?\n\n# Overview\nThings that the developers should know about\n\n# Authentication\nWhat is the preferred way of using the API?\n\n# Error Codes\nWhat errors and status codes can a user expect?\n\n# Rate limit\nIs there a limit to the number of requests an user can send?",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      "_exporter_id": "5424870"
    },
    "item": [{
        "name": "testFolder",
        "item": [{
            "name": "API key",
            "protocolProfileBehavior": {
              "disableBodyPruning": true
            },
            "request": {
              "auth": {
                "type": "apikey",
                "apikey": [{
                    "key": "value",
                    "value": "1231231",
                    "type": "string"
                  },
                  {
                    "key": "key",
                    "value": "123",
                    "type": "string"
                  }
                ]
              },
              "method": "GET",
              "header": [{
                "key": "ikk",
                "value": "123",
                "type": "text",
                "description":"123"
              }],
              "body": {
                "mode": "formdata",
                "formdata": [{
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
                "query": [{
                  "key": "999",
                  "value": "123"
                }],
                "variable": [{
                  "key": "bbb",
                  "value": "9999000"
                }]
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
                "urlencoded": [{
                  "key": "123",
                  "value": "123",
                  "type": "text"
                }]
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
          "apikey": [{
              "key": "value",
              "value": "32432",
              "type": "string"
            },
            {
              "key": "key",
              "value": "124",
              "type": "string"
            }
          ]
        },
        "event": [{
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
            "bearer": [{
              "key": "token",
              "value": "12312312",
              "type": "string"
            }]
          },
          "method": "GET",
          "header": [{
            "key": "aaa",
            "value": "12312312",
            "description": "21312312312",
            "type": "text"
          }],
          "url": {
            "raw": "?123123=3123",
            "query": [{
              "key": "123123",
              "value": "3123",
              "description": "312312"
            }]
          }
        },
        "response": []
      },
      {
        "name": "basic",
        "request": {
          "auth": {
            "type": "basic",
            "basic": [{
                "key": "password",
                "value": "22",
                "type": "string"
              },
              {
                "key": "username",
                "value": "11",
                "type": "string"
              }
            ]
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
      "bearer": [{
        "key": "token",
        "value": "sadasdas",
        "type": "string"
      }]
    },
    "event": [{
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
    "variable": [{
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
  const data2_1={
    "info": {
      "name": "1030698842 的项目",
      "description": "",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "variable": [],
    "auth": {
      "type": "noauth",
      "apikey": [
        {
          "key": "value",
          "value": "",
          "type": "string"
        },
        {
          "key": "key",
          "value": "",
          "type": "string"
        }
      ],
      "bearer": [
        {
          "key": "token",
          "value": "",
          "type": "string"
        }
      ],
      "basic": [
        {
          "key": "username",
          "value": "",
          "type": "string"
        },
        {
          "key": "password",
          "value": "",
          "type": "string"
        }
      ]
    },
    "env": [],
    "item": [
      {
        "name": "新建接口",
        "event": [
          {
            "listen": "prerequest",
            "script": {
              "type": "text/javascript",
              "exec": [
                "wewrew"
              ]
            }
          },
          {
            "listen": "test",
            "script": {
              "type": "text/javascript",
              "exec": [
                "12312312"
              ]
            }
          }
        ],
        "request": {
          "method": "POST",
          "url": {
            "raw": "www.baidu.com?vvv=123213",
            "host": [
              "www",
              "baidu",
              "com"
            ],
            "query": [
              {
                "key": "vvv",
                "value": "123213"
              }
            ],
            "variable": []
          },
          "header": [
            {
              "key": "aaa",
              "value": "12312321",
              "type": "text"
            }
          ],
          "body": {
            "mode": "raw",
            "raw": "{\n\t\"aa\": \"123133\",\n\t\"b\": \"123123\"\n}"
          },
          "auth": {
            "type": "apikey",
            "apikey": [
              {
                "key": "value",
                "value": "123",
                "type": "string"
              },
              {
                "key": "key",
                "value": "a",
                "type": "string"
              }
            ],
            "bearer": [
              {
                "key": "token",
                "value": "",
                "type": "string"
              }
            ],
            "basic": [
              {
                "key": "username",
                "value": "",
                "type": "string"
              },
              {
                "key": "password",
                "value": "",
                "type": "string"
              }
            ]
          },
          "description": ""
        }
      }
    ]
  }
  
  
  
  
  // it('Postman2.0', () => {
  //   expect(Postman2ApiPost(data).status).toEqual('success');
  // });

  it('Postman2.1', () => {
    expect(Postman2ApiPost(data2_1).status).toEqual('success');
  });
});

