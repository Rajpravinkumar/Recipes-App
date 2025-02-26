const loggers = (req, res, next) => {
  console.log(`request url: ${req.url}`);
  console.log(`request method:${req.method}`);
  console.log(`request headers:${JSON.stringify(req.headers)}`);
  console.log(`request query:${JSON.stringify(req.query)}`);
  console.log(`request params:${JSON.stringify(req.param)}`);
  console.log(`request body:${JSON.stringify(req.body)}`);
  console.log(`request cookies:${JSON.stringify(req.cookies)}`);
  console.log("--------------------------------------------");
  next();
};

module.exports = loggers;
