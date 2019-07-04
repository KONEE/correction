class Compt {


    constructor() {
        this.timerElt = document.getElementById("validation");
        this.duration = 1200;
        this.display();

    }

    // Enregistrement des données si actualisation de la page du navigateur
    display() {

        if (localStorage.length > 0) {
           
            setInterval(function(){
                let valLocalStor = localStorage.getItem("durationActu");
                let date = Date.now();
                console.log(valLocalStor);
                console.log(date);
                let dateActua = Math.floor((date - valLocalStor)/1000);
               // this.convert(dateActua); dateActua me derange pour appeler convert ici
                console.log(dateActua); 
              
                document.getElementById("validation").textContent = localStorage.getItem("name") + "pour" + dateActua ;
                this.save(name,user,dateActua);
               
            // }, 1000)
            } , 1000)


        } else {
            this.timerElt.textContent = "Pas de réservation en cours...";
        }

    }
   
    // Décompte de 20 minutes lorsqu'il y a une réservation validée

    decompte(station, user,date=0) {
        clearInterval(this.interval);
       
       
        
        
        this.interval = setInterval(function() {
            let tps = this.convert(this.duration);
            //console.log(this);
            this.timerElt.textContent = "Merci de votre confiance Mr  " + " " + user + "!! " + "Votre reservation est à la station: " + station.name + " pour une durée de " + tps[0] + " min " + tps[1] + " s.";
            this.duration--;
            this.save(station.name,user,this.duration);
            //console.log(this.duration);

            // Décompte terminé,arret
            if (this.duration < 0) {

                // Effacement des données éventuelles dans sessionStorage
                localStorage.clear();
                // Réinitialisation de l'affichage de la page
                this.display();
            }
        }.bind(this), 1000)
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
    //methode client a creer
    // Enregistrement des données si actualisation de la page du navigateur
    save(name,user, duration) {
       // let date = Date.now();
            localStorage.setItem("user", user);
            localStorage.setItem("name", name);
           // localStorage.setItem("prenom", prenom);
           // localStorage.setItem("date", date);
            localStorage.setItem("durationActu", duration);
           
       
    }

    
}

//jslint et apres configurattion !