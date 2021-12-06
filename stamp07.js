setTimeout("link()", 10*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp07 = $.cookie('stamp07');
    //訪問数のカウント
    if(stamp07 == null || stamp07 == -1){ //最初の訪問
        stamp07 = 7;
    }
    $.cookie('stamp07', stamp07, {expires: 7});
});