var form = document.querySelector('form');
var choose = document.querySelector('#age')
var errorspan = document.querySelector('.error').choose.addEventListner('input',function()
{
    showError();
});
form.addEventListener('submit', function(e) { handelsubmit(e); });

function showError(e)
{
    if(choose.value != ' '){errorspan.innerHTML = ' ';}
    else
    if(e)
    {
        e.preventDefault();
        errorspan.innerHTML = "please enter somthing else here";
    }
}