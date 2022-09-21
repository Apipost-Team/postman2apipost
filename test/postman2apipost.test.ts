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
      "_postman_id": "e8bb205a-e16e-4d7c-bc33-b027d53cb387",
      "name": "优E洗",
      "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
      "_exporter_id": "5424870"
    },
    "item": [
      {
        "name": "商户微信登陆",
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "code",
                "value": "0037Mw100hmgzO1tRM3007nw1V37Mw1Q",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/socials/:social_type/mch/authorizations",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "socials",
              ":social_type",
              "mch",
              "authorizations"
            ],
            "variable": [
              {
                "key": "social_type",
                "value": "wechat"
              }
            ]
          }
        },
        "response": []
      },
      {
        "name": "商户修改密码发送短信",
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "phone",
                "value": "15163449009",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://uex.vvv5g.com/api/v1/verificationCodes",
            "protocol": "https",
            "host": [
              "uex",
              "vvv5g",
              "com"
            ],
            "path": [
              "api",
              "v1",
              "verificationCodes"
            ]
          }
        },
        "response": []
      },
      {
        "name": "商户修改密码",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "verification_key",
                "value": "verificationCode_gwbLXjvddn72VKP",
                "type": "default"
              },
              {
                "key": "verification_code",
                "value": "1234",
                "type": "default"
              },
              {
                "key": "password",
                "value": "1234567890",
                "type": "default"
              },
              {
                "key": "phone",
                "value": "15163449009",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/authorizations/mch/reset/pwd",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "authorizations",
              "mch",
              "reset",
              "pwd"
            ]
          }
        },
        "response": []
      },
      {
        "name": "商户注册",
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "verification_key",
                "value": "verificationCode_KBzNNPQ7ia6Y9KP",
                "type": "default"
              },
              {
                "key": "verification_code",
                "value": "1234",
                "type": "default"
              },
              {
                "key": "password",
                "value": "123456",
                "type": "default"
              },
              {
                "key": "phone",
                "value": "15681435101",
                "type": "default"
              },
              {
                "key": "name",
                "value": "15681435101",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/users",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "users"
            ]
          }
        },
        "response": []
      },
      {
        "name": "商户账密登录",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "username",
                "value": "15163449009",
                "description": "`",
                "type": "default"
              },
              {
                "key": "password",
                "value": "1234567890",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/authorizations/merchant/store",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "authorizations",
              "merchant",
              "store"
            ]
          }
        },
        "response": []
      },
      {
        "name": "获取首页通知",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "GET",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": []
          },
          "url": {
            "raw": "https://{{host}}/api/v1/notice?store_id=",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "notice"
            ],
            "query": [
              {
                "key": "store_id",
                "value": ""
              }
            ]
          }
        },
        "response": []
      },
      {
        "name": "获取首页轮播图",
        "protocolProfileBehavior": {
          "disableBodyPruning": true
        },
        "request": {
          "method": "GET",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": []
          },
          "url": {
            "raw": "https://{{host}}/api/v1/home/banner?store_id=&type",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "home",
              "banner"
            ],
            "query": [
              {
                "key": "store_id",
                "value": ""
              },
              {
                "key": "type",
                "value": ""
              }
            ]
          }
        },
        "response": []
      },
      {
        "name": "进入门店(门店详情)",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "longitude",
                "value": "116.148891",
                "type": "text"
              },
              {
                "key": "latitude",
                "value": "39.917261",
                "type": "text"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/store/1",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "store",
              "1"
            ]
          }
        },
        "response": []
      },
      {
        "name": "获取门店列表",
        "request": {
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "longitude",
                "value": "116.148891",
                "type": "text"
              },
              {
                "key": "latitude",
                "value": "39.917261",
                "type": "text"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/store",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "store"
            ]
          }
        },
        "response": []
      },
      {
        "name": "门店历史",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "longitude",
                "value": "116.148891",
                "type": "text"
              },
              {
                "key": "latitude",
                "value": "39.917261",
                "type": "text"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/store/history",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "store",
              "history"
            ]
          }
        },
        "response": []
      },
      {
        "name": "充值协议",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": []
          },
          "url": {
            "raw": "https://{{host}}/api/v1/config",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "config"
            ]
          }
        },
        "response": []
      },
      {
        "name": "洗车套餐",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "store_id",
                "value": "1",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/store/recharge/pkg",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "store",
              "recharge",
              "pkg"
            ]
          }
        },
        "response": []
      },
      {
        "name": "门店商品",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "longitude",
                "value": "116.148891",
                "type": "text"
              },
              {
                "key": "latitude",
                "value": "39.917261",
                "type": "text"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/product?store_id=1",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "product"
            ],
            "query": [
              {
                "key": "store_id",
                "value": "1"
              }
            ]
          }
        },
        "response": []
      },
      {
        "name": "门店商品详情",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "id",
                "value": "1",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/product/show",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "product",
              "show"
            ]
          }
        },
        "response": []
      },
      {
        "name": "产品下单",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "store_product_id",
                "value": "1",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/order/product/store",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "order",
              "product",
              "store"
            ]
          }
        },
        "response": []
      },
      {
        "name": "余额支付",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "id",
                "value": "30",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/payment/balance",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "payment",
              "balance"
            ]
          }
        },
        "response": []
      },
      {
        "name": "门店套餐下单",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "pkg_id",
                "value": "3",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/order/store/chg/pkg/store",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "order",
              "store",
              "chg",
              "pkg",
              "store"
            ]
          }
        },
        "response": []
      },
      {
        "name": "我的钱包",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": []
          },
          "url": {
            "raw": "https://{{host}}/api/v1/order/store/chg/pkg",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "order",
              "store",
              "chg",
              "pkg"
            ]
          }
        },
        "response": []
      },
      {
        "name": "洗车",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": []
          },
          "url": {
            "raw": "https://{{host}}/api/v1/wash/store",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "wash",
              "store"
            ]
          }
        },
        "response": []
      },
      {
        "name": "门店专属金余额 Copy",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": []
          },
          "url": {
            "raw": "https://{{host}}/api/v1/order/store/chg/pkg",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "order",
              "store",
              "chg",
              "pkg"
            ]
          }
        },
        "response": []
      },
      {
        "name": "商家修改门店 LOGO",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "logo",
                "value": "11111",
                "type": "default"
              },
              {
                "key": "store_id",
                "value": "1",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/store/logo/update",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "store",
              "logo",
              "update"
            ]
          }
        },
        "response": []
      },
      {
        "name": "商家修改门店营业时间",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "url": {
            "raw": "https://{{host}}/api/v1/store/business_hours/update?start_time=2022-10-20 22:30:00&end_time=2022-10-20 08:30:00&store_id=1",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "store",
              "business_hours",
              "update"
            ],
            "query": [
              {
                "key": "start_time",
                "value": "2022-10-20 22:30:00"
              },
              {
                "key": "end_time",
                "value": "2022-10-20 08:30:00"
              },
              {
                "key": "store_id",
                "value": "1"
              }
            ]
          }
        },
        "response": []
      },
      {
        "name": "商家修改门店弹窗",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "popup_pic",
                "value": "1",
                "type": "text"
              },
              {
                "key": "popup_image",
                "value": "1",
                "type": "text"
              },
              {
                "key": "popup_title",
                "value": "1",
                "type": "text"
              },
              {
                "key": "popup_redirect",
                "value": "1",
                "type": "text"
              },
              {
                "key": "popup_text",
                "value": "1",
                "type": "text"
              },
              {
                "key": "on_popup",
                "value": "1",
                "type": "text"
              },
              {
                "key": "store_id",
                "value": "1"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/store/popup/update?",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "store",
              "popup",
              "update"
            ],
            "query": [
              {
                "key": "",
                "value": ""
              }
            ]
          }
        },
        "response": []
      },
      {
        "name": "上传图片",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "image",
                "type": "file",
                "src": "/C:/Users/berrx/Desktop/测试图片/bee-gd82d4098a_640.png"
              },
              {
                "key": "type",
                "value": "logo",
                "type": "default"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/images",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "images"
            ]
          }
        },
        "response": []
      },
      {
        "name": "删除banner图片",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "popup_pic",
                "value": "1",
                "type": "text"
              },
              {
                "key": "popup_image",
                "value": "1",
                "type": "text"
              },
              {
                "key": "popup_title",
                "value": "1",
                "type": "text"
              },
              {
                "key": "popup_redirect",
                "value": "1",
                "type": "text"
              },
              {
                "key": "popup_text",
                "value": "1",
                "type": "text"
              },
              {
                "key": "on_popup",
                "value": "1",
                "type": "text"
              },
              {
                "key": "store_id",
                "value": "1"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/home/banner/2/delete",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "home",
              "banner",
              "2",
              "delete"
            ]
          }
        },
        "response": []
      },
      {
        "name": "添加Banner图片",
        "request": {
          "auth": {
            "type": "bearer",
            "bearer": [
              {
                "key": "token",
                "value": "{{jwt_user2}}",
                "type": "string"
              }
            ]
          },
          "method": "POST",
          "header": [],
          "body": {
            "mode": "formdata",
            "formdata": [
              {
                "key": "pic",
                "value": "1",
                "type": "text"
              },
              {
                "key": "store_id",
                "value": "1",
                "type": "text"
              }
            ]
          },
          "url": {
            "raw": "https://{{host}}/api/v1/home/banner/save",
            "protocol": "https",
            "host": [
              "{{host}}"
            ],
            "path": [
              "api",
              "v1",
              "home",
              "banner",
              "save"
            ]
          }
        },
        "response": []
      }
    ],
    "event": [
      {
        "listen": "prerequest",
        "script": {
          "type": "text/javascript",
          "exec": [
            ""
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
    ],
    "variable": [
      {
        "key": "host",
        "value": "uex.vvv5g.com",
        "type": "default"
      },
      {
        "key": "jwt_user2",
        "value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3VleC52dnY1Zy5jb20vYXBpL3YxL3NvY2lhbHMvd2VjaGF0L21jaC9hdXRob3JpemF0aW9ucyIsImlhdCI6MTY2MzEyNjQyNywiZXhwIjoxNjYzMTk4NDI3LCJuYmYiOjE2NjMxMjY0MjcsImp0aSI6ImtLd09FZHNwWkdnYlNnT1giLCJzdWIiOiI4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.KJdR47GujGMYOXoQE1SDqC7fDLiJyNoQ-XtkUibkk6g",
        "type": "default"
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

