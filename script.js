function kiraKomisen() {
  const pengguna = parseInt(document.getElementById("pengguna").value);
  const komisen = parseFloat(document.getElementById("komisen").value);

  if (isNaN(pengguna) || isNaN(komisen)) {
    alert("Sila isi semua maklumat dengan betul.");
    return;
  }

  // Tier kiraan
  const tier1 = pengguna;
  const tier2 = tier1 * 3;
  const tier3 = tier2 * 3;

  // Kiraan komisen
  const komisenTier1 = tier1 * komisen * 0.10;
  const komisenTier2 = tier2 * komisen * 0.03;
  const komisenTier3 = tier3 * komisen * 0.02;
  const jumlah = komisenTier1 + komisenTier2 + komisenTier3;

  // Papar output
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <table class="result-table">
      <tr>
        <th>Tier</th>
        <th>Bilangan Dealer</th>
        <th>Komisen (RM)</th>
      </tr>
      <tr>
        <td>Tier 1</td>
        <td>${tier1}</td>
        <td>RM ${komisenTier1.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Tier 2</td>
        <td>${tier2}</td>
        <td>RM ${komisenTier2.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Tier 3</td>
        <td>${tier3}</td>
        <td>RM ${komisenTier3.toFixed(2)}</td>
      </tr>
    </table>
    <p class="total">Jumlah Komisen: RM ${jumlah.toFixed(2)}</p>
  `;
  outputDiv.classList.add("show");
}

// Muzik toggle
let isPlaying = true;

function toggleMusic() {
  const music = document.getElementById("background-music");
  const icon = document.getElementById("music-toggle");

  if (isPlaying) {
    music.pause();
    icon.style.backgroundImage = "url('sound-off.png')";
  } else {
    music.play();
    icon.style.backgroundImage = "url('sound-on.png')";
  }

  isPlaying = !isPlaying;
}
