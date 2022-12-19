
app.get('/proxy2', (req, res) => {    

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Content-Type', 'application/json; charset=UTF-8');
  
    let openApiUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?" +
      "serviceKey=G%2FcdoytFHgq3H6oMmzNRykKukP9d%2BnHZeqBk9ADTIy0%2BVTSsCtv1A6whyeDIdTHaaDVBKWpSlqFk689epzG8fw%3D%3D" + 
      "&pageNo=1" + 
      "&numOfRows=1000" + 
      "&dataType=JSON" + 
      "&base_date=" + req.query.base_date + 
      "&base_time=0600" + 
      "&nx=" + req.query.nx +  
      "&ny=" + req.query.ny;  
  
  
    request.get({
      uri: openApiUrl
    }, (error, response, body) => {
      res.send(body);
    });
  }); 
  
  
  // 웹서버 실행하기
  app.listen(
    3000,            // 포트 번호 지정
    () => {          // 서버가 시작되었을 때 호출될 함수 = 리스너 = 이벤트 핸들러
      console.log(`${port}번 포트에서 서버 시작했음!`);
    } 
  );
  
  