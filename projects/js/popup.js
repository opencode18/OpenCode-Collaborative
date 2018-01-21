
// Get the popupBody
var popupBody = document.getElementById('popupBody');

// Get the button that opens the popupBody
var trailer = document.getElementById("trailer");

// Get the <close> element that closes the popupBody
var close = document.querySelector(".close");






// When the user clicks on the 'trailer', open the popupBody 
trailer.onclick = function() {
    
    $('iframe')[1].setAttribute("src","https://www.youtube.com/embed/qjVYRDQAl2Q");
    popupBody.style.display = "block";

}

// When the user clicks anywhere outside of the popupBody, close it
window.onclick = function(event) {
    if (event.target == popupBody) {

        console.log($("iframe"));
        $('iframe')[1].setAttribute("src","");
        popupBody.style.display = "none";
    }
}

close.onclick = function(event) {
    if (event.target == popupBody) {
        console.log($("iframe"));
        $("iframe")[1].setAttribute("src","");
        popupBody.style.display = "none";
    }
}


