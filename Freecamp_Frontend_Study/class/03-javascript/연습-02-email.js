//이메일을 별로 부분처리 하기

const email = "codecamp@gmail.com"

email.includes ("@")
//@ 있는지 확인

email.split("@")
//@를 기준으로 배열을 나눔

email.split("@")[0]
'codecamp'

let userMail = email.split("@") [0]
//codecamp를 userMail로 할당

let company = email.split("@") [1]
//gmail.com을 company에 할당

let maskingMail = []
//빈 배열 생성

maskingMail.push(userMail[0])
maskingMail.push(userMail[1])
maskingMail.push(userMail[2])
maskingMail.push(userMail[3])
//앞 4글자 까지 따로 배열에 추가

maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")
//뒤 4개를 별로 새로 추가 - c,o,d,e,*,*,*,*

maskingMail.join("-")
//이렇게 작성하면 c-o-d-e-*-*-*-* 이렇게 되니

maskingMail.join ("")
//빈칸으로 해줘야 code****이 됨.

maskingMail.join("")+"@"+company
//code****@gmail.com

let result = maskingMail.join("")+"@"+company
//위 결과를 변수에 할당하여 사용

result
// code****@gmail.com

