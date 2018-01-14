
// Get the popupBody
var popupBody = document.getElementById('popupBody');

// Get the button that opens the popupBody
var trailer = document.getElementById("trailer");

// Get the <close> element that closes the popupBody
var close = document.querySelector(".close");


var iframe = document.querySelector("iframe");

// When the user clicks on the 'trailer', open the popupBody 
trailer.onclick = function() {
    iframe.setAttribute("src","https://www.youtube.com/embed/qjVYRDQAl2Q");
    popupBody.style.display = "block";

}

// When the user clicks on any area other than the video, close the popupBody
close.addEventListener("click",function()
    {
        popupBody.style.display = "none";
    }

);


// When the user clicks anywhere outside of the popupBody, close it
window.onclick = function(event) {
    if (event.target == popupBody) {
        iframe.setAttribute("src","#");
        popupBody.style.display = "none";
    }
}

close.onclick = function(event) {
    if (event.target == popupBody) {
        iframe.setAttribute("src","#");
        popupBody.style.display = "none";
    }
}
