import path from 'path'

import { Sequelize } from 'sequelize-typescript'
import container from 'simple-di'

const dbConnection = new Sequelize(process.env.SQL_DATABASE, null, null, {
  host: process.env.SQL_HOST,
  repositoryMode: true,
  models: [path.join(__dirname, '..', 'models')],
  port: Number(process.env.SQL_PORT),
  logging: process.env.NODE_ENV === 'production' ? false : console.log,
  dialect: 'mysql',

  replication: {
    read: [
      {
        host: process.env.SQL_HOST_READ,
        username: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        port: process.env.SQL_PORT,
      }
    ],
    write: {
      host: process.env.SQL_HOST,
      username: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      port: process.env.SQL_PORT,
    },
  },
})

container.register(Sequelize.name, () => dbConnection)

