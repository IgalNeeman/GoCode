let str = "my name is igal";
let n = "neeman";
var p = new Promise((resolve, reject) => { str == n ? resolve(str + " " + n) : reject("not ok"); });

p.then((x) => {
    console.log(x); /*my name is igal neeman*/
    console.log("the function are done.")
    return 1;
})


p.catch((y) => { throw new Error("sorry try again .. ") }); 
/*(node:9104) UnhandledPromiseRejectionWarning: Error: sorry try again .. */
p.catch((err) => {  console.log(err.message || err); });
/* ביטוי ששונה מ 0 אבל הכי קרוב עליו יוצג על המסך || err */
