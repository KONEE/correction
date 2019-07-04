
*************************WEB DEVELOPPEUR JUNIOR OPENCLASSROOMS****************************

                 PROJET 3 "Concevoir une carte interactive de location de vélos"


Programmation en JS / JQuery entièrement en POO

API MapLeaflet / API Jcdecaux ville de Nantes / API Web Storage

Utilisation Canvas, compatibilité tactile sur smartphone et tablette

Slider contrôlable en POO,


***********DIAPORAMA

La page d’accueil de l’application affichera un diaporama de photos de la ville de Nantes et Stations. Ce diaporama réagit au clavier avec les touches gauche et droite pour reculer et avancer manuellement.

***********2eme DIAPO
Ce dapo automatique et contrôlable pure css, affichera un diaporama de photos et de textes expliquant le fonctionnement de l'application. Ce diaporama réagit également au clavier avec les touches gauche et droite pour reculer et avancer manuellement.

***********CARTE DES VELOS

Une carte exploitant l'API Leaflet avec la localisation de toutes les stations de vélos, positionnées à l’aide de marqueurs. Un clic sur un marqueur affiche l’état de la station dans un panneau à côté de la carte. La localisation et l'état de chaque station (ouverte, combien de vélos et de places sont disponibles, etc.) est fourni via une API OpenData JCDecaux de la ville de Nantes.

************RESERVATION DES VELOS

Il est possible de réserver un vélo disponible à la station sélectionnée en signant dans un champ libre implémenté à l’aide de l’API HTML5 Canvas. Une fois la signature validée, un vélo est marqué comme réservé à cette station. Pour ce projet, la réservation n'aura en réalité aucun effet. Seul le navigateur "retiendra" que le vélo a été réservé. Les données de réservation seront stockées dans le navigateur à l’aide de l’API HTML5 Web Storage et affichées en bas de la carte. La réservation expire automatiquement au bout de 20 minutes et également lorsque le navigateur web se referme.Affichage en permanence la station de la réservation en cours,apres une actualisation de la page. Il ne peut y avoir qu'une réservation à la fois. Si une nouvelle réservation a lieu, elle remplace la précédente.

**************CONTRAINTES TECHNIQUES

Utilisation de la bibliothèque jQuery mais pas de plugins jQuery. 
Le code JavaScript doit entièrement être conçu en programmation orientée objet. 
Le code doit exploiter les API MapLeaflet et les API Open Data de JCDecaux de la ville de Nantes. Il utilise les API Web Storage et Canvas.

*************COMPETENCES A VALIDER

Programmer en Javascript /Interagir avec la page

lien : http://reservationvelonantes.saadokone.com/
sur : github 

