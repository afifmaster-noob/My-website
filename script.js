function kiraKomisen() {
  const pengguna = parseFloat(document.getElementById("pengguna").value);
  const komisen = parseFloat(document.getElementById("komisen").value);

  if (isNaN(pengguna) || isNaN(komisen)) {
    document.getElementById("output").innerText = "Sila isi kedua-dua nilai dengan betul.";
    return;
  }

  const jumlah = pengguna * komisen;
  document.getElementById("output").innerText = "Jumlah Komisen: RM " + jumlah.toFixed(2);
}
