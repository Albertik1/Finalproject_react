
## Table of Contents

- [My Tech Stack](#my-tech-stack-mern)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
  - [Original Tech Stack](#original-tech-stack)
- [Contributing](#contributing)
- [Guidelines to setup](#guidelines-to-setup)
- [API Endpoints](#api-endpoints)
  - [Base Url](#base-url---httplocalhost5000api)
  - [Users](#users)
  - [Posts](#posts)
  - [Answers](#answers)
  - [Comments](#comments)
  - [Tags](#tags)
- [Demo](#demo)
  - [Video](#video---watch-the-video)
  - [Images](#images)
- [Future Scope](#future-scope)

## My Tech Stack (MERN)

#### Front-end
* Front-end Framework: `React.js (with Redux)`
* Styling: `SASS` and `BOOTSTRAP`

#### Back-end
* For handling server requests: `Node.js with Express.js Framework`
* As Database: `MySQL`
* API tested using: `POSTMAN`

### Original Tech Stack
* For handling server requests: `C#`
* As Database: `Microsoft SQL Server`
* `.NET` as well


## Guidelines to setup
1. Create a `.env` file and the format should be as given in `.env.example`.
2. Run these commands then - 
    ```
    npm run installDep (To install all the dependencies)
    
    npm run auditDep (Run this to audit fix all the vulnerabilities)
    ```
3. Run `databaseConfig.sql` file in the mysql client
    ```
    source <file path>/databaseConfig.sql
    ```
4. _(Optional)_ Run `seed.sql` file in the mysql client for seed data
    ```
    source <file path>/seed.sql
    ```
    _Note: Change the database name in `databaseConfig.sql` & `seed.sql` under `USE` command_
5. Start the servers
    ```
    Option 1 (for running both the servers simultaneously):
    
    npm run dev
    
    Option 2 (for running both the servers individually):
    
    npm run server (for backend server only)
    
    npm run client (for frontend server only)
    ```
_NOTE: Might take sometime to start as there will be 2 servers running._

## API Endpoints

#### Base Url - `http://localhost:5000/api`

#### Users
* `GET /auth`
* `POST /auth`
* `POST /users/:id`
* `GET /users`
* `GET /users/:id`

#### Posts
* `GET /posts`
* `GET /posts/top`
* `GET /posts/tag/:tagname`
* `GET /posts/:id`
* `POST /posts/`
* `DELETE /posts/:id`

#### Answers
* `GET /posts/answers/:id`
* `POST /posts/answers/:id`
* `DELETE /posts/answers/:id`

#### Comments
* `GET /posts/comments/:id`
* `POST /posts/comments/:id`
* `DELETE /posts/comments/:id`

#### Tags
* `GET /tags`
* `GET /tags/:tag_name`

## Future Scope
* Setup `Sequelize` with `MySQL` in the `API`.
* Deploy the database to cloud, API, and client-side.


