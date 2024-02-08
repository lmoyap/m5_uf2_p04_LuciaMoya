/**
 * Aquesta funcio suma tots els valors passats per parametre
 *
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function suma(...valors) {
  let resultat = 0;
  for (let num of nums) {
    resultat += num;
  }
  return resultat;
}

/**
 * Aquesta funcio multiplica tots els valors passats per parametre
 *
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function multiplica(...valors) {
  let total = valors[0];
  for (let i = 1; i < valors.length; i++) {
    total *= valors[i];
  }
  return total;
}

module.exports.suma = suma;
module.exports.multiplica = multiplica;
