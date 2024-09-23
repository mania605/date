const main = document.querySelector("main");
const numbers = document.querySelectorAll(".screen span");
const [am, pm] = document.querySelectorAll(".screen em");

setInterval(() => {
  changeTheme();
  getTime().forEach((num, idx) => setTime(num, idx));
}, 1000);

//시간값을 구해서 반환하는 함수
function getTime() {
  const now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if (hr >= 13) {
    am.classList.remove("on");
    pm.classList.add("on");
  } else {
    pm.classList.remove("on");
    am.classList.add("on");
  }
  return [hr, min, sec];
}

//반환된 시간값을 DOM에 세팅하는 함수
function setTime(num, index) {
  num = num < 10 ? "0" + num : num;
  numbers[index].innerText = num;
}

// //시간에 따른 테마 변경 함수

// function changeTheme() {
//   const hr = new Date().getHours();

//   if (hr >= 5 && hr < 11) {
//     main.className = "";
//     main.classList.add("morning");
//   }
//   if (hr >= 11 && hr < 16) {
//     main.className = "";
//     main.classList.add("afternoon");
//   }
//   if (hr >= 16 && hr < 20) {
//     main.className = "";
//     main.classList.add("evening");
//   }
//   if (hr >= 20 || hr < 5) {
//     main.className = "";
//     main.classList.add("night");
//   }
// }

//위의 코드를 효율적으로 반복문으로 변경
//미션 changeTheme함수 안쪽에 특정정보값을 배열로 분리한 뒤 조건식 부분을 반복문처리

function changeTheme() {
  const hr = new Date().getHours();
  const themes = ['night', 'morning', 'afternoon', 'evening', 'night']; // 각 시간대에 맞는 테마

  const themeIdx = hr < 5 ? 0 : Math.floor((hr - 5) / 6) + 1;
  main.className = "";
  main.classList.add(themes[themeIdx]);
}


//오후 1시, 13시가 넘어가면 다시 01로 표기법 변경
let hr = new Date().getHours();
hr = hr % 12 || 12;  // 12시간 형식으로 변환


//숫자 들어가는 부분 위치 고정되게, 숫자에 따라 움직이지 않게

//브라우저 렌더링 될 때 레이아웃과 페인팅이 될때 제일 시간이 걸림
// js를 변경하면 로직이 그렇게 무거운 편은 아님 