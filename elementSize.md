## 1. element.offsetWidth / element.offsetHeight

- margin을 제외한, padding값, border값까지 계산한 element의 크기를 가져온다.

  <br>

## 2. element.clientWidth / element.clientHeight

- margin값과 border값이 제외된, padding값까지만 적용된 내부의 실제 크기를 가져온다

  <br>

## 3. element.scrollWidth / element.scrollHeight

- 스크롤 영역일때 스크롤로 감싸여진 내용의 전체 크기를 가져온다.

  <br>

## 4. element.getBoundingClientRect();

- element 위치에 대한 각종 값이 저장된 객체를 빈환한다

  |    key    |        value가 의미하는 값         |
  | :-------: | :--------------------------------: |
  | top or y  | 화면 상단 부터 대상의 처음 위치 값 |
  |  bottom   |  화면 상단 부터 대상의 끝 위치 값  |
  | left or x | 화면 좌측 부터 대상의 처음 위치 값 |
  |   right   |  화면 좌측 부터 대상의 끝 위치 값  |
  |   width   |            대상의 길이             |
  |  height   |            대상의 높이             |
