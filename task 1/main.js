import {stringUtils} from './stringUtils.mjs';

const str1 = 'aBscd';
console.log(stringUtils.capitalize(str1)); // 'Abscd'

const str2 = `Вот пример строки,в которой     используются 
знаки препинания. После знаков должны стоять пробелы , 
а перед знаками их быть не должно .    
Если есть лишние подряд идущие пробелы, они 
должны быть устранены.`;
console.log(stringUtils.formatText(str2)); /* 'Вот пример 
строки,в которой используются знаки препинания. После 
знаков должны стоять пробелы, а перед знаками их быть не 
должно. Если есть лишние подряд идущие пробелы, они должны 
быть устранены.' */

const str3 = 'Эта строка содержит пять слов';
console.log(stringUtils.countWords(str3)); // 5

const str4 = 'Текст в котором слово текст несколько раз встречается и слово тоже';
console.log(stringUtils.countUniqueWords(str4)); 
/* текст - 2 раз
в - 1 раз
котором - 1 раз
слово - 2 раз
несколько - 1 раз
раз - 1 раз
встречается - 1 раз
и - 1 раз
тоже - 1 раз */ 