const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
   it('Norma 1: A la palabra que acaba en "ar" se le elimina dicha terminación.', function () {
      const translation = platzom('Programar')
      expect(translation).to.equal('Program')
   })
   it('Norma 2: A la palabra que empieza por "z" se le añade "pe" en su terminación, justo después de aplicarle la Norma 1 en caso de cumplirla.', function () {
      const translation = platzom('zorro')
      const translation2 = platzom('Zarpar')
      expect(translation).to.equal('zorrope')
      expect(translation2).to.equal('Zarppe')
   })
   it('Norma 3: A la palabra que tenga o supere las 10 letras, se la divide por la mitad y se las concatena con un guión ("-").', function () {
      const translation = platzom('abecedario')
      expect(translation).to.equal('abece-dario')
   })
   it('Norma 4: A la palabra palíndromo se la vuelve a escribir intercalando letras mayúsculas y minúsculas.', function () {
      const translation = platzom('sometemos')
      expect(translation).to.equal('SoMeTeMoS')
   })
})
