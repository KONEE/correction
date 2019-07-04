var dessinElt;
var context;
var lastPt = null;
/*var user;*/

// Objet canvas
var canvas = {
    // Initialisation 
    init: function(station) {
        this.canvas();
        this.touchDevice();
        this.mouse();
        this.touch();
        this.confirmation(station);
        this.clients();

    },

    // Création du canvas
    canvas: function() {
        var canvasElt = document.createElement("canvas");
        canvasElt.setAttribute('id', 'canvas');
        canvasElt.setAttribute('width', 280);
        canvasElt.setAttribute('height', 320);
        document.getElementById("reservationVelo").appendChild(canvasElt);

        // Masque le div validatiion
        var validation = document.getElementById("validation")
        validation.style.visibility = "hidden";

        // Apparition de la section réservation
        var reservation = document.getElementById("reservation")
        reservation.style.display = "block";

    },
    // Contexte canvas
    style: function() {
        dessinElt = document.getElementById("canvas");
        context = dessinElt.getContext("2d");
        // Propriétés graphiques
        context.strokeStyle = "#101010";
        context.lineWidth = 2;
    },
    // Vérification si écran tactile
    touchDevice: function(e) {
        try {
            document.createEvent("TouchEvent");
            console.log(true);
            return true;
        } catch (e) {
            console.log(false);
            return false;
        }
    },

    //  Méthode signature avec la souris //
    mouse: function() {
        // Appel méthode contexte canvas
        this.style();
        // Propriétés canvas
        var canvas = false;

        // Bouton de souris activé
        dessinElt.onmousedown = function(e) {
            // Dessin activé
            canvas = true;

            // Activation du bouton de confirmation
            document.getElementById("confirmation").disabled = false;

            // Repositionnement du début du tracé
            context.moveTo(e.offsetX, e.offsetY);
        };

        // Mouvement de souris
        dessinElt.onmousemove = function(e) {
            if (canvas) dessiner(e.offsetX, e.offsetY);
        };

        // Bouton de souris relâché
        dessinElt.onmouseup = function(e) {
            // Dessin désactivé
            canvas = false;
        };
        // la sortie du cadre dessin désactivé
        dessinElt.onmouseleave = function(e){
            canvas = false;
        };

        // Ajoute un tracé
        function dessiner(x, y) {
            context.lineTo(x, y);
            context.stroke();
        };

        // Création du bouton "Effacer"
        var clearElt = document.createElement("button");
        clearElt.id = "clear";
        clearElt.textContent = "Effacer";
        document.getElementById("reservationVelo").appendChild(clearElt);

        // Efface le contenu du canvas
        document.getElementById("clear").addEventListener("click", function() {
            dessinElt.width = dessinElt.width
            context.clearRect(0, 0, dessinElt.width, dessinElt.height);

        });
    },

    // Méthode signature sur écran tactile // 
    touch: function(e) {

        // Appel méthode contexte canvas
        this.style();

        // Méthode de gestionnaire d'événements 
        dessinElt.addEventListener("touchmove", function(e) {
            canvas.redraw(e)
        }, false);
        dessinElt.addEventListener("touchend", function(e) {
            canvas.end(e)
        }, false);

    },

    // Ajout d'un tracé entre les points de touche
    redraw: function(e) {
        e.preventDefault();

        // Méthode afin de renvoyer les coordonnées par rapport à la fenêtre du navigateur
        // Puis correction du décalage des coordonnées avec l'élément canvas situé dans le document
        var rect = dessinElt.getBoundingClientRect();

        // Si détection d'un point on dessine
        if (lastPt != null) {
            context.beginPath();
            context.moveTo(lastPt.x, lastPt.y);
            context.lineTo(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top);
            // this.style();
            context.stroke();
        }

        // stocke chaque dernier point lorsque événement touchmove est appelé 
        lastPt = {
            x: e.touches[0].clientX - rect.left,
            y: e.touches[0].clientY - rect.top
        };
        /*if(document.getElementById('idUser').value ===" " && document.getElementById('prenomUser').value === ""){
        // Activation du bouton de confirmation
        document.getElementById("confirmation").disabled = true;
        }else{ document.getElementById("confirmation").disabled = false;  }*/

    },

    // Arrêt de l'événement touchmove en ne stockant pas le dernier point
    end: function(e) {
        e.preventDefault();
        lastPt = null;
    },
    // Création de formulaire client(non et prenom) dans le canvas
    clients: function() {
        var clientElt = document.createElement("FORM");
        clientElt.id = "client";
        document.getElementById("reservationVelo").appendChild(clientElt);
        var inputNom = document.createElement("INPUT");
        inputNom.setAttribute("id", "idUser");
        inputNom.setAttribute("type", "text");
        inputNom.setAttribute("placeholder", "Nom *");
        inputNom.setAttribute("required", "true");
        document.getElementById("client").appendChild(inputNom);
        var inputPrenom = document.createElement("INPUT");
        inputPrenom.setAttribute("id", "prenomUser");
        inputPrenom.setAttribute("type", "text");
        inputPrenom.setAttribute("placeholder", "Prenom *");
        inputPrenom.setAttribute("required", " true");
        document.getElementById("client").appendChild(inputPrenom);
        //sauvegarder en local nom et prenom
          /* localStorage.setItem('nom',document.getElementById('idUser').value);
            localStorage.setItem('prenom',document.getElementById('prenomUser').value);*/


    },

    // Création du bouton "confirmer" pour valider la réservation
    confirmation: function(station) {
        var confirmElt = document.createElement("button");
        confirmElt.id = "confirmation";
        confirmElt.textContent = "Confirmer";
        document.getElementById("reservationVelo").appendChild(confirmElt);
        confirmElt.disabled = true;


   /* disabledElt : function() {

    } ;  */ 

        // Désactivation du bouton confirmer  si click sur  le bouton "clear"
        document.getElementById("clear").addEventListener("click", function() {
            confirmElt.disabled = true;
        });

        // Ajout d'un écouteur d'évènement sur le bouton de confirmation (lancement du décompte)
        confirmElt.addEventListener("click", function() {
            let user = document.getElementById("idUser").value;
            //sauvegarder en local nom et prenom
           /* localStorage.setItem('nom',document.getElementById('idUser').value);
            localStorage.setItem('prenom',document.getElementById('prenomUser').value);
            console.log(localStorage.getItem("nom"));
            document.getElementById("prenomUser").textContent= localStorage.getItem('prenom');
            //localStorage.getItem("prenom");*/
            
                        // Remplacement d'un précédent canvas éventuel
            if(document.getElementById('idUser').value == "" && document.getElementById('prenomUser').value == ""){
           alert("veillez renseigner le champs Nom et Prenom");
            
        } else{
                
            reservationVelo.removeChild(document.getElementById("canvas"));
            reservationVelo.removeChild(document.getElementById("confirmation"));
            reservationVelo.removeChild(document.getElementById("clear"));
            reservationVelo.removeChild(document.getElementById("client"));

           // console.log(user);

            // validation visible
            var validation = document.getElementById("validation")
            validation.style.visibility = "visible";

            // Masquer la réservation
            var reservation = document.getElementById("reservation")
            reservation.style.display = "none";
        
             // Demarrage du décompte de 20 min. après confirmation
            sessionStorage.clear();
            compte.decompte(station, user); }

        });

    }
};
