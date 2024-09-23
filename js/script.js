
//미션1 new Date()활용해서 시간,분,초 를 각각span 안에 출력
//미션2 현재시간이 13시를 넘기면 em안쪽의 am을 pm으로 변경 


const now = new Date();

// 시간, 분, 초 span 요소 선택
const hourSpan = document.querySelectorAll('span')[0];
const minuteSpan = document.querySelectorAll('span')[1];
const secondSpan = document.querySelectorAll('span')[2];

// em 요소 선택
const amPmElement = document.querySelector('em');

// 시간 설정
let hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// 미션 2: 현재 시간이 13시(오후 1시)를 넘으면 'am'을 'pm'으로 변경
if (hours >= 13) {
  amPmElement.innerText = 'pm';
  hours = hours - 12;  // 24시간 형식을 12시간 형식으로 변경
}

// 미션 1: 시간, 분, 초를 각각 span에 출력
hourSpan.innerText = String(hours).padStart(2, '0'); // 시간
minuteSpan.innerText = String(minutes).padStart(2, '0'); // 분
secondSpan.innerText = String(seconds).padStart(2, '0'); // 초


// 개인미션 3: 매초마다 새로고침
setInterval(() => {
  location.reload(); // 페이지를 새로고침
}, 1000);