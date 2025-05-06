function getLyrics() {
  const artist = document.getElementById('artist').value;
  const song = document.getElementById('song').value;
  
  if (!artist || !song) {
    alert("Lütfen hem sanatçı hem de şarkı adı girin.");
    return;
  }

  const apiUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const lyricsElement = document.getElementById('lyrics');
      if (data.lyrics) {
        lyricsElement.innerText = data.lyrics;
      } else {
        lyricsElement.innerText = "Üzgünüz, şarkı sözleri bulunamadı.";
      }
    })
    .catch(error => {
      console.error("Şarkı sözlerini alırken bir hata oluştu:", error);
      alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    });
}
