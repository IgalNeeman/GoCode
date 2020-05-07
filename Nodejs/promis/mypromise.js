let num = 5;
class Mypromise {

    constructor(p) {
        this.func = p;
    }

    then(x) {
        this.resolve = x;
        return this;
    }
    catch(y) {
        this.reject = y;
        return this;
    }
    runpromise() {
        this.func(this.resolve, this.reject);
    }

}
var p = new Mypromise((resolve, reject) => { num != 4 ? resolve() : reject(); });
p.then((resolve,reject) => { console.log("sucsssfully") })
.catch((resolve,reject) => { console.log("Not sucsssfully") })
p.runpromise(); 