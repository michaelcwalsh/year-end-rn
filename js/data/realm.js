const Realm = require('realm');

class User extends Realm.Object {}
User.schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id:    'int',
      email: 'string',
      password: 'string',
      username: 'string',
      name: 'string',
      location: {type: 'string', optional: true},
      bio: {type: 'string', optional: true},
      avatar: {type: 'string', optional: true},
      creationDate: 'date',
    },
};

export default new Realm({schema: [User]});
