# Web Page Design

생성일: 2024년 10월 21일 오후 1:17

<aside>
🖥️

RunDev 의 유튜브 영상들을 보고, 어떤게 지금 나한테 부족한지, 이거 제대로 짚고 넘어가고 싶음. 웹 퍼블리셔가 될려는 건 아니지만, 디자인을 완벽하게 하고 나서야 프론트엔드의 시작이라고 여기기 때문이다.

</aside>

# Top 10 Best Tips Shared By Master CSS

사진은 각각 가지고 있는 가로 길이와 세로길이가 다름.

이를 조절하기 위해서 핀터레스트의 경우, 높이가 다 다른데, 이미지마다 길이가 다 제각각이기 때문임.

그래서 그리드 같은 경우를 보면, Row는 일정하게 유지되지만, 세로길이는 다른것을 확인할 수 있다.

혹은 Column 속성으로 각 Column들의 사이즈를 조정해서, 반응형으로 동작하도록 설정할 수 있고, 2번째 파라미터를 넣어서 컬럼에 몇개가 들어가는 지를 조절할 수 있다.

```java
.list{
  column: 300px 4;
}
```

## Light Dark 는 CSS의 기본속성이다.

```java
:root{
  color-scheme: light dark;
}
```

위처럼 color-scheme 을 light 와 dark 로 설정한 뒤에, 

```java
body{
  background-color: light-dark(#f5f4f0, #21242b);
}
```

---

# Framer motion 애니메이션 라우팅

App Router 를 쓰는 것이 아닌 page router 를 사용한다.

Page Router 를 썼을 때, 문제점이 있지는 않을까?

그리고 Framer motion 에서 AnimatePresense 를 import 해서 가져온다.

이때, mode 가 wait 이면 애니메이션이 완료되기 전까지 Routing 을 기다린다. 를 의미한다.

[イージング関数チートシート](https://easings.net/ja)

그리고 gsap 에서는 Ease 를 관리할 수 있었지만, Framer motion 에서는 ease 를 우리가 설정해줘야됨.

여기에서 설정해주기.