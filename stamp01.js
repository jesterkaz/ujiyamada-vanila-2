setTimeout("link()", 10*1000);
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