// URLのアンカー（#以降の部分）を取得
var urlHash = location.hash;
 
// URLにアンカーが存在する場合
if(urlHash){
  // アンカーがパスワードと一致するかどうかを判断する
  if (urlHash == '#Cd9Uz8jv') {
    setTimeout("link()", 3*1000);
    function link(){
    location.href='index.html';
    }
    
    $(function(){	
        //Cookieの読み込み
        var stamp05 = $.cookie('stamp05');
        //訪問数のカウント
        if(stamp05 == null || stamp05 == 0){ //最初の訪問
            stamp05 = 1;
        }
        $.cookie('stamp05', stamp05, {expires: 7});
    });
 } else {
    //なにもしない
  }
}
