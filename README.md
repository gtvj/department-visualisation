# Node D3 department visualisation

## Development machine set up

On the server side, this project uses the Node.js Express web framework with Pug templates and MongoDB for data storage. On the client side D3 is used for data visualisation along with some very light-touch jQuery for event management. You'll need to install MongoDB with: 

```bash
brew tap mongodb/brew
brew install mongodb-community
```

Then install the NPM modules with

```bash
npm install
```

## Daily use

Start MongoDB in one terminal session with:

```bash
mongod --config /usr/local/etc/mongod.conf
```

Then initiate a server running at http://localhost:3000 with 

```bash
npm start
```
