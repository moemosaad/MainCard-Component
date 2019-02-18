# MainCard-Component

This is a scaled microservice for an open-source video player and Tomatometer rating component for the recreation of the Rotten Tomatoes website.

## Motivation

This project was developed to gain a fundamental understanding of microservice system design.

### Prerequisites

At least 5 Amazon EC2 instances with static ip addresses is preferred for the deployment of this service. 
1 for the load balancer, 1 for the database server, and 3 or more for microservice instances.

### Installing


## Running the tests

## Screenshots

Include logo/demo screenshot etc.

## Deployment

### Docker

To start load balancer

  1. Use DockerFile to build image. In Nginx directory, run
  ```
  docker build -t loadbalancer .
  ```
  
  2. To create containers with port forwarding and detached-mode, run
  ```
  docker run -p 80:80 -d loadbalancer
  ```

To start web service

  1. Use docker-compose.yml to build the containers for the project. Within the MainCard-Component directory, run
  ```
  docker-compose up
  ```
  to run in detached-mode, run
  ```
  docker-compose up -d
  ```

To start database


### Manually

Within MainCard-Component directory:

```
   npm install
   npm start
```

## Built with

#### Tech/frameworks used

* React
* NodeJs/Express
* PostgreSQL

#### Features

* NGINX
* Redis
* Docker
* AWS EC2 (Optional)

#### Testing

* Artillery
* Loader.io

## Authors

Moe Mosaad

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Nick Bisignano (a good friend)
* Inspiration - the quest to build the best systems possible

MIT © Moe Mosaad
