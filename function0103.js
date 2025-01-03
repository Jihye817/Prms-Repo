//함수 인자에 spread 연산자 사용
function spreadFunc(first, ...rest) {
  console.log("rest : ", rest);
}
spreadFunc(1, 2, 3, 4);

//함수 바로호출 형태
(function iife() {
  console.log("iife");
})();

//재귀함수
function selfCaller(arg) {
  if (arg === 3) return;
  console.log(arg);

  selfCaller(arg + 1);
}
selfCaller(1);

//중첩함수
function outer(arg) {
  function inner(){
    console.log(arg);
  }
  inner();
}
outer(1);

//콜백함수
function callBack(arg) {
  arg();
}
callBack(() => {
  console.log(1);
})