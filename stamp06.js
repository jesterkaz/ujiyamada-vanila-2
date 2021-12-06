setTimeout("link()", 10*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp06 = $.cookie('stamp06');
    //訪問数のカウント
    if(stamp06 == null || stamp06 == -1){ //最初の訪問
        stamp06 = 6;
    }
    $.cookie('stamp06', stamp06, {expires: 7});
});