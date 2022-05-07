# 1주차 과제

### [과제](https://glowing-taffy-cc2cbb.netlify.app/)

### Toggle

#### 신경 쓴 부분

- 강사님이 주신 `style`모듈을 적극적으로 사용하려고 노력하였습니다. 

- `classNames` 라이브러리를 이용해서 `className`설정을 조금 더 깔끔하게 하였습니다.

### Tab

#### 신경 쓴 부분

- Tab을 옮기는 `translate`를 각 `tab`의 `index`를 이용해 공통으로 사용할 수 있게끔 하였습니다.
- 각 버튼의 이벤트에서 버튼의 성질을 알기위해 `dataset` 을 이용하였습니다.

### Sldier

#### 잘 안된 부분

- 위치 조정을 미세하기 위해 `absolute`를 남발하게 되는 것 같아서 그래도 괜찮은지 살짝은 의문
- Slider 구현을 위해 `<input type="range" />`을 사용하여서 프로그래스 바를 `::-webkit-slider-runnable-track`을 css로 활용하고 싶었는데 css module을 이용해서는 좀 어려운 것 같아서 또 다른 `div`태그를 이용해서 `absolute`로 설정 해줄 수 밖에 없는 현실이 너무 아쉬웠습니다.

### Input

#### 잘 안되었던 부분

- `font-size`가 10px보다 작아지지 않는 부분을 해결 하지 못했습니다. 원래그런건지 뭔지..
- `svg` 아이콘들을 `absolute`로 일일히 지정하는것이 맞는 건지 잘 모르겠습니다. 좀 더 좋은 방법이 있을 것같은....

### Dropdown

#### 신경 쓴 부분

- react-use 라이브러리의 `useAwayClick`을 이용해서 간단하게 Dropdown외부를 클릭 했을 경우 Dropdown을 닫을 수 있게끔 설계하였습니다.

