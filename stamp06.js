// URLのアンカー（#以降の部分）を取得
var urlHash = location.hash;
 
// URLにアンカーが存在する場合
if(urlHash){
  // アンカーがパスワードと一致するかどうかを判断する
  if (urlHash == '#A9rsBcRV') {
    setTimeout("link()", 3*1000);
    function link(){
    location.href='index.html';
    }
    
    $(function(){	
        //Cookieの読み込み
        var stamp06 = $.cookie('stamp06');
        //訪問数のカウント
        if(stamp06 == null || stamp06 == 0){ //最初の訪問
            stamp06 = 1;
        }
        $.cookie('stamp06', stamp06, {expires: 7});
    });
} else {
    //なにもしない
  }
}