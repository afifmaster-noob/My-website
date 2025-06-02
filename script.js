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
