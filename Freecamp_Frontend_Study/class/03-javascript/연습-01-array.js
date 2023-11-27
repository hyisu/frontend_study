let classmates = ["철수", "영희", "훈이"]
//undefined

classmates
//(3) ["철수", "영희", "훈이"]

classmates[0]
//철수

classmates.includes("훈이")
//true

classmates.includes("맹구")
//false

classmates.length
//3

classmates.push("맹구")
//4

classmates.includes("맹구")
//true

classmates
(4) ["철수", "영희", "훈이", "맹구"]

classmates.pop()
//'맹구'

classmates.length
//3

classmates
//(3) ["철수", "영희", "훈이"]

let dream = ["커리어점프", "성공", "할수있다"]

developer.concat(dream)
//배열에 다른 배열 구성요소들을 추가함.

let result = developer.concat(dream)
//합친결과를 새로운 변수에 할당