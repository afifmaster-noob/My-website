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

// Kira Komisen dengan validasi dan output table
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

  const komisenTier1 = tier1 * topupPerUser * 0.10;
  const komisenTier2 = tier2 * topupPerUser * 0.03;
  const komisenTier3 = tier3 * topupPerUser * 0.02;

  const jumlahKomisen = komisenTier1 + komisenTier2 + komisenTier3;

  const outputDiv = document.getElementById("output");
  outputDiv.classList.add("show");

  outputDiv.innerHTML = `
    <table class="result-table">
      <thead>
        <tr>
          <th>Tier</th>
          <th>Bilangan Dealer</th>
          <th>Topup Bulanan per Dealer (RM)</th>
          <th>Komisen (RM)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tier 1</td>
          <td>${tier1}</td>
          <td>${topupPerUser.toFixed(2)}</td>
          <td>${komisenTier1.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tier 2</td>
          <td>${tier2}</td>
          <td>${topupPerUser.toFixed(2)}</td>
          <td>${komisenTier2.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tier 3</td>
          <td>${tier3}</td>
          <td>${topupPerUser.toFixed(2)}</td>
          <td>${komisenTier3.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    <div class="total">Jumlah Pendapatan: RM ${jumlahKomisen.toFixed(2)}</div>
  `;
}
