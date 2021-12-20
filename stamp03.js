setTimeout("link()", 3*1000);
function link(){
location.href='index.html';
}

$(function(){	
	//Cookieの読み込み
	var stamp03 = $.cookie('stamp03');
    //訪問数のカウント
    if(stamp03 == null || stamp03 == 0){ //最初の訪問
        stamp03 = 1;
    }
    $.cookie('stamp03', stamp03, {expires: 7});
});