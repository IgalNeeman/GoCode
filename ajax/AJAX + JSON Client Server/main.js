function makerquest()
{
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function() //onreadystatechane is object to test the state!!
    {
        if(httprequest.readyState === XMLHttpRequest.DONE) // is check if the object XMLhttpRequest done ..
        {
            if(httprequest.status === 200)
            {
                var json = JSON.parse(httprequest.responseText);
                document.querySelector('.response').innerHTML = json.rates.ILS;
             
            }
            else
            {
                alert("no value, there are problem..");
            }
        }
    }
    //למעלה אמרנו לפונקציה רק מה אני רוצה שהיא תעשה

    httprequest.open('GET','https://api.exchangeratesapi.io/latest'); //כאן קראתי לפונקצייה עם מטודה של ג'ט והקובץ שעליו היא תפנה
    httprequest.send(); // כאן בסך הכל אני שולח אותו - שילך ויביא לי את כל מה שהגדרתי לו זה הכל
}