document.addEventListener('DOMContentLoaded', function () {
  const musicToggle = document.getElementById('musicToggle');
  const backgroundMusic = document.getElementById('backgroundMusic');

  let isPlaying = false;

  function updateMusicIcon() {
    musicToggle.style.backgroundImage = isPlaying
      ? "url('sound-off.png')"
      : "url('sound-on.png')";
  }

  musicToggle.addEventListener('click', function () {
    if (isPlaying) {
      backgroundMusic.pause();
    } else {
      backgroundMusic.play();
    }
    isPlaying = !isPlaying;
    updateMusicIcon();
  });

  updateMusicIcon();
});

function kiraKomisen() {
  const tier1 = parseInt(document.getElementById('tier1').value) || 0;
  const topup = parseFloat(document.getElementById('topup').value) || 0;
  const resultBody = document.getElementById('resultBody');
  const totalCommissionDisplay = document.getElementById('totalCommissionDisplay');
  const output = document.getElementById('output');

  // Reset output
  resultBody.innerHTML = '';
  totalCommissionDisplay.textContent = 'RM 0.00';
  output.classList.remove('show');

  if (tier1 <= 0 || topup <= 0) {
    alert("Sila masukkan nilai yang sah untuk kedua-dua input.");
    return;
  }

  // Kiraan Tier
  const tier2 = tier1 * 5;
  const tier3 = tier2 * 5;

  // Komisen (%) mengikut tier
  const komisen1 = 0.10;
  const komisen2 = 0.03;
  const komisen3 = 0.02;

  // Jumlah topup setiap tier
  const jumlahTopup1 = tier1 * topup;
  const jumlahTopup2 = tier2 * topup;
  const jumlahTopup3 = tier3 * topup;

  // Kiraan komisen setiap tier
  const pendapatan1 = jumlahTopup1 * komisen1;
  const pendapatan2 = jumlahTopup2 * komisen2;
  const pendapatan3 = jumlahTopup3 * komisen3;

  // Jumlah komisen keseluruhan
  const jumlahSemua = pendapatan1 + pendapatan2 + pendapatan3;

  // Data untuk paparan jadual
  const tiers = [
    { name: 'Tier 1', dealer: tier1, topup: jumlahTopup1, rate: komisen1, income: pendapatan1 },
    { name: 'Tier 2', dealer: tier2, topup: jumlahTopup2, rate: komisen2, income: pendapatan2 },
    { name: 'Tier 3', dealer: tier3, topup: jumlahTopup3, rate: komisen3, income: pendapatan3 }
  ];

  // Papar jadual
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

  // Papar jumlah komisen akhir
  totalCommissionDisplay.textContent = 'RM ' + jumlahSemua.toFixed(2);

  // Tunjukkan output dengan animasi
  output.classList.add('show');
}
