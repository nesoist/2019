function short(){
   
    var x = window.matchMedia("(min-width: 768px)")
    var icerik = document.getElementById("icerik");
    var sidebar = document.getElementById("sidebar");
    console.log(sidebar)
      if (x.matches) { 
   //buyuk ekran oyunları


        if (icerik.style.marginLeft == "15px") {
          icerik.style.marginLeft = "275px";
        } else {
          icerik.style.marginLeft = "15px";
        }

        if (sidebar.style.display == "flex" || sidebar.style.display == "") {
          sidebar.style.display = "none";
          
        } else {
          sidebar.style.display = "flex";
        }
    
      } else {
  
         //kucuk ekran oyunları
        if (sidebar.style.display == "flex")  {
          sidebar.style.display = "none";
        } else {
          sidebar.style.display = "flex";
        }
   
      }
    
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}