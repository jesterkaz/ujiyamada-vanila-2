// URLのアンカー（#以降の部分）を取得
var urlHash = location.hash;
 
// URLにアンカーが存在する場合
if(urlHash){
  // アンカーがパスワードと一致するかどうかを判断する
  if (urlHash == '#Aa3HFVMR') {
    setTimeout("link()", 3*1000);
    function link(){
    location.href='index.html';
    }
    
    $(function(){	
        //Cookieの読み込み
        var stamp04 = $.cookie('stamp04');
        //訪問数のカウント
        if(stamp04 == null || stamp04 == 0){ //最初の訪問
            stamp04 = 1;
        }
        $.cookie('stamp04', stamp04, {expires: 7});
    });
} else {
    //なにもしない
  }
}