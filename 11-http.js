const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if (req.url === '/about'){
        res.end("here's the about page")
    }
    res.end(
        `<h1>Ooops, page doesn't exist</h1>
        <a href="/">back </a>
        `
    )
})

server.listen(5000)