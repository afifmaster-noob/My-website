function kiraKomisen() {
  const tier1 = parseInt(document.getElementById('tier1').value) || 0;
  const topup = parseFloat(document.getElementById('topup').value) || 0;

  const tier2 = tier1 * 3;  // contoh kiraan tier 2 ikut tier 1
  const tier3 = tier2 * 2;  // contoh kiraan tier 3 ikut tier 2

  const komisenRates = [10, 3, 2]; // %
  const tiers = [
    { name: 'Tier 1', dealers: tier1, topup },
    { name: 'Tier 2', dealers: tier2, topup },
    { name: 'Tier 3', dealers: tier3, topup }
  ];

  let totalKomisen = 0;

  const tbody = document.getElementById('resultBody');
  tbody.innerHTML = ''; // kosongkan dulu

  tiers.forEach((tier, i) => {
    const komisen = tier.dealers * tier.topup * (komisenRates[i] / 100);
    totalKomisen += komisen;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tier.name}</td>
      <td>${tier.dealers}</td>
      <td>RM ${tier.topup.toFixed(2)}</td>
      <td>${komisenRates[i]}%</td>
      <td>RM ${komisen.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  });

  // Total row
  const totalRow = document.createElement('tr');
  totalRow.classList.add('total-row');
  totalRow.innerHTML = `
    <td colspan="4">Jumlah Komisen Keseluruhan</td>
    <td>RM ${totalKomisen.toFixed(2)}</td>
  `;
  tbody.appendChild(totalRow);

  // Tunjuk output box
  const output = document.getElementById('output');
  output.classList.add('show');

  // Reset zoom table dulu
  const table = document.querySelector('.result-table');
  table.style.transform = "none";

  // Auto zoom out table kalau lebar table lebih dari container
  const containerWidth = document.querySelector('.container').clientWidth;
  const tableWidth = table.scrollWidth;

  if (tableWidth > containerWidth) {
    const scale = containerWidth / tableWidth;
    table.style.transformOrigin = "left top";
    table.style.transform = `scale(${scale})`;
  }
}
