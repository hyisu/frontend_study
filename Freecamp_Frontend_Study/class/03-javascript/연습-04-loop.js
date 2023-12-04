let fruits = [
    { num : 1, title : "사과"},
    { num : 2, title : "바나나"},
    { num : 3, title : "포도"},
    { num : 4, title : "딸기"},
    { num : 5, title : "배"},
    { num : 6, title : "귤"}
]


for (let i = 0; i < fruits.length ; i=i+1)
    {console.log(fruits[i].num + " " + fruits[i].title)}
//1 사과
//2 바나나 ...

// " "이것들 계속 사용하기 불편하다면
//console.log 안의 것들이 문자열과 변수가 혼재되어 혼란스러울때는
//  ` `(백틱)로 감싸주고 변수를 ${}로 감싸 입력한 그대로 출력하게 하는것이 용이함.

for (let i = 0; i < fruits.length ; i=i+1){
        console.log(`과일 차트 ${fruits[i].num}위는 ${fruits[i].title}입니다`)
}
// 과일 차트 1위는 사과입니다
//과일 차트 2위는 바나나입니다 ...


