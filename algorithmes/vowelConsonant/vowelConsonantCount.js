/*
    TIPS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp
    http://www.regexr.com/
*/

module.exports = function vowelConsonantCount(word){
  return {
      v: (word ? word.toString().match(/([a-z])/ig) ? word.match(/([aeiouy])/ig).length : 0 : 0 ),
      c: (word ? word.toString().match(/([a-z])/ig) ? word.match(/([^aeiouy])/ig).length : 0 : 0)
  }
}
