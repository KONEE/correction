
// faire en objet plutard
class Slider {
       //var slideIndex = 1;
        constructor(element) {
           
          this.slideIndex = 3;
          this.element = element;

        }

      // Next/previous controls
      plusSlides(n) {
          this.showSlides(this.slideIndex += n);
      }

      // Thumbnail image controls
      currentSlide(n) {
          this.showSlides(this.slideIndex = n);
      }

      showSlides(n) {
        //console.log("hello");
            var i;

            var slides = document.getElementsByClassName(this.element);
            console.log(slides);
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1}
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";

            dots[this.slideIndex-1].className += " active";
             // Mouvement de la diapo au clavier. Touches gauche et droite
            document.addEventListener("keydown", function (e) {
              switch (e.keyCode) {
                case 39:
                slid.plusSlides(1);
                break
                case 37:
                slid.plusSlides(-1)
                break
              }
            });
      } 

     keybord(){

     }


 }
 