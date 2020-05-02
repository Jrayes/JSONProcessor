## Install MongoDB

## If on OSX:
### This assumes you have homebrew, if you don't, you can get it here.
https://brew.sh/

```
brew update
brew install mongodb-community
```
## If on Linux:
Refer to these instructions: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

## Start mongodb

```
mkdir -p ~/data/db
sudo mongod --dbpath ~/data/db
```

## Build and run project

```

npm install
npm run down
npm run start

```

## Run tests

```

npm run test

```
