function curryear()
{
    let year = new Date().getFullYear()
    return year;
}

module.exports={
    "myyear":curryear
}