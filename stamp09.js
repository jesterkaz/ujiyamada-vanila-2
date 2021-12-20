setTimeout("link()", 3*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp09 = $.cookie('stamp09');
    //訪問数のカウント
    if(stamp09 == null || stamp09 == 0){ //最初の訪問
        stamp09 = 1;
    }
    $.cookie('stamp09', stamp09, {expires: 7});
});