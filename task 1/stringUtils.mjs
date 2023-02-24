export const stringUtils = {
    // 1. Преобразование строки к нижнему регистру, но первая буква большая. “Abscd”
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
    // 2. Преобразование строки с целью правильной расстановки пробелов.
    formatText: function(str) {
      return str.replace(/\s+/g, ' ')
                .replace(/\s+([,.?!:;])/g, '$1')
                .replace(/([,.?!:;])\s+/g, '$1 ')
                .trim();
    },
    // 3. Подсчет количества слов в строке.
    countWords: function(str) {
      return str.trim().split(/\s+/).length;
    },
    // 4. Подсчет уникальных слов в строке.
    countUniqueWords: function(str) {
      const words = str.trim().split(/\s+/);
      const wordCounts = {};
      for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
        if (wordCounts[word]) {
          wordCounts[word]++;
        } else {
          wordCounts[word] = 1;
        }
      }
      const result = [];
      for (const word in wordCounts) {
        result.push(`${word} - ${wordCounts[word]} раз`);
      }
      return result.join('\n');
    }
  };