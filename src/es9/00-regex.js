/* ES9: expresiones regulares
clase22/35

La siguiente versión de ECMAScript fue publicada en 2018. Las características de ES9 o ES2018 
que aprenderás son: expresiones regulares y propiedades de propagación.

Expresiones regulares
Las expresiones regulares o RegEx (regular expresions) son patrones de búsqueda y manipulación de 
cadenas de caracteresincreíblemente potente y están presentes en todos los lenguajes de programación.

En JavaScript se crea este patrón entre barras inclinadas (/patrón/) y se utiliza métodos para hacer 
coincidir la búsqueda.
 */
//EJEMPLO DE CLASE;
const regex = /((\d{4})-(\d{2})-(\d{2}))/;//estructura que ya tenia lista profe, se sabe que son fechas
const matchers = regex.exec('2022-10-26');
console.table(matchers);//para ver en consola en forma de tabla como nos desgloso la fecha
//esto nos retorna
/*─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-10-26' │
│    1    │ '2022-10-26' │
│    2    │    '2022'    │
│    3    │     '10'     │
│    4    │     '26'     │
│  index  │      0       │
│  input  │ '2022-10-26' │
│ groups  │  undefined   │
└─────────┴──────────────┘ */
