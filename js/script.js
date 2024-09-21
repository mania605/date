// [0 : margin - left: 0px; (-400 * 0)  : 0%
// 1 : margin - left: -400px; (-400 * 1)  : -100%
// 2 : margin - left: -800px; (-400 * 2)  : -200%
// 3 : margin - left: -1200px; (-400 * 3) : -300%
// 4 : margin - left: -1600px; (-400 * 4)] : -400%


// const frame = document.querySelector("main");
// const panel = frame.querySelector(".panel");
// const btns = frame.querySelectorAll(".btns li");
// btns.forEach((btn, idx) => {
//   btn.addEventListener("click", () => {
//     console.log(idx);
//   });
// });


//위의코드에서 각각의 버튼을 클릭하면 해당 순번의 패널이 프레임 안쪽으로 들어오도록 new anime를 활용해 좌우 슬라이더 모션 처리
// btns.forEach((btn, idx) => {
//   btn.addEventListener("click", () => {
//     console.log(idx);
//     new Anime(panel, { Left: -100 * idx + "%" }, { duration: 500 });
//   });
// });

//미션 HTML에서 li 의 갯수만 수정하면, scss에서 하나하나panel, li의 넓이를 수정할 필요가 없도록 스크립트에서 동적 처리

/*
const frame = document.querySelector("main");
const panel = frame.querySelector(".panel");
const btns = frame.querySelectorAll(".btns li");

//html구조에서 패널과 버튼의 갯수가 바뀔때마다 일일이 css파일에서
//넓이, 높이값 을 재설정하는 번거로움 피하기 위함
//스크립트가 실행되자마자 panel의 넓이값과 높이값을 btns의 갯수에 따라 동적 스타일링
panel.style.width = 100 * btns.length + "%";
panel.style.height = "100%";
//스크립트가 실행되자마자 panel의 자식 li를 모두 찾은 다음
//반복을 돌며 btns의 갯수에 따라 넓이, 높이 동적 스타일링
panel.querySelectorAll("li").forEach((li) => {
  li.style.width = 100 / btns.length + "%";
  li.style.height = "100%";
});
btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    console.log(idx);
    new Anime(panel, { left: -100 * idx + "%" }, { duration: 500 });

//버튼 클릭시마다 순간적으로 모든 버튼을 반복돌며 on을 제거
    btns.forEach(btn=> btn.classList.remove("on"));
//idx에 해당하는 현재 순번의 버튼만 on을 붙여 활성화
    btns[idx].classList.add("on");
  });
});
*/







/*
특정 요소만 활성화 시키는 로직
  -순간적으로 모든 그룹요소를 비활성화 처리
  -그 직후 원하는 요소만 활성화 처리

*/
// 각각 메인 컨테이너, 패널, 버튼 목록을 선택
const frame = document.querySelector("main");
const panel = frame.querySelector(".panel");
const btns = frame.querySelectorAll(".btns li");

//스크립트 로딩시 패널 너비, 높이 동적 초기화
//패널과 li 요소의 동적 스타일링
panel.style.width = 100 * btns.length + "%";
panel.style.height = "100%";
//패널의 크기는 버튼 개수에 맞춰 동적으로 설정.
//패널의 너비는 버튼 개수만큼 100%씩 늘어남.
//각 li 요소(패널 슬라이드)는 버튼 개수에 맞춰 너비가 100%로 설정됨


panel.querySelectorAll("li").forEach((li) => {
  li.style.width = 100 / btns.length + "%";
  li.style.height = "100%";
});

//각 버튼 클릭 이벤트 연결
//forEach를 사용해 각 버튼에 클릭 이벤트를 추가합니다.



btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => { //버튼 클릭 시:
    new Anime(panel, { left: -100 * idx + "%" }, { duration: 1000 });
    ///Anime 클래스를 사용해 패널을 왼쪽으로 이동시킴
    ///예를 들어, 첫 번째 버튼을 클릭하면 left: 0%, 두 번째 버튼을 클릭하면 left: -100%로 이동하여 패널이 보이도록 


    //버튼 클릭시마다 순간적으로 모든 버튼을 반복돌며 on을 제거
    ///모든 버튼에서 on 클래스를 제거
    btns.forEach((btn) => btn.classList.remove("on"));
    //idx에 해당하는 현재 순번의 버튼만 on을 붙여 활성화
    ///클릭된 버튼만 on 클래스를 추가해 활성화 표시.
    btns[idx].classList.add("on");
  });
}); 