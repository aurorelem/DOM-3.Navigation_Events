/*Ex 1*/

let li = document.querySelector('ol li:last-child');
let ol = document.querySelector('ol');
ol.prepend(li);  //La Element.prepend()méthode insère un ensemble d' Nodeobjets ou d'objets chaîne avant le premier enfant de Element. Les objets chaîne sont insérés en tant que Textnœuds équivalents.
//Fonctionne bien en remplaçant le premier  de la liste par le 5ème

/*EX 2*/

/*const section = document.querySelectorAll('section');
const sectionOne = section[1].querySelector('h2');
const sectionTwo= section[2].querySelector('h2');

section[2].children[0].insertBefore(sectionOne, sectionTwo);
section[1].insertBefore(sectionTwo, section[1].lastElementChild);*/
                                                                  
//Ex 3

const section = document.querySelector('section')
const a = section.children[0]
const b = section.children[1]
b.appendChild(a)


