// Muzik Toggle
const audio = document.getElementById('backgroundMusic');
const icon = document.getElementById('musicToggle');

function toggleMusic() {
  if (audio.paused) {
    audio.play().then(() => {
      icon.style.backgroundImage = "url('sound-on.png')";
    }).catch(err => {
      console.warn("Playback failed:", err);
    });
  } else {
    audio.pause();
    icon.style.backgroundImage = "url('sound-off.png')";
  }
}

// Pasang fungsi toggle pada klik div
icon.addEventListener('click', toggleMusic);

// Tetapkan ikon awal bila masuk web ikut status audio
document.addEventListener('DOMContentLoaded', function () {
  if (audio.paused) {
    icon.style.backgroundImage = "url('sound-off.png')";
  } else {
    icon.style.backgroundImage = "url('sound-on.png')";
  }

  // Cuba autoplay bila masuk web
  audio.play().then(() => {
    icon.style.backgroundImage = "url('sound-on.png')";
  }).catch(() => {
    icon.style.backgroundImage = "url('sound-off.png')";
  });
});


// Fungsi Kira Komisen
function kiraKomisen() {
  const tier1 = parseInt(document.getElementById('tier1').value) || 0;
  const topup = parseFloat(document.getElementById('topup').value) || 0;
  const resultBody = document.getElementById('resultBody');
  const totalCommissionDisplay = document.getElementById('totalCommissionDisplay');
  const output = document.getElementById('output');

  resultBody.innerHTML = '';
  totalCommissionDisplay.textContent = 'RM 0.00';
  output.classList.remove('show');

  if (tier1 <= 0 || topup <= 0) {
    alert("Sila masukkan nilai yang sah untuk kedua-dua input.");
    return;
  }

  // Kiraan jumlah dealer berdasarkan formula: T2 = T1 * T1, T3 = T1 * T2
  const tier2 = tier1 * tier1;
  const tier3 = tier1 * tier2;

  const komisen1 = 0.10;
  const komisen2 = 0.03;
  const komisen3 = 0.02;

  // Topup setiap dealer sama untuk semua tier
  const jumlahTopup1 = tier1 * topup;
  const jumlahTopup2 = tier2 * topup;
  const jumlahTopup3 = tier3 * topup;

  const pendapatan1 = jumlahTopup1 * komisen1;
  const pendapatan2 = jumlahTopup2 * komisen2;
  const pendapatan3 = jumlahTopup3 * komisen3;

  const jumlahSemua = pendapatan1 + pendapatan2 + pendapatan3;

  const tiers = [
    { name: 'Tier 1', dealer: tier1, topup: topup, rate: komisen1, income: pendapatan1 },
    { name: 'Tier 2', dealer: tier2, topup: topup, rate: komisen2, income: pendapatan2 },
    { name: 'Tier 3', dealer: tier3, topup: topup, rate: komisen3, income: pendapatan3 }
  ];

  tiers.forEach(tier => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tier.name}</td>
      <td>${tier.dealer}</td>
      <td>RM ${tier.topup.toFixed(2)}</td>
      <td>${(tier.rate * 100).toFixed(1)}%</td>
      <td>RM ${tier.income.toFixed(2)}</td>
    `;
    resultBody.appendChild(row);
  });

  totalCommissionDisplay.textContent = 'RM ' + jumlahSemua.toFixed(2);
  output.classList.add('show');

  // Auto scroll ke grid output
  output.scrollIntoView({ behavior: 'smooth' });
}
