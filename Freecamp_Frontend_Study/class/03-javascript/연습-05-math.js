Math.floor( Math.random()*1000000)
//이 경우에는 001111은 앞에 00은 사라지고 1111만 나오게 된다.

String (Math.floor(Math.random() * 1000000 ) )
//이렇게 되면 꼭 6자리 수가 안나올수도 있다. 랜덤이니 5, 40 이런게 나올수도 있음.

//따라서 padStart
String(Math.floor(Math.random() * 1000000 ) ). padStart(6, "0")
//padStart(,) 소괄호 안에 전달해 주는것은 매개변수라고 함.
//padStart(6, "0")  이 것은 6자리 숫자가 되지 않으면, 문자열 0을 채워주는 의미.

let result = String(Math.floor(Math.random() * 1000000 ) ). padStart(6, "0");

result = '001683'
//결과값을 다시 할당하여 자주 사용한다.


