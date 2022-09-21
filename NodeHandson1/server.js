const http = require('http');
const port = 6000;
const data = {
    Name:'Ritika',
    LastName:'Joshi',
    Age:22,
    city:'Bangalore'
}
const jsonData = JSON.stringify(data);

const server = http.createServer((req, res) => {
    res.write(`<h1> Welcome To Hello World </h1>`);
    res.write(jsonData);
    res.end();
})


server.listen(port, () => {
    console.log(`Connected to port ${port}`);
})