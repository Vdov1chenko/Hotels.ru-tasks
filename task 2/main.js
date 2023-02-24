import { addBigIntegers, subtractBigIntegers, multiplyBigIntegers, divideBigIntegers } from './bigIntOperations.js';

console.log(addBigIntegers('12345678901234567890', '98765432109876543210')); // 111111111111111111100
console.log(subtractBigIntegers('98765432109876543210', '12345678901234567890')); // 86419753208641975320
console.log(multiplyBigIntegers('12345678901234567890', '98765432109876543210')); // 1219326311370217952237463801111263526900n
console.log(divideBigIntegers('98765432109876543210', '12345678901234567890')); // 8n