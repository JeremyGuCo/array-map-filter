/* Array.prototype.filter - Exercice 1

Ecrire une fonction getPositiveNumbers qui reçoit comme un argument un tableau de nombres.
En utilisant filter, cette fonction doit renvoyer un tableau ne contenant que des nombres
positifs ou nuls.

Exemple de tableau d'entrée:
  [7, -4, 2, 0, -10, 3, 11]
Sortie attendue:
  [7, 2, 0, 3, 11]

 */

function getPositiveNumbers(numbers) {
  return numbers.filter(function(num){
    return num >= 0
  })
  
}
module.exports = getPositiveNumbers;
