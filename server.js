const jayson = require('jayson');

// create a server
const server = jayson.server({
    // object with methods
});

server.http().listen(3000);
