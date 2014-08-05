Inventory App
-------------

This is a small app that allows you to put together an inventory of stuff you own. It's the companion app for thinkful's node course.

### Setting Up Mongo

- `brew install mongo`
- `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist`
- make sure it's running with `px aux | grep mongo`, if not `launchctl start` the above path

### Running The App

- `npm run seed` to add seed data
- `npm start` to start the app

### Running The Tests

- `npm test`

### Mongo CLI

To check in on the status of the database, you can use the simple command line tool. Just run `mongo` to start it -- this will put you into a mongo repl. From here, you can run `show dbs` to see a list of databases. If you ran the seeds, you should see the `inventory-dev` database. To jump into this database, run `use inventory-dev` -- this will put you into that database's context. Now you can run `show collections` to see all your models. In this case we only have one collection, `Items`, and you should see this. Now you can list out all the actual model instances in this collection with the command `db.items.find()`. Pretty nice! To get out of the repl, just type `exit`.

This is not essential to anything, but can be a good quick way to inspect the contents of your database if you need to check up on something.
