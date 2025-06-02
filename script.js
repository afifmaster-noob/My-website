function kiraKomisen() {
  const dealerCount = parseInt(document.getElementById('pengguna').value);
  const topupPerUser = parseFloat(document.getElementById('komisen').value);

  // Elak error jika kosong atau input pelik
  if (!dealerCount || !topupPerUser) return;

  const tier1 = dealerCount;
  const tier2 = tier1 * 10;
  const tier3 = tier2 * 10;

  const topupTier1 = tier1 * topupPerUser;
  const topupTier2 = tier2 * topupPerUser;
  const topupTier3 = tier3 * topupPerUser;

  const komisenTier1 = topupTier1 * 0.10;
  const komisenTier2 = topupTier2 * 0.03;
  const komisenTier3 = topupTier3 * 0.02;

  const jumlahKomisen = komisenTier1 + komisenTier2 + komisenTier3;

  const outputDiv = document.getElementById("output");
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
          <td>${topupTier1.toFixed(2)}</td>
          <td>${komisenTier1.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tier 2</td>
          <td>${tier2}</td>
          <td>${topupTier2.toFixed(2)}</td>
          <td>${komisenTier2.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tier 3</td>
          <td>${tier3}</td>
          <td>${topupTier3.toFixed(2)}</td>
          <td>${komisenTier3.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
    <div class="total">Jumlah Pendapatan: RM ${jumlahKomisen.toFixed(2)}</div>
  `;
}
