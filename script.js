            /*********Exercice1********/

let age1 = 12;
let age2 = 10;

/*
//  Condition multiples
if (age1 >= 18 && age2 < 18) {
    console.log("Votre age est de " + age1 + "ans, Donc vous etes  majeur");
    console.log("Votre age est de " + age2 + "ans, Donc vous etes  mineur");
} else if (age1 >= 18 && age2 >= 18) {
    console.log("Votre age est de " + age1 + "ans, Donc vous etes  majeur");
    console.log("Votre age est de " + age2 + "ans, Donc vous etes  majeur");
} else if (age1 < 18 && age2 >= 18) {
    console.log("Votre age est de " + age1 + "ans, Donc vous etes  mineur");
    console.log("Votre age est de " + age2 + "ans, Donc vous etes  majeur");
} else {
    console.log("Votre age est de " + age1 + "ans, Donc vous etes  mineur");
    console.log("Votre age est de " + age2 + "ans, Donc vous etes  mineur");
}
*/

//  Condition switch
switch (true) {
    case age1 >= 18 && age2 < 18  :
        console.log("Votre est de " + age1 + "ans, Donc vous etes  majeur");
        console.log("Votre est de " + age2 + "ans, Donc vous etes  mineur");
        break;
    case age1 >= 18 && age2 >= 18:
        console.log("Votre age est de " + age1 + "ans, Donc vous etes  majeur");
        console.log("Votre age est de " + age2 + "ans, Donc vous etes  majeur");
        break;  
    case age1 < 18 && age2 >= 18:
        console.log("Votre age est de " + age1 + "ans, Donc vous etes  mineur");
        console.log("Votre age est de " + age2 + "ans, Donc vous etes  majeur");
        break;
    default:
        console.log("Votre age est de " + age1 + "ans, Donc vous etes  mineur");
        console.log("Votre age est de " + age2 + "ans, Donc vous etes  mineur");            
}

               /*********Exercice2********/

 // Tableau d'objet de dix etudiants
 var tableaux = [
    { nom: "Banel", prenom: "Fatoumata", age: 16+"ans", note: 12+"/20" },
    { nom: "Bodian", prenom: "Oulimata", age: 19+"ans", note: 10+"/20" },
    { nom: "Mbaye", prenom: "Mamadou", age: 18+"ans", note: 13+"/20" },
    { nom: "King", prenom: "Isabelle", age: 24+"ans", note: 15+"/20" },
    { nom: "Diop", prenom: "Babacar", age: 20+"ans", note: 17+"/20" },
    { nom: "Ndao", prenom: "Ahma-da", age: 21+"ans", note: 14+"/20" },
    { nom: "Fall", prenom: "Cheikh", age: 25+"ans", note: 18+"/20" },
    { nom: "Diaw", prenom: "Ngagne", age: 18+"ans", note: 14+"/20" },
    { nom: "Ndoye", prenom: "Bamba", age: 17+"ans", note: 19+"/20" },
    { nom: "Tine", prenom: "Arame", age: 23+"ans", note: 15+"/20" }
  ];

  
 
//   afficher le tableau dans un tableau bootstrap.
  let etudiants = ""
  for(let x in tableaux){ 
    
      etudiants  += 
      `<tr>
          <td>${tableaux[x].nom}</td>
          <td>${tableaux[x].prenom}</td>
          <td>${tableaux[x].age}</td>
          <td>${tableaux[x].note}</td>
        </tr>`}
  document.getElementById('etudiants').innerHTML = etudiants
  console.log(Math.max(...tableaux));




  
  for(let x in tableaux) {
    console.log(tableaux[x].nom)
  }
  
// affichez l'etudiant qui  a la plus grande note, en bas du tableaux.
document.getElementById('grandeNote').innerHTML = etudiants


// filter



// const paragraphe = function (nom, prenom) {
//     prenom = prenom.toLowerCase()
//         return nom.filter(
//             (el) => el.name.toLowerCase().include(prenom)
//         )
    
// }
// console.log(paragraphe)




      