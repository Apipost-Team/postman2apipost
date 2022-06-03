import { IPostman2ApiPost } from '../types/postman2apipost'
import { Postman2ApiPost } from '../src/postman2apipost'


describe('works', () => {
  const data: IPostman2ApiPost = {
    "info": {
      "_postman_id": "ea70cad4-dd70-41ee-96b9-c52bc66e3e23",
      "name": "123999 Copy",
      "description": "# Introduction\nWhat does your API do?\n\n# Overview\nThings that the developers should know about\n\n# Authentication\nWhat is the preferred way of using the API?\n\n# Error Codes\nWhat errors and status codes can a user expect?\n\n# Rate limit\nIs there a limit to the number of requests an user can send?",
      "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
      "_exporter_id": "5424870"
    },
    "item": [
      {
        "name": "http://echo.apipost.cn/get.php",
        "event": [
          {
            "listen": "prerequest",
            "script": {
              "exec": [
                "console.log(BigInt(\"9223372036854775807\"))"
              ],
              "type": "text/javascript"
            }
          }
        ],
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
                "key": "a",
                "value": "9223372036854775807",
                "type": "text"
              }
            ]
          },
          "url": "https://echo.apipost.cn/echo/123/get.php"
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
            "console.log('123')"
          ]
        }
      },
      {
        "listen": "test",
        "script": {
          "type": "text/javascript",
          "exec": [
            ""
          ]
        }
      }
    ]
  }
  const data2_1={
    "info": {
      "_postman_id": "ea70cad4-dd70-41ee-96b9-c52bc66e3e23",
      "name": "123999 Copy",
      "description": "# Introduction\nWhat does your API do?\n\n# Overview\nThings that the developers should know about\n\n# Authentication\nWhat is the preferred way of using the API?\n\n# Error Codes\nWhat errors and status codes can a user expect?\n\n# Rate limit\nIs there a limit to the number of requests an user can send?",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      "_exporter_id": "5424870"
    },
    "item": [
      {
        "name": "http://echo.apipost.cn/get.php",
        "event": [
          {
            "listen": "prerequest",
            "script": {
              "exec": [
                "console.log(BigInt(\"9223372036854775807\"))"
              ],
              "type": "text/javascript"
            }
          }
        ],
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
                "key": "a",
                "value": "9223372036854775807",
                "type": "text"
              }
            ]
          },
          "url": {
            "raw": "https://echo.apipost.cn/echo/123/get.php",
            "protocol": "https",
            "host": [
              "echo",
              "apipost",
              "cn"
            ],
            "path": [
              "echo",
              "123",
              "get.php"
            ]
          }
        },
        "response": []
      }
    ],
    "auth": {
      "type": "bearer",
      "bearer": [
        {
          "key": "token",
          "value": "sadasdas",
          "type": "string"
        }
      ]
    },
    "event": [
      {
        "listen": "prerequest",
        "script": {
          "type": "text/javascript",
          "exec": [
            "console.log('123')"
          ]
        }
      },
      {
        "listen": "test",
        "script": {
          "type": "text/javascript",
          "exec": [
            ""
          ]
        }
      }
    ]
  }
  
  it('Postman2.0', () => {
    expect(Postman2ApiPost(data).status).toEqual('success');
  });

  it('Postman2.1', () => {
    expect(Postman2ApiPost(data2_1).status).toEqual('success');
  });
});

