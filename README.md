<p align="center">
  <img src="img/nomi-logo-256.png" width="160" height="160" alt="糯米小镇团子 Logo">
</p>

# 糯米小镇 · Nomi Town

糯米小镇官网的静态源文件，提供服务器介绍、入服指南和服务器地址复制功能。小镇以 Minecraft 26.3 原版生存、悠闲种田、钓鱼烹饪与社区生活为主题；地址与客户端版本以QQ群公告为准。

- [官网](https://mc.missdrop.cn)
- [加入QQ群](https://qm.qq.com/q/JWCiU0jwyq)：按群公告获取启动器及账号设置说明
- [NomiTeam GitHub](https://github.com/NomiTeam)
- [爱发电](https://afdian.com/a/Missdrop)

服务器公开地址：`play.missdrop.cn`。

## 本地预览

本项目仅使用 HTML、CSS 和原生 JavaScript，无构建依赖、无打包步骤。可直接用浏览器打开 `index.html` 查看页面；也可在仓库根目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8000`，使用 Ctrl+C 停止预览。复制地址优先使用 Clipboard API，并提供 textarea 备用方案；浏览器拒绝复制时，页面会提示手动复制。

## 文件与维护

- `index.html`：首页内容、导航与搜索/分享元数据
- `css/styles.css`：响应式布局、颜色与键盘焦点样式
- `js/copy.js`：复制地址与可访问的状态提示
- `img/nomi-logo-*.png`：已确认的团子 Logo，按展示尺寸引用

页面不依赖外部字体、第三方图片或在线状态接口。更新服务器版本、地址时，应同步检查页面正文、元数据及本说明。

## 托管

官网使用 EdgeOne makers 静态托管。实际部署分支、触发方式与发布链路以现有托管配置为准；提交或推送代码不代表必然上线，发布后仍需回读线上页面确认。

## 许可与版权

保留原项目的 [GNU GPL v3 许可证](LICENSE)及原作者、贡献者版权，原项目作者信息为 Naipu（2025）。此仓库更新了品牌与页面内容；不替换或覆盖原项目的许可声明。
