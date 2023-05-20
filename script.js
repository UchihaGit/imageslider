var Lclick = document.querySelector(".btn1");
var Rclick = document.querySelector(".btn2");
var imgSlider = document.querySelector(".img-slider");
var images = ["Screenshot1.png","Screenshot2.png","Screenshot3.png","Screenshot4.png","Screenshot5.png"];

var i = 0;

Lclick.addEventListener("click",function(){
      i= i <= images.length-1 ? --i : 0;
      if (i==-1) {
        i=4;
        document.slide.src = images[i];
      }
      else {
          document.slide.src = images[i];
      }
})

Rclick.addEventListener("click",function(){
        i= i < images.length-1 ? ++i : 0;
        document.slide.src = images[i];
})
