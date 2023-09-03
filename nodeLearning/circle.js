//원의 둘레 공식
const PI = 3.141592;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}

export default { PI, getArea, getCircumference }; //다른 파일에서 사용 할 수 있도록 내보내기
