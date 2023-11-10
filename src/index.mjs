/**
 * セクション4: モダンJavaScriptの機能に触れる
 */

/**
 * const, let
 */
const val = {
  name: "Meguro",
  age: "31",
};
// console.log(val);

/**
 * テンプレート文字列
 */
const name = "目黒";
const age = "31";

// 「私の名前は目黒です。年齢は31歳です。」
const message = `「私の名前は${name}です。年齢は${age}歳です。」`;
// console.log(message);

/**
 * アロー関数
 */
// 従来
function func1(str) {
  return str;
}
// console.log(func1("func1です"));

// ES6
const func2 = str => {
  return str;
}
// console.log(func2("func2です"));

// returnを省略できる
const func3 = str => str;
// console.log(func3("func3です"));

// 練習
const func4 = (num1, num2) => {
  return num1 + num2
}
// console.log(func4(10, 20));

/**
 * 分割代入
 */
// 今まで
const myProfile1 = {
  name1: '目黒',
  age1: 31
}
const message1 = `名前は${myProfile1.name1}です。年齢は${myProfile1.age1}歳です。`;
// console.log(message1);

//　オブジェクトの場合
const myProfile2 = {
  name2: '目黒',
  age2: 31
}
const { name2, age2 } = myProfile2;
const message2 = `名前は${name2}です。年齢は${age2}歳です。`;
// console.log(message2);

// 配列の場合
const myProfile3 = ['伊藤', 31];
const [name3, age3] = myProfile3;
const message3 = `名前は${name3}です。年齢は${age3}歳です。`;
// console.log(message3);
/**
 * デフォルト値、引数など
 */
const sayHello = (name = 'ゲスト') => {
  console.log(`こんにちは、${name}さん。`);
}

// 引数設定あり
// sayHello('山田');

// 引数設定なし
// sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
const ary1 = [1,2];

// console.log(ary1);

// 配列の中身を順番に処理
// console.log(...ary1);

// 合計値を計算
const sumFunc = (num1,num2) => console.log(num1+num2);
// 普通に呼び出して展開
// sumFunc(ary1[0], ary1[1])

// スプレッド構文で展開した場合
// sumFunc(...ary1)

// 一つにまとめる
const ary2 = [1,2,3,4,5];
const [num1, num2, ... ary3] =  ary2;

// console.log(num1);
// console.log(num2);
// console.log(ary3);

// 配列のコピー、結合
const ary4 = [10,20];
const ary5 = [30,40];

// ary4をコピーした配列
const ary6 = [...ary4];
// console.log(ary6);

// ary4とary5を結合した配列
const ary7 = [...ary4, ...ary5];
// console.log(ary7);

// ❌ このやり方でコピーしてはダメ（参照渡し）
const ary8 = ary4;
// console.log(ary8);

// ⇒ ary4でコピーしたものをary8で値を変えると、ary4も変更されてしまうから

/**
 * map, filter
 */
// map
const nameArr = ["田中", "山田", "伊藤"];

// ループして処理する場合（名前を一つずつ取り出して処理する）
const nameArr2 = nameArr.map((name) => {
  return name;
})
// console.log(nameArr2);

// さらに書き方を省略できる
// nameArr.map((name) => console.log(name));

// indexを取り出したい場合
// nameArr.map((name, index) => console.log(`${index + 1}：name`));

// 自分以外は「XXさん」をつけた新しい配列を作りたい場合
newnameArr2 = nameArr.map((name) => {
  if (name === '伊藤') {
    return name;
  } else {
    return `${name}さん`;
  }
});
// console.log(newnameArr2);


// filter
const numAry = [1, 2, 3, 4, 5];

// 奇数だけ取り出して新しい配列を作る
const newNumAry = numAry.filter((num) => {
  // returnの後に条件式を書く
  return num % 2 === 1;
})
// console.log(newNumAry);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val2 = 1 > 0 ? 'true' : 'false';
// console.log(val2);

// 数値が来た場合だけ、toLocaleStringを使う
// const num = '1300';
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください。';

// console.log(formattedNum);

// 受け取った数値の合計を判定
const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
}

// console.log(checkSum(100, 10));
// console.log(checkSum(40, 10));

/**
 * 論理演算子の本当の意味を知ろう
 * || && または、かつ
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log('1か2はtrueになります');
// }

// if (flag1 && flag2) {
//   console.log('1も2もtrueになります');
// }

// || は、左側がfalseなら右側を返す
const num = 100;
const fee = num || '金額未設定です';
// console.log(fee);

// && は、左側がtrueなら右側を返す
const num3 = 100;
const fee2 = num3 && '何か設定されました';
console.log(fee2);
