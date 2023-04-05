var rightanswer = "garvage value";
var answers = ['아', '이', '우', '에', '오', '카', '키', '쿠', '케', '코', '사', '시', '스', '세', '소', '타', '치', '츠', '테', '토', '나', '니', '누', '네', '노', '하', '히', '후', '헤', '호', '마', '미', '무', '메', '모', '야', '유', '요', '라', '리', '루', '레', '로', '와', '오1'];
var order = 0;
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(answers);
function ChnImg(fileName){ 

    document.getElementById("imgId").src = decodeURIComponent(fileName)+".png";
}
document.getElementById("submitbutton").onclick = function() {
    var useranswer = document.getElementById("useranswer").value;
    if(useranswer == rightanswer || (rightanswer == "오1" && useranswer == "오")) {
        document.querySelector('p').innerHTML = '정답입니다!';
    } else{
        document.querySelector('p').innerHTML = `오답입니다. 정답은 ${rightanswer}입니다.`;
    }
}



document.getElementById("next").onclick = function() {
    rightanswer = answers.shift();
    ChnImg(rightanswer);
    document.querySelector('p').innerHTML = '';
    useranswer = "";
}