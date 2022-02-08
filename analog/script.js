// 要素を取得する
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

// 日付要素
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// clickイベントの登録
toggle.addEventListener('click', (e) => {
  // html要素を取得
  const html = document.querySelector('html')
  // darkクラスの存在確認
  if(html.classList.contains('dark')) {
    // darkクラスを除去
    html.classList.remove('dark')
    // ボタンの名称を変更
    e.target.innerHTML = 'Dark Mode'
  } else {
    // darkクラスを付与
    html.classList.add('dark')
    // ボタンの名称を変更
    e.target.innerHTML = 'Light Mode'
  }
})

function setTime() {
  // 日時取得
  const time = new Date();
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  // 日時の設定
  hourEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
  minuteEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  // 画面に表示
  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// 日付をセット
setTime()

// 時計の針を動かす
setInterval(setTime, 1000)