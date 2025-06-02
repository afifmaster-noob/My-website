function kiraKomisen() {
  const tier1 = parseInt(document.getElementById("tier1").value);
  const topup = parseFloat(document.getElementById("topup").value);

  if (isNaN(tier1) || isNaN(topup) || tier1 <= 0 || topup <= 0) {
    alert("Sila masukkan nilai yang sah untuk semua medan.");
    return;
  }

  const tier2 = tier1 * 5;
  const tier3 = tier2 * 5;

  const komisenTier1 = tier1 * topup * 0.10;
  const komisenTier2 = tier2 * topup * 0.03;
  const komisenTier3 = tier3 * topup * 0.02;

  const jumlah = komisenTier1 + komisenTier2 + komisenTier3;

  const tbody = document.getElementById("resultBody");
  tbody.innerHTML = `
    <tr><td>Tier 1</td><td>${tier1}</td><td>10%</td><td>RM ${komisenTier1.toFixed(2)}</td></tr>
    <tr><td>Tier 2</td><td>${tier2}</td><td>3%</td><td>RM ${komisenTier2.toFixed(2)}</td></tr>
    <tr><td>Tier 3</td><td>${tier3}</td><td>2%</td><td>RM ${komisenTier3.toFixed(2)}</td></tr>
    <tr class="total-row"><td colspan="3">Jumlah Pendapatan</td><td>RM ${jumlah.toFixed(2)}</td></tr>
  `;

  document.getElementById("totalCommissionDisplay").textContent = "RM " + jumlah.toFixed(2);
  document.getElementById("output").classList.add("show");
}

// Muzik toggle
const music = document.getElementById("backgroundMusic");
const toggleBtn = document.getElementById("musicToggle");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.style.backgroundImage = "url('sound-on.png')";
  } else {
    music.pause();
    toggleBtn.style.backgroundImage = "url('sound-off.png')";
  }
});
