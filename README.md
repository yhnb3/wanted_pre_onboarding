# wanted_pre_onboarding

### 문제 1.

버튼 흰 부분의 position absolute로 정한 후 animation을 통해 누르는 버튼의 방향으로 따라다니게끔 설계 하였습니다.

### 문제 2.

 tab을 선택하였을때 아랫 부분인 녹색 bottom-border의 position을 absolute로  설정하여 탭을 누를때 마다 그 탭을 따라 다니게끔 설계하였습니다. 하지만 애니메이션을 적용하는 과정에서 탭에서 다른 탭으로 이동하는 animation을 일일히 지정해주고 일일이 만들어 줘야 했습니다. 그렇게 된다면 나중에 tab에서 더 많은 선택지가 주어질때 너무 개발이 귀찮고 코드도 깔끔하지 못할 것 같아서 이런 부분을 리팩토링 해야 할 것 같습니다.

### 문제 3.

아직 구현하지 못했습니다.

### 문제 4.

1. E-mail

   이메일을 인풋 받는 부분에서 체크 부분은 input태그 내에 value가 변경될때 실시간으로 체크하여 valid할때 불이 오게끔 구현하였고,

   아래 invali email address 부분은 email input에 포커스가 없고 value가 0보다 길고 valid하지 않을때 나오게끔 설계 하였습니다.

   **validation 규칙**

   1. 알파벳으로 시작하고 @ 앞부분은 최소 2자리 이상이며 알파벳과 숫자만 올 수 있고 
   2. @는 무조건 포함되어야 하며
   3. @ 뒷부분은  `내용.내용`의 형식을 만족하게끔 하였습니다. 
   4. 이후의 문자열에서 `.내용`의 형식이 여러번 등장 가능 하도록 하였습니다.

2. Password

   passoword부분은 처음에는 input의 type을 password로 지정한 후 오른쪽 눈을 누를때 마다 type이 변하게끔 하였습니다. 

### 문제 5.

dropdown은 이제 `initialTarget`과 `items`를 `props`로 받아서 컴포넌트를 생성할 수 있게끔 하였습니다.

키워드 필터링은 value가 변할때 마다 `props`중 하나인 `items`를 filter하는 방식으로 구현하였습니다.

dropdown을 보여주고 끌때마다 `input` value를 초기화 하여 기존 필터링을 제거 하였습니다.