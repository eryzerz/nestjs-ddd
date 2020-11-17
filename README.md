# NestJS API DDD

## Description
  Base application API made with NestJS, TypeORM, and PostgreSQL

###  Folder structure
    Code organization based on NestJS modules with Domain Driven Design, focused on codebase scalability.

### SOLID
    Using SOLID principles to provide better code design for easier maintenance and testing.

## Installation

```bash
$ npm install
$ docker-compose up -d
```

### Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Populate data
```bash
$ npm run seed:run
```

## Endpoints
Full documentation in [Postman](https://documenter.getpostman.com/view/6367350/TVeqcShB)

```
/users
/promotions
/orders
/products
/promo-details
```

## License
  Nest is [MIT licensed](LICENSE).
