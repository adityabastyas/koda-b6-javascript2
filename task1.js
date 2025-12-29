const hasilUjianJohn = [75, 80, 79, 90];
const hasilUjianEd = [66, 77, 88, 99];

const gabunganHasilUjian = [...hasilUjianJohn, ...hasilUjianEd];

// nilai minimum
// nilai max

let nilaiMinimum = 0;
let nilaiMaximum = 0;

for (let i = 0; i < gabunganHasilUjian.length; i++) {
  if (gabunganHasilUjian[i] < 70) {
    nilaiMinimum += gabunganHasilUjian[i];
    console.log("nilai minimum", nilaiMinimum);
  } else if (gabunganHasilUjian[i] > 95) {
    nilaiMaximum += gabunganHasilUjian[i];
    console.log("nilai Maximum", nilaiMinimum);
  }
}

// jumlah
let total = 0;
for (let i = 0; i < gabunganHasilUjian.length; i++) {
  total += gabunganHasilUjian[i];
}
console.log("total", total);

// rata-rata
let average = total / gabunganHasilUjian.length;
console.log("rata-rata", average);
