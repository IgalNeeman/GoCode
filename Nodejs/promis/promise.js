let num = 4;
new Promise(  (x, y)=> { num == 4 ? x() : y() })
.then(()=>{console.log("ok")})
.catch(()=>{console.log("no")})