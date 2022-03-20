const target = document.querySelector(".target");

console.log(target.getBoundingClientRect());
const center = {
  x: target.getBoundingClientRect().left + target.clientWidth / 2, // target 절대위치 중심 x값
  y: target.getBoundingClientRect().top + target.clientHeight / 2, // target 절대위치 중심 y값
};

window.addEventListener("mousemove", (e) => {
  //Event handler

  const x = center.x - e.clientX; // 타겟 중심점 x값 - 마우스 위치 x값
  const y = center.y - e.clientY; // 타겟 중심점 y값 - 마우스 위치 y값

  const radian = Math.atan2(y, x); // atan2함수 // 역삼각함수..?
  const degree = ((radian * 180) / Math.PI).toFixed(0); // radian -> degree 변환

  target.style.transform = "translate(-50%, -50%) rotate(" + degree + "deg)"; //값 전달
});
