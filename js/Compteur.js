class Compt {


    constructor() {
        this.timerElt = document.getElementById("validation");
        // masquer annulation
        var annuler = document.getElementById("annuler")
        annuler.style.visibility = "hidden";

        if(localStorage.getItem("timeStamp")){
          let diffTime = Math.floor((Date.now() - localStorage.getItem("timeStamp"))/1000);
          this.duration = 1200 - diffTime ;
          //console.log(interval);
        }else{
          this.duration = 1200;
        }
          
        

    }
   
    // Enregistrement des données si actualisation de la page du navigateur
    display() {
           
        if (localStorage.length > 0) {
          //clearInterval();
            this.decompte(localStorage.getItem("name"),localStorage.getItem("user"),localStorage.getItem("prenom"));
            console.log(localStorage.getItem("name"));
 
        } else {
            this.timerElt.textContent = "Pas de réservation en cours...";
        }

    }
   
    // Décompte de 20 minutes lorsqu'il y a une réservation validée

    decompte(station, user,prenom) {
      // annulation visible
        var annuler = document.getElementById("annuler")
        annuler.style.visibility = "visible";

       // clearInterval(interval);
        var interval = setInterval(function() {
            let tps = this.convert(this.duration);
            
            this.timerElt.textContent = /*"Mr/Mme  " + " " + user + "!! " + */"Vous avez une reservation à la station: " + localStorage.getItem("name") + " pour une durée de " + tps[0] + " min " + tps[1] + " s.";
            this.duration--;
            

            // Décompte terminé,arret
            if (this.duration < 0) {

                // Effacement des données éventuelles dans sessionStorage
                localStorage.clear();
                this.timerElt.textContent = "Pas de réservation en cours...";
            }
        }.bind(this), 1000)

       // reset
        document.getElementById("annuler").addEventListener("click", function() {
            clearInterval(interval);
            localStorage.clear();
            this.duration=1200;
            this.display();

        }) 
    }
    
    // Conversion des secondes en minutes et secondes
    convert(duration) {
        // Création d'un tableau afin de stocker les données
        let tps = [];

        // Conversion
        let min = Math.floor(this.duration / 60) % 60;
        let sec = this.duration % 60;

        // Stockage des données récoltées dans le tableau
        tps.push(min, sec);
       
        return tps;
    }
    
    // Enregistrement des données si actualisation de la page du navigateur
    save(station,user,prenom) {
       
            localStorage.setItem("user", user);
            localStorage.setItem("name", station.name);
            localStorage.setItem("prenom", prenom);
           localStorage.setItem("timeStamp",Date.now());
          // console.log(localStorage.getItem("name"));
    }
        

    
}

//jslint et apres configurattion !