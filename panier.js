let modal = document.getElementById("monModal");

let panierNoir = document.getElementById("panier_noir");

let span = document.getElementsByClassName("close")[0];

let nbre = document.querySelector("#paniernoir");
console.log(nbre);
 
panierNoir.addEventListener('click', function (){
  modal.style.display = "block";
});



let afficheModul = 0;

  nbre.addEventListener('click', function(){
    if (afficheModul === 0) {
      modal.style.display = "none";      
      afficheModul--
    } else {
      modal.style.display = "block";
      afficheModul++
    }
  })

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const panier = {
  produits: [], 
  getTotalPrice() {
    return 0;
  },
  getNombreArticle(){
    return this.produits.length;
  },
  //Ajoute d'un produit
  addProduit(label, prix) {
    this.produits.push({label, prix}); 
  }
};

let addCartButton = document.querySelector('#bouton_casque');
let titleProduit = document.querySelector('#titreproduit');
let priceProduct = document.querySelector('#priceProduct');
let inputArticle = document.querySelector('#number').value.length;
addCartButton.addEventListener('click', function(){
  panier.addProduit('Casque', 189.00);
  nbre.innerHTML = panier.getNombreArticle(); //Méthode de l'objet panier
  titleProduit.innerHTML = "Casque";
  priceProduct.innerHTML = "189,00€";
  inputArticle.innerHTML = panier.getNombreArticle();
  console.log(inputArticle)
});



/*
let monBouton = document.querySelector('#bouton_casque');
let recepteur = document.querySelector('#A');

let moins = document.querySelector('#moins');
let plus = document.querySelector('#plus');
let boite = document.querySelector ('#boite');
let boite1 = document.querySelector ('#boite1');

let articleCasque = document.querySelector('#casque_article');
let nomArticle = ['Casque'];

let prixCasque = document.querySelector('#prixducasque')
let prixDuCasque = [189.00];  
let prixTotal = 0;
let nombreArticle = 0;



monBouton.addEventListener('click', clickPanier) 
function clickPanier (){
  nombreArticle++;
  recepteur.innerHTML = nombreArticle;
  boite.innerHTML = nombreArticle;
  boite1.innerHTML = prixTotal;
  nomArticle.push['Casque'];  
  articleCasque.innerHTML = nomArticle;
  prixCasque.innerHTML = prixDuCasque;
  
};

plus.addEventListener('click', function (){
  nombreArticle++;
  recepteur.innerHTML = nombreArticle;
  boite.innerHTML = nombreArticle;

});

moins.addEventListener('click', function(){
  if (nombreArticle >=1){
    nombreArticle--;
    recepteur.innerHTML = nombreArticle;
    boite.innerHTML = nombreArticle;
  }
});*/
