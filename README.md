postman2apipost 将ApiPost流程测试中文件数据转为ApiPost可辨识的JSON格式

# 🎉 特性

- 支持格式 
- postman2.0 or postman2.1

# 安装

```shell
npm i postman2apipost
```

# 基础使用
需引入：

```js
import { str2testData } from 'postman2apipost';
let postmanJson={
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

let apipostJson=postman2apipost(postmanJson);
```


# 开源协议

postman2apipost 遵循 [MIT 协议](https://github.com/Apipost-Team/postman2apipost)。
