
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {

console.log(" 国名"+data.sys.country);
console.log("都市名"+data.name);
console.log("緯度"+data.coord.lat);
console.log("軽度"+data.coord.lon);
console.log("天気"+data.weather[0].description);
console.log("最高気温"+data.main.temp_max);
console.log("最低気温"+data.main.temp_min);
console.log("湿度"+data.main.humidity);
console.log("風速"+data.wind.speed);
console.log("風向"+data.wind.deg);
console.log("時間帯"+data.timezone);


}
let b = document.querySelector('button#btn');
b.addEventListener('click', showSelectResult);

function showSelectResult() {
  let s = document.querySelector('select#kuni');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
  console.log('  textContent='+o.textContent);
}



// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let d=document.createElement('div');

  let kuni=document.createElement('ul');
  kuni.textContent=("国名:"+data.sys.country);
  d.insertAdjacentElement('beforeend',kuni);
  
  let toshi=document.createElement('ul');
  toshi.textContent=("都市名:"+data.name);
  d.insertAdjacentElement('beforeend',toshi);
  
  let ido=document.createElement('ul');
  ido.textContent=("緯度"+data.coord.lat);
  d.insertAdjacentElement('beforeend',ido);

  let keido=document.createElement('ul');
  keido.textContent=("軽度"+data.coord.lon);
  d.insertAdjacentElement('beforeend',keido);

  let tenki=document.createElement('ul');
  tenki.textContent=("天気"+data.weather[0].description);
  d.insertAdjacentElement('beforeend',tenki);

  let max=document.createElement('ul');
  max.textContent=("最高気温"+data.main.temp_max);
  d.insertAdjacentElement('beforeend',max);

  let min=document.createElement('ul');
  min.textContent=("最低気温"+data.main.temp_min);
  d.insertAdjacentElement('beforeend',min);

  let shitsudo=document.createElement('ul');
  shitsudo.textContent=("湿度"+data.main.humidity);
  d.insertAdjacentElement('beforeend',shitsudo);

  let husoku=document.createElement('ul');
  husoku.textContent=("風速"+data.wind.speed);
  d.insertAdjacentElement('beforeend',husoku);

  let muki=document.createElement('ul');
  muki.textContent=("風向"+data.wind.deg);
  d.insertAdjacentElement('beforeend',muki);
  
  let zikantai=document.createElement('ul');
  zikantai.textContent=("時間帯"+data.timezone);
  d.insertAdjacentElement('beforeend',zikantai);

  d.setAttribute('id','result');
  B=document.querySelector('button');
  B.insertAdjacentElement('afterend',d);
}

// 課題5-1 のイベントハンドラの定義
function show() {

}

// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

