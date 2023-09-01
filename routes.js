const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.write('<html><form action="/message" method="POST"><label> <input type="text" name="message"/></label><button type="submit">Submit</button></form></html>')
        return res.end();
    }
    if (req.url === '/message') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk, 'chunk...')
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            console.log(message)
        })
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
    }
    res.write('<html><p>Hello world</p></html>')
    res.end();
}


module.exports = requestHandler;