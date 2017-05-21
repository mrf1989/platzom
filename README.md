# Platzom.js

**Platzom.js** es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js).

## Descripción del idioma

El idioma Platzom sigue las siguientes normas:

- **Norma 1:** A la palabra que acaba en 'ar' se le elimina dicha terminación.
- **Norma 2:** A la palabra que empieza por 'z' se le añade 'pe' en su terminación, justo después de aplicarle la Norma 1 en caso de cumplirla.
- **Norma 3:** A la palabra que tenga o supere las 10 letras, se la divide por la mitad y se las concatena con un guión ('-').
- **Norma 4:** A la palabra palíndromo se la vuelve a escribir intercalando letras mayúsculas y minúsculas.

## Instalación

```
npm install platzom.js
```

## Uso

```
import platzom from 'platzom.js'

platzom('Programar')  // Program
platzom('zorro')      // zorrpe
platzom('Zarpar')     // Zarppe
platzom('abecedario') // abece-dario
platzom('sometemos')  // SoMeTeMoS
```

## Créditos

- [Mario Ruano](https://marioruano.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
