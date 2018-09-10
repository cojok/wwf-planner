# wwf-planner
Weißwurst breakfasts planner
This is a demo app dome in nuxtjs(vuejs ssr) + vuex + vuetify + adonisj REST api
In this app you can create a breakfast and invite people to register to the breakfast
The app will automatically tell you how many Weißwurst, Pretzels, Senf Glasses and Beer you need to buy to get everyone participating satisfied

# Adonijs REST API
#### In order to start the api please make sure to run the following commands:
``` bash
$ npm i -g @adonisjs/cli
``` 
``` bash
$ cd api && npm i
``` 
#### After installing node modules please make sure you create the .env file and fill it out with your db credentials:
``` bash
$ cp .env.example .env
``` 
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=your_user
DB_PASSWORD=user_password
DB_DATABASE=wwf-planner
#### Now lets create the DB:
``` bash
$ adonis migration:run
```
#### Start the server:
``` bash
$ adonis serve --dev
```
# Nuxt Vuejs SSR 
####In order to start the front end please make sure to run the following commands:
``` bash
$ cd app && npm i
```
``` bash
$ npm run dev
``` 