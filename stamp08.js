setTimeout("link()", 3*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp08 = $.cookie('stamp08');
    //訪問数のカウント
    if(stamp08 == null || stamp08 == 0){ //最初の訪問
        stamp08 = 1;
    }
    $.cookie('stamp08', stamp08, {expires: 7});
});