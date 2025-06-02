document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('kira-button');
  const output = document.getElementById('output');
  const icon = document.getElementById('music-icon');
  const music = document.getElementById('background-music');

  icon.addEventListener('click', () => {
    if (music.paused) {
      music.play();
      icon.src = 'sound-on.png';
    } else {
      music.pause();
      icon.src = 'sound-off.png';
    }
  });

  btn.addEventListener('click', () => {
    const tier1 = parseInt(document.getElementById('dealer-tier1').value);
    const topup = parseFloat(document.getElementById('topup').value);

    if (isNaN(tier1) || isNaN(topup) || tier1 <= 0 || topup <= 0) {
      output.innerHTML = "<p style='color:red;'>Sila masukkan nilai sah (lebih daripada 0).</p>";
      output.classList.add("show");
      return;
    }

    const tier2 = tier1 * 10;
    const tier3 = tier2 * 10;

    const kom1 = tier1 * topup * 0.10;
    const kom2 = tier2 * topup * 0.03;
    const kom3 = tier3 * topup * 0.02;
    const total = kom1 + kom2 + kom3;

    output.innerHTML = `
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
          <tr><td>Tier 1</td><td>${tier1}</td><td>10%</td><td>RM ${kom1.toFixed(2)}</td></tr>
          <tr><td>Tier 2</td><td>${tier2}</td><td>3%</td><td>RM ${kom2.toFixed(2)}</td></tr>
          <tr><td>Tier 3</td><td>${tier3}</td><td>2%</td><td>RM ${kom3.toFixed(2)}</td></tr>
          <tr><th colspan="3">Jumlah Keseluruhan</th><th>RM ${total.toFixed(2)}</th></tr>
        </tbody>
      </table>
    `;

    output.classList.add("show");
  });
});
