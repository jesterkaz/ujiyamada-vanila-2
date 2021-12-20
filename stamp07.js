// URLのアンカー（#以降の部分）を取得
var urlHash = location.hash;
 
// URLにアンカーが存在する場合
if(urlHash){
  // アンカーがパスワードと一致するかどうかを判断する
  if (urlHash == '#p5F3Pgnd') {
    setTimeout("link()", 3*1000);
    function link(){
    location.href='index.html';
    }
    
    $(function(){	
        //Cookieの読み込み
        var stamp07 = $.cookie('stamp07');
        //訪問数のカウント
        if(stamp07 == null || stamp07 == 0){ //最初の訪問
            stamp07 = 1;
        }
        $.cookie('stamp07', stamp07, {expires: 7});
    });
} else {
    //なにもしない
  }
}