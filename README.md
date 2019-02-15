# 注意

数据库请自行配置

## 顺序

1. cnpm install --save egg-sequelize mysql2
2. cnpm i --save-dev sequelize-cli
3. npx sequelize init
4. npx sequelize migration:generate --name=init-[sys-user]
5. npx sequelize db:migrate //升级数据库
6. 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
7. npx sequelize db:migrate:undo
8. 可以通过 `db:migrate:undo:all` 回退到初始状态
9. npx sequelize db:migrate:undo:all
