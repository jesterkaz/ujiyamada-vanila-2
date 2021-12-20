// URLのアンカー（#以降の部分）を取得
var urlHash = location.hash;
 
// URLにアンカーが存在する場合
if(urlHash){
  // アンカーがパスワードと一致するかどうかを判断する
  if (urlHash == '#D8zxk5Mi') {
    setTimeout("link()", 3*1000);
    function link(){
    location.href='index.html';
    }
    
    $(function(){	
        //Cookieの読み込み
        var stamp02 = $.cookie('stamp02');
        //訪問数のカウント
        if(stamp02 == null || stamp02 == 0){ //最初の訪問
            stamp02 = 1;
        }
        $.cookie('stamp02', stamp02, {expires: 7});
    });
} else {
    //なにもしない
  }
}

