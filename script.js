function kiraKomisen() {
  const bilDealerTier1 = parseInt(document.getElementById('dealer-tier1').value);
  const topupPerDealer = parseFloat(document.getElementById('topup').value);

  if (isNaN(bilDealerTier1) || isNaN(topupPerDealer) || bilDealerTier1 <= 0 || topupPerDealer <= 0) {
    document.getElementById('output').innerHTML = "<p style='color:red;'>Sila masukkan nombor yang sah dan lebih daripada 0.</p>";
    return;
  }

  // Auto kira bilangan dealer untuk setiap tier
  const bilDealerTier2 = bilDealerTier1 * 10;
  const bilDealerTier3 = bilDealerTier2 * 10;

  // Kira komisen
  const komisenTier1 = bilDealerTier1 * topupPerDealer * 0.10;
  const komisenTier2 = bilDealerTier2 * topupPerDealer * 0.03;
  const komisenTier3 = bilDealerTier3 * topupPerDealer * 0.02;
  const jumlahKomisen = komisenTier1 + komisenTier2 + komisenTier3;

  // Papar hasil
  const outputHTML = `
    <div class="result-container">
      <table class="result-table">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Bilangan Dealer</th>
            <th>Kadar Komisen</th>
            <th>Jumlah Komisen (RM)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tier 1</td>
            <td>${bilDealerTier1}</td>
            <td>10%</td>
            <td>RM ${komisenTier1.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tier 2</td>
            <td>${bilDealerTier2}</td>
            <td>3%</td>
            <td>RM ${komisenTier2.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tier 3</td>
            <td>${bilDealerTier3}</td>
            <td>2%</td>
            <td>RM ${komisenTier3.toFixed(2)}</td>
          </tr>
          <tr>
            <th colspan="3">Jumlah Keseluruhan Komisen</th>
            <th>RM ${jumlahKomisen.toFixed(2)}</th>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('output').innerHTML = outputHTML;
}

// Muzik Toggle
const audio = document.getElementById('background-music');
const icon = document.getElementById('music-icon');

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    icon.src = 'sound-on.png';
  } else {
    audio.pause();
    icon.src = 'sound-off.png';
  }
}
