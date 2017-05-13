export default function platzom (str) {
   // Devuelve la palabra si no cumple con las normas establecidas.
   let translation = str

   // Norma 1: A la palabra que acaba en 'ar' se le elimina dicha terminación.
   if (str.toLowerCase().endsWith('ar')) {
      translation = str.slice(0, -2)
   }

   // Norma 2: A la palabra que empieza por 'z' se le añade 'pe' en su
   // terminación, justo después de aplicarle la ** Norma 1 **.
   if (translation.toLowerCase().startsWith('z')) {
      translation += 'pe'
   }

   // Norma 3: A la palabra que tenga o supere las 10 letras,
   // partir por la mitad y concatenar las mitades con un guión ('-').
   let length = translation.length
   if (length >= 10) {
      const firstHalf = translation.slice(0, Math.round(length / 2))
      const secondHalf = translation.slice(Math.round(length / 2))
      translation = `${firstHalf}-${secondHalf}`
   }

   // Norma 4: A la palabra palíndromo intercalar letras MAYUS y minus.
   const reverse = (str) => str.split('').reverse().join('')

   const minMay = (str) => {
      const length = str.length
      let translation = ''

      // true  = primera letra en MAYUS
      // false = primera letra en minus
      let capitalize = true

      for (let i = 0; i < length; i++) {
         const char = str.charAt(i)
         translation += capitalize ? char.toUpperCase() : char.toLowerCase()
         capitalize = !capitalize
      }

      return translation // Devuelve la traducción de la ** Norma 4 **.
   }

   if (str == reverse(str)) {
      return minMay(str)
   }

   return translation // Devuelve la traducción de las demás normas.
}
