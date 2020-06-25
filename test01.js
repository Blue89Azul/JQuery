//課題１・２
var answer = prompt("正の値か負の値を入れてください。", "");


if (answer > 0) {
    alert("正の値です");
}
else if (answer < 0) {
    alert("負の値です");
}
else if (answer == 0) {
    alert("ゼロです");
}
else {
    alert("数値を入力してください");
}

//課題３

var animals = ["パンダ", "ライオン", "キリン"];
var i = 0;

while (i < animals.length) {
    alert(animals[i]);
    i++;
}


//課題４、５
var answer = prompt("パンダ、ライオン、キリンのどれが好きですか？");

var animals = ["パンダ", "ライオン", "キリン"];

// for文を使っての課題５記述

for (var i = 0; i < animals.length; i++) {

    if (answer == animals[i]) {
        alert(answer + '[' + i + ']');
        break;
    }


}


//課題６,７
　
var animals = [　{ "name": "パンダ", "weight": 80 }, 　 { "name": "ライオン", "weight": 200 }, 　 { "name": "キリン", "weight": 300 }　];

var answer = prompt("パンダ、ライオン、キリンのどれかを入力してください");

switch (answer) {
    case 'パンダ':
        alert("この動物の体重は" + animals[0].weight + "kgです。");
        break;
    case 'ライオン':
        alert("この動物の体重は" + animals[1].weight + "kgです。");
        break;
    case 'キリン':
        alert("この動物の体重は" + animals[2].weight + "kgです。");
        break;

    default:
        alert("別の動物です！")
}

// 課題7

function circle(num) {
    return num * num * 3.14;
}

alert(circle(2));
