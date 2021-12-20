// URLのアンカー（#以降の部分）を取得
var urlHash = location.hash;
 
// URLにアンカーが存在する場合
if(urlHash){
  // アンカーがパスワードと一致するかどうかを判断する
  if (urlHash == '#s9VRrf58') {
    setTimeout("link()", 3*1000);
    function link(){
    location.href='index.html';
    }

    $(function(){	
        //Cookieの読み込み
        var stamp01 = $.cookie('stamp01');
        //訪問数のカウント
        if(stamp01 == null || stamp01 == 0){ //最初の訪問
            stamp01 = 1;
        }
        $.cookie('stamp01', stamp01, {expires: 7});
    });
} else {
    //なにもしない
  }
}
