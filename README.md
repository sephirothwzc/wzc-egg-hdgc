# 注意

数据库请自行配置
微信 appid、appsecret 请自行更改

## 安装依赖

推荐使用 cnpm  
cnpm install

## 数据库顺序

1. npx sequelize init
2. npx sequelize db:migrate //升级数据库
3. 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
4. npx sequelize db:migrate:undo
5. 可以通过 `db:migrate:undo:all` 回退到初始状态
6. npx sequelize db:migrate:undo:all
