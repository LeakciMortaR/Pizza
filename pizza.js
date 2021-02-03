// Page Js pour l'accueil du site Opizza

var Evenement=document.getElementById('formulaire');
Evenement.addEventListener('click', commander);

function commander(){
    // Création du tableau de valeur vide 
    // alert('toto');
var TblIngredients= new Array;
    // Remplit le tableau avec les chaines de caractères du fichier HTML 
    TblIngredients=document.getElementsByName('TblIngredients');
    // Un compteur pour la boucle FOR
    var Cmptr=0;
    // Concaténation du prix des ingrédients 
    var PrixT=0;
    // PrixT en décimal 
    var PrixTotal=0;
    // PrixTVA qui prendra en compte la TVA de 5.5%
    var PrixTVA=0;
    // 
    var valueChange = false;
            
    // Boucle pour comptabaliser les chaines de carastères des valeurs de chaque ingrédients 
    for (Cmptr=0; Cmptr<TblIngredients.length; Cmptr++){
        // On selectionne dans HTML le select        
        if(TblIngredients[Cmptr].tagName === 'SELECT'){
            // on récupere les values dans les balises option selectionnées 
            PrixT=TblIngredients[Cmptr].options[TblIngredients[Cmptr].selectedIndex].value;
            // Les valeurs ont changés
            valueChange = true;    
        }
        // De plus 
        else{
          // On récupère les values dans les checkbox du HTML
          if (TblIngredients[Cmptr].checked){
            PrixT=TblIngredients[Cmptr].value;
            // 
            valueChange = true;
           }
        }
        // Si ValueChange changent on continue la boucle 
        if(valueChange){
            // Je convertis PrixTotal chaîne de caracteres en valeur décimale et je les additionne
            PrixTotal=PrixTotal+parseInt(PrixT,10);
            var TVA='1.055';
            PrixTVA=Arrondi(PrixTotal)*TVA;
            PrixTVA=Arrondi(PrixTVA);
            
            valueChange = false;
        }
        
    }// Fin de la boucle 

    
    var Affichage=document.getElementById('ResultCommande');
    Affichage.innerHTML='Prix : '+PrixTotal;
    var AffichageTVA=document.getElementById('ResultTva');
    AffichageTVA.innerHTML='Prix avec TVA : '+PrixTVA;
}

function Envoyer(){
    alert("La pizza est commandée et Mario arrive ProntOoO.");
    // var image = document.getElementById("myImage");
    // alert(+image);
}

function Arrondi(Valeur){
    var newvaleur =0;
    return newvaleur=parseFloat(Valeur).toFixed(2);

}