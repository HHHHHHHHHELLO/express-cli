# Express-cli使用方法

---

> Express + Sequelize-cli

在本项目中sequelize-cli的用法

``` json
"scripts": {
    "dev": "cross-env NODE_ENV=development nodemon bin/www.js", 
    "start": "cross-env NODE_ENV=production nodemon bin/www.js",
    "db:dev": "cross-env NODE_ENV=development sequelize db:create --charset 'utf8mb4'",
    "db:prod": "cross-env NODE_ENV=production sequelize db:create --charset 'utf8mb4'",
    "mod": "sequelize model:generate",
    "mig:dev": "cross-env NODE_ENV=development sequelize db:migrate",
    "mig:prod": "cross-env NODE_ENV=production sequelize db:migrate",
    "seed": "sequelize seed:generate",
    "seed:dev": "cross-env NODE_ENV=development sequelize db:seed:all",
    "seed:prod": "cross-env NODE_ENV=production sequelize db:seed:all"
  },
```

`npm run dev` 启动项目 	-开发环境

`npm run start` 启动项目 -生产环境

`npm run db:dev` 根据.env.development里的DB_DATABASE创建数据库 -开发环境

`npm run db:prod` 根据.env.production里的DB_DATABASE创建数据库 -开发环境

`npm run mod -- --name table_name --attributes field1:type,field2:type  `  需要用到models模型，而创建模型的时候会自动生成一份migrations迁移文件

`npm run mig:dev` 真正创建表到开发环境数据库

`npm run mig:prod` 真正创建表到生产环境

`npm run seed -- --name table_name` 创建种子文件

`npm run seed:dev` 将测试数据填充在测试环境下的数据库中

`npm run seed:prod` 将测试数据填充在正式环境下的数据库中