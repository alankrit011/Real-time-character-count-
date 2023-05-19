const textareael=document.getElementById("textarea");
const totalcounterel=document.getElementById("total-counter");
const remainingcounterel=document.getElementById("remaining-counter")
textareael.addEventListener("keyup", ()=>{
    updateCounter();

})
function updateCounter()
{
   totalcounterel.innerText= textareael.value.length;
  remainingcounterel.innerText= textareael.getAttribute("maxLength")-textareael.value.length;
}