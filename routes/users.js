var express = require('express');
var router = express.Router();
var conn = require('../database.js');
// another routes also appear here
// this script to fetch data from MySQL databse table

router.get('/user-list', function(req, res, next) {
  //console.log("conn", conn);
    var sql='SELECT * FROM Warning order by Num';
    
    conn.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log("Data : ", data);
    res.render('users.ejs', 
      { 
        title: 'User List', 
        userData: data
      }
    );
  });
  //return router;
});

module.exports = router;

/*

지금 보니까
일단 서버 연결은 된 것 같구
데이터도 콘솔로 잘 찍
데이터 원래 콘솔로 잘 나오긴햇오ㅠㅠ
웅 근데 렌더링 안되는거 ejs문법 틀린거같거든?
~.~
일단 뭐가 급해?
급한거 먼저 해결하쟈.
뭐가 있지? 그냥 이거 열리기만하면돼

그럼 오빠랑 ejs문법뜯어보자
저게 아닌거같아
*/