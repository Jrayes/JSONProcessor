## Instructions

There are 6 `json` files, each of which contains 100 people records. In the language of your choice (although, JavaScript is preferred), please sift through the records in each of the files and distill the total records (across _all_ files) down to people who:

- Are `active`
- Have a balance exceeding $2000
- Have a `registered` timestamp _after_ January 1st, 2016

Write the records which meet the above criteria to a new file. You don't necessarily have to write the records to a new `json` file (you won't be penalized if you do). Assume disk space is somewhat scarce.

## Evaluation Criteria

- Efficiency
  - Memory consumption
  - Execution speed
  - Number of concurrently open files, etc.
- Reusability
- Testability
- Scalability
  - Does the solution work for 100 files instead of 6?
  - Does it work with 1000 records in each file?
- Documentation
  - How do I run this thing?

You're free to make any assumptions you like outside of what I've outlined and would be helpful if you'd document them. If you require external dependencies, they should **not** be submitted with solution - an install and/or compilation step should included as part of the documentation.

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