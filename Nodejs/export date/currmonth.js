function mymonths()
{
    let month = new Date().getMonth();
    month++;
    //e.g array start in [0] (getMonth() return 0-11)
    //we dont have month 0 .. 
    return month;
}


module.exports={
    "mymonth" : mymonths
}