'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = platzom;
function platzom(str) {
   // Devuelve la palabra si no cumple con las normas establecidas.
   var translation = str;

   // Norma 1: A la palabra que acaba en 'ar' se le elimina dicha terminación.
   if (str.toLowerCase().endsWith('ar')) {
      translation = str.slice(0, -2);
   }

   // Norma 2: A la palabra que empieza por 'z' se le añade 'pe' en su
   // terminación, justo después de aplicarle la ** Norma 1 **.
   if (translation.toLowerCase().startsWith('z')) {
      translation += 'pe';
   }

   // Norma 3: A la palabra que tenga o supere las 10 letras,
   // partir por la mitad y concatenar las mitades con un guión ('-').
   var length = translation.length;
   if (length >= 10) {
      var firstHalf = translation.slice(0, Math.round(length / 2));
      var secondHalf = translation.slice(Math.round(length / 2));
      translation = firstHalf + '-' + secondHalf;
   }

   // Norma 4: A la palabra palíndromo intercalar letras MAYUS y minus.
   var reverse = function reverse(str) {
      return str.split('').reverse().join('');
   };

   var minMay = function minMay(str) {
      var length = str.length;
      var translation = '';

      // true  = primera letra en MAYUS
      // false = primera letra en minus
      var capitalize = true;

      for (var i = 0; i < length; i++) {
         var char = str.charAt(i);
         translation += capitalize ? char.toUpperCase() : char.toLowerCase();
         capitalize = !capitalize;
      }

      return translation; // Devuelve la traducción de la ** Norma 4 **.
   };

   if (str == reverse(str)) {
      return minMay(str);
   }

   return translation; // Devuelve la traducción de las demás normas.
}