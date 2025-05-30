
let btn = document.querySelector('button#btn');
btn.addEventListener('click', showSelectResult);

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
  ido.textContent=("緯度:"+data.coord.lat);
  d.insertAdjacentElement('beforeend',ido);

  let keido=document.createElement('ul');
  keido.textContent=("軽度:"+data.coord.lon);
  d.insertAdjacentElement('beforeend',keido);

  let tenki=document.createElement('ul');
  tenki.textContent=("天気:"+data.weather[0].description);
  d.insertAdjacentElement('beforeend',tenki);

  let max=document.createElement('ul');
  max.textContent=("最高気温:"+data.main.temp_max);
  d.insertAdjacentElement('beforeend',max);

  let min=document.createElement('ul');
  min.textContent=("最低気温:"+data.main.temp_min);
  d.insertAdjacentElement('beforeend',min);

  let shitsudo=document.createElement('ul');
  shitsudo.textContent=("湿度:"+data.main.humidity);
  d.insertAdjacentElement('beforeend',shitsudo);

  let husoku=document.createElement('ul');
  husoku.textContent=("風速:"+data.wind.speed);
  d.insertAdjacentElement('beforeend',husoku);

  let muki=document.createElement('ul');
  muki.textContent=("風向:"+data.wind.deg);
  d.insertAdjacentElement('beforeend',muki);

  d.setAttribute('id','result');
  B=document.querySelector('button');
  B.insertAdjacentElement('afterend',d);

 
}

// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#btn');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let select = document.querySelector('#kuni');
  let key = select.value;

  let list_element = document.getElementById("result");
  list_element.remove();


 let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json' 
  axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  printDom(data);
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
