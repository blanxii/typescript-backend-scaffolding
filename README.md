# 🧙‍♀️ Another Typescript Backend Scaffolding

TypeScript backend application to speed-up small projects, with Docker support.

### Using
- [Commander](https://www.npmjs.com/package/commander): To manage the CLI processes.
- [Express 4](https://www.npmjs.com/package/express): Express server to handle / manage the http requests.
- [Sequelize](https://www.npmjs.com/package/sequelize): Sequelize ORM with the MySQL2 plugin enabled.
- [SimpleDI](https://www.npmjs.com/package/simple-di): As the Dependency Injection.


## Get Started

Just start using docker with

```
make build
```

Or without docker using (keep in mind you'll need to rename the .env.sample with the right credentials) 

```
npm install
npm run develop
```

You can open your browser now to http://localhost:3000/v1/hello

## License
This project is released under the [WTFPL LICENSE](http://www.wtfpl.net/ "WTFPL LICENSE").
