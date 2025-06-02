function kiraKomisen() {
  const pengguna = document.getElementById("pengguna").value;
  const komisen = document.getElementById("komisen").value;

  const total = pengguna * komisen;

  document.getElementById("output").innerHTML = 
    `Jumlah komisen bulanan: <strong>RM ${total.toFixed(2)}</strong>`;
}