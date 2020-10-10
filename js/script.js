const tanah = document.querySelectorAll('.tanah')
const tikus = document.querySelectorAll('.tikus')
const start = document.querySelector('.mulai')
const papanSkor = document.querySelector('.score')
const pop = document.querySelector('#pop')
start.addEventListener('click', mulai)

let tanahSebelumnya
let skor = 0


function randomTanah(tanah) {
  const t = Math.floor(Math.random() * tanah.length)
  const tRandom = tanah[t]
  if (tRandom == tanahSebelumnya) {
    randomTanah(tanah)
  }
  tanahSebelumnya = tRandom
  return tRandom
  // console.log(tRandom);
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculTikus() {
  const random = randomTanah(tanah)
  const waktu = randomWaktu(300, 1000)

  random.classList.add('muncul')

  setTimeout(() => {
    random.classList.remove('muncul')
    if (!selesai) {
      munculTikus()
    }
  }, waktu);
}


function mulai() {

  selesai = false;
  munculTikus();
  setTimeout(() => {
    skor=0
    alert('Timeout !')
    selesai = true;
  }, 10000);

  tikus.forEach(t => {
    t.addEventListener('click', pukul);
  });

}

function klikGambar(e) {
  randomTanah()
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = skor;

}