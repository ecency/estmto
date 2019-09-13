var express = require('express')

express().use(function (req, res) {
  res.status(302)
  console.log(req.originalUrl);
  res.header('Server', 'Apache/2.4.23 (Win64) PHP/5.6.25')
  res.header('Location', 'esteem:/'+req.originalUrl)
  res.header('Content-Type', 'text/html; charset=iso-8859-1')
  res.end()
}).listen(8008)