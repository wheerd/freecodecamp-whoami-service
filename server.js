const express = require('express')
const useragent = require('useragent')
const app = express()

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'].split(',')[0],
        software: useragent.parse(req.headers['user-agent']).os.family
    })
})

app.listen(port, function () {
  console.log('WhoAmI service listening on port 8080!')
})
