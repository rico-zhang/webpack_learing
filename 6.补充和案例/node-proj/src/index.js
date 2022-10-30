import fs from 'fs';
import { chunk } from 'lodash-es';

const result = fs.readdirSync('./');
console.log(result);
console.log(chunk([1, 2, 3, 4, 5, 8, 32], 3));
