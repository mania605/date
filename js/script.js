// [0 : margin - left: 0px; (-400 * 0)
// 1 : margin - left: -400px; (-400 * 1)
// 2 : margin - left: -800px; (-400 * 2)
// 3 : margin - left: -1200px; (-400 * 3)
// 4 : margin - left: -1600px; (-400 * 4)]

const frame = document.querySelector("main");
const panel = frame.querySelector(".panel");
const btns = frame.querySelectorAll(".btns li");

// btns.forEach((btn, idx) => {
//   btn.addEventListener("click", () => {
//     console.log(idx);
//   });
// });

//위의코드에서 각각의 버튼을 클릭하면 해당 순번의 패널이 프레임 안쪽으로 들어오도록 new anime를 활용해 좌우 슬라이더 모션 처리


btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    console.log(idx);
    new Anime(panel, { marginLeft: -400 * idx }, { duration: 500 });
  });
});