function kiraKomisen() {
  const pengguna = parseInt(document.getElementById('pengguna').value);
  const komisen = parseFloat(document.getElementById('komisen').value);

  if (isNaN(pengguna) || isNaN(komisen)) {
    document.getElementById('output').innerText = "Sila masukkan nombor yang sah.";
    return;
  }

  const jumlah = pengguna * komisen;
  document.getElementById('output').innerText = "Jumlah komisen: RM " + jumlah.toFixed(2);
}

// Komisen Tier
function kiraKomisenTier() {
  const t1 = parseInt(document.getElementById('tier1').value) || 0;
  const t2 = parseInt(document.getElementById('tier2').value) || 0;
  const t3 = parseInt(document.getElementById('tier3').value) || 0;

  const t1topup = parseFloat(document.getElementById('topup1').value) || 0;
  const t2topup = parseFloat(document.getElementById('topup2').value) || 0;
  const t3topup = parseFloat(document.getElementById('topup3').value) || 0;

  const t1kadar = 0.10, t2kadar = 0.03, t3kadar = 0.02;

  const komisen1 = t1 * t1topup * t1kadar;
  const komisen2 = t2 * t2topup * t2kadar;
  const komisen3 = t3 * t3topup * t3kadar;

  const jumlah = komisen1 + komisen2 + komisen3;

  const tableHTML = `
    <table>
      <thead>
        <tr><th>Tier</th><th>Dealer</th><th>Topup</th><th>Kadar</th><th>Komisen (RM)</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>${t1}</td><td>${t1topup.toFixed(2)}</td><td>10%</td><td>${komisen1.toFixed(2)}</td></tr>
        <tr><td>2</td><td>${t2}</td><td>${t2topup.toFixed(2)}</td><td>3%</td><td>${komisen2.toFixed(2)}</td></tr>
        <tr><td>3</td><td>${t3}</td><td>${t3topup.toFixed(2)}</td><td>2%</td><td>${komisen3.toFixed(2)}</td></tr>
      </tbody>
      <tfoot>
        <tr><th colspan="4">Jumlah Komisen</th><th>RM ${jumlah.toFixed(2)}</th></tr>
      </tfoot>
    </table>
  `;

  document.getElementById('result-tier').innerHTML = tableHTML;
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
