import { prima, ganjil } from "./functions";

function CekBilangan (input, output) {
  let hasil = '';

  if (ganjil(input)) {
    hasil = `GANJIL`;
  }
  else {
    hasil = `GENAP`;
  }

  if (prima(input)) hasil = `PRIMA`;

  return output(hasil);
}

function CekBilanganInRange(start, end, hasil = [], output) {
  if (start > end) {
    return output(hasil);
  }

  CekBilangan(start, (bilangan) => {
    hasil.push({angka: start, bilangan});
    CekBilanganInRange((start + 1), end, hasil, output);
  });
}

export { CekBilangan, CekBilanganInRange };
