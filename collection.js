var productcon= document.getElementById("products")
var search= document.getElementById("search")
var productlist = productcon.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }

        else{
            productlist[count].style.display="block"
        }
    }



})


var sidenav = document.querySelector(".side-navbar")

function showNavbar()
    {
        sidenav.style.left="0";
    }
function closeNavbar()
{
    sidenav.style.left="-60%";
}
















