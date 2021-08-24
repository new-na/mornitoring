var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// view engine setup
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//listen이 port를 시작하는 코드인데
//너 코드에서 listen이 없었어.
app.listen(5000, () => {
  console.log("using 5000");
})

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  //res.status(err.status || 5000);
  res.status(5000);
  res.render('error');
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

module.exports = app;
module.exports = router;
*/