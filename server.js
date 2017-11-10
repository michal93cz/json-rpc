const jayson = require('jayson');

const usersData = [
    {
        name: 'Kirsten',
        email: 'kirsten.greenholt@corkeryfisher.info'
    },
    {
        name: 'Anna',
        email: 'anna.white@gmail.com'
    },
    {
        name: 'Christophe',
        email: 'christophe.johnson@corkeryfisher.com'
    },
    {
        name: 'Bartell',
        email: 'bartell.wood@gmail.com'
    },
    {
        name: 'Anna',
        email: 'anna.webber@corkeryfisher.com'
    }
];

// create a server
const server = jayson.server({
    sayHello: (args, callback) => callback(null, 'Hello'),
    add: (args, callback) => callback(null, args[0] + args[1]),
    getUser: (args, callback) => callback(null, usersData.filter((object) => object.name === args.name || object.email === args.email)),
    notFound: (args, callback) => callback({code: 404, message: 'Not Found'})
});

server.http().listen(3000);
