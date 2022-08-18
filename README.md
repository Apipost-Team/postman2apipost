<p align="center">
  <a href="https://adesign.apipost.cn/" target="_blank">
    <img alt="A-Design Logo" width="360" src="https://img.cdn.apipost.cn/cdn/opensource/apipost-opensource.svg" />
  </a>
</p>

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
import { postman2apipost } from 'postman2apipost';

let result=postman2apipost(postmanJson);
console.log(result.data); // 结果
//成功转换 
result.status // success
result.data // 转换后的数据

//失败
result.status // error
result.message // 错误信息
```


# 开源协议

postman2apipost 遵循 [MIT 协议](https://github.com/Apipost-Team/postman2apipost)。
