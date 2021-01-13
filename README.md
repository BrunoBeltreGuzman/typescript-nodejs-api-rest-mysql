# typescript-nodejs-api-rest-mysql

**API-REST using Typescript, Nodejs and Mysql**

# Structure:

**Simple and descriptive structure!**

```typescript
this.router.post("/", apiUsers.insert);

this.router.put("/:id", apiUsers.update);

this.router.delete("/:id", apiUsers.delete);

this.router.get("/", apiUsers.findAll);

this.router.get("/:id", apiUsers.findById);
```

# Install

**Install**

```console

$ npm install

```

**Run**

```console

$ "build": "tsc",
$ "start": "node dist/index.js",
$ "dev": "nodemon src/index.ts --exec ts-node"

```

**Dependencies**

```json
       "dependencies": {
              "express": "^4.17.1",
              "morgan": "^1.10.0",
       },
       "devDependencies": {
              "@types/express": "^4.17.10",
              "@types/morgan": "^1.9.2",
              "@types/node": "^14.14.20",
              "mysql2": "^2.2.5",
              "nodemon": "^2.0.7",
              "ts-node": "^9.1.1",
              "typescript": "^4.1.3"
       }
```

# Routers:

Fetch ALL Records

- `GET - http://localhost:2000/users/`

Fetch Single Record

- `GET - http://localhost:2000/users/{id}`

Create Record

- `POST - http://localhost:2000/users/`

Update Record

- `PUT - http://localhost:2000/users/{id}`

Remove Records

- `DELETE - http://localhost:2000/users/{id}`
