const jayson = require('jayson');

// create a client
const client = jayson.client.http({
    port: 3000
});

// invoke "sayHello"
client.request('sayHello', {}, (err, response) => {
    if(err) throw err;
    console.log(response.result);
});

// invoke "add"
client.request('add', [3, 3], (err, response) => {
    if(err) throw err;
    console.log(response.result);
});

// invoke "getUser"
client.request('getUser', { name: 'Anna' }, (err, response) => {
    if(err) throw err;
    console.log(response.result);
});

// invoke "notFound"
client.request('notFound', {}, (err, response) => {
    if(err) console.error(err);
});
