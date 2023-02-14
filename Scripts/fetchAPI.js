


function fetchAPI(sortList) {

  fetch('https://r2ohhqwnmmnxvnjaoflrmeouam0zhooq.lambda-url.us-east-2.on.aws/?list={sortList}')
    .then(response=>response.json)
    .then(console.log);

  /*const options = {
  method: 'post',
  url: 'https://r2ohhqwnmmnxvnjaoflrmeouam0zhooq.lambda-url.us-east-2.on.aws/?list={sortList}',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials':true,
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }*/
  
};

/*axios.request(options).then(function (response) {
	console.log(response.data);
  var output = JSON.stringify(response.data);
  document.getElementById("p1").innerHTML=output;
}).catch(function (error) {
	console.error(error);
});
};*/


