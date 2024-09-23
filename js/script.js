//미션1 new Date()활용해서 시간,분,초 를 각각span 안에 출력
//미션2 현재시간이 13시를 넘기면 em안쪽의 am을 pm으로 변경 
/* 
set Interval : 특정 함수를 일정시간마다 반복 호출
setInterval(함수,인터벌시간) :인터벌간격마다 함수 반복 호출
*/

const title = document.querySelector("h1");
const [em, spanHr, spanMin, spanSec] = title.children;
//모든 자식요소
//중간확인 console.log(childEl);

setInterval(() => {
  const now = new Date();
  const hr = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();
  let apm = hr < 13 ? "AM" : "PM"

  em.innerText = apm;
  spanHr.innerText = hr;
  spanMin.innerText = min;
  spanSec.innerText = sec;
}, 1000);

/* GPT답
const now = new Date();
// 시간, 분, 초 span 요소 선택
const hourSpan = document.querySelectorAll('span')[0];
const minuteSpan = document.querySelectorAll('span')[1];
const secondSpan = document.querySelectorAll('span')[2];

// em 요소 선택 em에 쓰인 텍스트 가져오기
const amPmEl = document.querySelector('em');

// 시간 설정
let hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// 미션 1: 시간, 분, 초를 각각 span에 출력
hourSpan.innerText = String(hours).padStart(2, '0'); // 시간
minuteSpan.innerText = String(minutes).padStart(2, '0'); // 분
secondSpan.innerText = String(seconds).padStart(2, '0'); // 초

// 미션 2: 현재 시간이 13시(오후 1시)를 넘으면 'am'을 'pm'으로 변경
if (hours >= 13) {
  amPmEl.innerText = 'PM';
  hours = hours - 12;  // 24시간 형식을 12시간 형식으로 변경
}

// 개인미션 3: 매초마다 새로고침
// setInterval(() => {
//   location.reload(); // 페이지를 새로고침
// }, 1000);


*/