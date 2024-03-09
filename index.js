 /* Code for changing active  
            link on clicking 
            let btns =  
                $("#navigation .navbar-nav .nav-link"); 
  
            for (var i = 0; i < btns.length; i++) { 
                btns[i].addEventListener("click", 
                                      function () { 
                    var current = document
                        .getElementsByClassName("active"); 
  
                    current[0].className = current[0] 
                        .className.replace(" active", ""); 
  
                    this.className += " active"; 
                }); 
            } */
            const hover = document.querySelectorAll("#navs")
            const logo = document.getElementById("logo");
            const button = document.getElementById("myButton");
            const togGler = document.querySelector("#.navbar-toggler-icon")
            
            
            /*===navigions bar hover===*/
            for (i = 0; i < hover.length; i++) {
                hover[i].style.color = '#3e3d3d'
            };

            function LOgo()
            {
                logo.style.color = "brown";
                setTimeout(() => {
                  logo.style.color = "darkgreen";
                }, 3000);
                setTimeout(() => {
                  logo.style.color = "#3e3d3d";
                }, 4000);
            }
            /*====navigation button===*/
            function ChangeColor()
            {
                button.style.backgroundColor = "brown";
                setTimeout(() => {
                  button.style.backgroundColor = "darkgreen";
                }, 3000);
                setTimeout(() => {
                  button.style.backgroundColor = "darkred";
                }, 4000);
                setTimeout(() => {
                    button.style.backgroundColor = "#eb5d1e";
                  }, 5000);
            }
            /*====navbar toggler style===*/
            togGler.addEventListener("mouseover", () => {
                togGler.style.color = "#eb5d1e"
            })

            const bg = document.getElementById("bg-native"); 
            function randomColor() {
                return Math.floor(Math.random() * 225);
            } 
            bg.addEventListener('click', () => {
              bg.style.backgroundColor =  "rgba('+randomcolor()+','+randomcolor()+','+randomcolor()+'\)"
            })

            

            

            
          
           
            