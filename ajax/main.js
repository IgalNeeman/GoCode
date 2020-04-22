document.querySelector('select[name=pets]').addEventListener('change',selectpets);
//console.log(document.querySelector('select[name=pets]'));
var baseurl = 'https://igalnoyman.com/getpets?pets=';
//define my url to test the dropdown list by key & value (using qslector change on change event .. )
function selectpets(e)
{
   // console.log('e', e);
    url = baseurl + e.target.value;
    makerquest(url);
    //console.log('URL = ', url);

}
function makerquest(url)
{
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange = function() //onreadystatechane is object to test the state!!
    {
        if(httprequest.readyState === XMLHttpRequest.DONE) // is check if the object XMLhttpRequest done ..
        {
            if(httprequest.status === 200)
            {
             //   var json = JSON.parse(httprequest.responseText);
              //  document.querySelector('.response').innerHTML = json.rates.ILS;
             
            }
            else
            {
             //   alert("no value, there are problem..");
            }
        }
    }
    //למעלה אמרנו לפונקציה רק מה אני רוצה שהיא תעשה
    httprequest.open('GET',url ); //כאן קראתי לפונקצייה עם מטודה של ג'ט והקובץ שעליו היא תפנה
    httprequest.send(); // כאן בסך הכל אני שולח אותו - שילך ויביא לי את כל מה שהגדרתי לו זה הכל
}