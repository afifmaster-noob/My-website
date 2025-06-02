function kiraKomisen() {
  const dealerCount = parseInt(document.getElementById('pengguna').value);
  const topupPerUser = parseFloat(document.getElementById('komisen').value);

  if (isNaN(dealerCount) || isNaN(topupPerUser) || dealerCount <= 0 || topupPerUser <= 0) {
    alert("Sila isi semua ruangan dengan betul.");
    return;
  }

  const tier1 = dealerCount;
  const tier2 = tier1 * 10;
  const tier3 = tier2 * 10;

  const totalTopupTier1 = tier1 * topupPerUser;
  const totalTopupTier2 = tier2 * topupPerUser;
  const totalTopupTier3 = tier3 * topupPerUser;

  const komisen1 = totalTopupTier1 * 0.10;
  const komisen2 = totalTopupTier2 * 0.03;
  const komisen3 = totalTopupTier3 * 0.02;

  const jumlah = komisen1 + komisen2 + komisen3;

  const outputDiv = document.getElementById("output");
  outputDiv.classList.add("show");
  outputDiv.innerHTML = `
    <table class="result-table">
      <thead>
        <tr>
          <th>Tier</th>
          <th>Bilangan Dealer</th>
          <th>Topup Bulanan (RM)</th>
          <th>Komisen (RM)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tier 1</td>
          <td>${tier1}</td>
          <td>${totalTopupTier1.toFixed(2)}</td>
          <td>${komisen1.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tier 2</td>
          <td>${tier2}</td>
          <td>${totalTopupTier2.toFixed(2)}</td>
          <td>${komisen2.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tier 3</td>
          <td>${tier3}</td>
          <td>${totalTopupTier3.toFixed(2)}</td>
          <td>${komisen3.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    <div class="total">Jumlah Pendapatan: RM ${jumlah.toFixed(2)}</div>
  `;
}

// Fungsi toggle muzik
function toggleMusic() {
  const music = document.getElementById('background-music');
  const icon = document.getElementById('music-icon');

  if (music.paused) {
    music.play();
    icon.src = "sound-on.png";
  } else {
    music.pause();
    icon.src = "sound-off.png";
  }
}
