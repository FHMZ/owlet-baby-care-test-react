## Runnig locally with Yarn

First, checkout the develop branch to get all the code.

To run the development server:

```bash
1 - run yarn (To install node_modules)

2 - yarn start (to up the project)

Open (http://localhost:3000/login) with your browser to see the result.
```
---------------OR ------------------

## Runnig locally with Docker

First, checkout the develop branch to get all the code.

To run the development server:

```Docker
1 - run yarn (To install node_modules)

2 - docker build --tag app_owlet_1 . (To build the img)

3 - docker-compose build (to build docker-compose)

4 - docker-compose run app_owlet_1

Open (http://localhost:3000/login) with your browser to see the result.
```
