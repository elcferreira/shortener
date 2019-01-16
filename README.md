# Shortener Link by [leopoldo.me](https://leopoldo.me)

> An app to shortner links

## The Stack
This project uses Nuxt.JS that is a Vue.js framework. My choice to this framework is because is pretty easy to build a fast app and fine-tuning the experience without much complexity.

## The demo
[DEMO](http://shortener.leopoldo.me/)

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate

# ------------------------------

# generate static project using DOCKER
$ yarn build:docker

# >>>> localhost:3000
```

## Implementations

### Copy short link with click
This function is a button that allow the use to copy to clipboard with one click.

### Registrate a user session 
Save a user session that saves the shorten url generated, and when the user access again the website, the old shorten url will appear.

### Analyze the URL
When the user inputs the URL is made a verify to detect if it is a real URL and detect if have protocols like 'https://', 'http://' or 'ftp://'

### Count page view
When the shorten link is accessed save the page views


