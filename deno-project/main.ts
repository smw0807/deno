import dayjs from 'npm:dayjs';
import * as fs from 'node:fs';
export function add(a: number, b: number): number {
  return a + b;
}

const readFile = () => {
  const data = fs.readFileSync('./deno.json', 'utf8');
  console.log(data);
};

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log('Add 2 + 3 =', add(2, 3));
  console.log('Today is', dayjs().format('YYYY-MM-DD'));
  // readFile();
}
