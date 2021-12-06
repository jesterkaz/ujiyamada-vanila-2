$(function(){
	
	//Cookieの読み込み
	var stamp01 = $.cookie('stamp01');
	var stamp02 = $.cookie('stamp02');
	var stamp03 = $.cookie('stamp03');
	var stamp04 = $.cookie('stamp04');
	var stamp05 = $.cookie('stamp05');
	var stamp06 = $.cookie('stamp06');
	var stamp07 = $.cookie('stamp07');
	var stamp08 = $.cookie('stamp08');
	var stamp09 = $.cookie('stamp09');

	var beforestamp01 = $.cookie('beforestamp01');
	var beforestamp02 = $.cookie('beforestamp02');
	var beforestamp03 = $.cookie('beforestamp03');
	var beforestamp04 = $.cookie('beforestamp04');
	var beforestamp05 = $.cookie('beforestamp05');
	var beforestamp06 = $.cookie('beforestamp06');
	var beforestamp07 = $.cookie('beforestamp07');
	var beforestamp08 = $.cookie('beforestamp08');
	var beforestamp09 = $.cookie('beforestamp09');

	if(stamp01 == null){ //エラーが出ないように
        stamp01 = -1;
		$.cookie('beforestamp01', stamp01, {expires: 7});
    }
	if(stamp02 == null){
        stamp02 = -1;
		$.cookie('beforestamp02', stamp02, {expires: 7});
    }
	if(stamp03 == null){
        stamp03 = -1;
		$.cookie('beforestamp03', stamp03, {expires: 7});
    }
	if(stamp04 == null){
        stamp04 = -1;
		$.cookie('beforestamp04', stamp04, {expires: 7});
    }
	if(stamp05 == null){
        stamp05 = -1;
		$.cookie('beforestamp05', stamp05, {expires: 7});
    }
	if(stamp06 == null){
        stamp06 = -1;
		$.cookie('beforestamp06', stamp06, {expires: 7});
    }
	if(stamp07 == null){
        stamp07 = -1;
		$.cookie('beforestamp07', stamp07, {expires: 7});
    }
	if(stamp08 == null){
        stamp08 = -1;
		$.cookie('beforestamp08', stamp08, {expires: 7});
    }
	if(stamp09 == null){
        stamp09 = -1;
		$.cookie('beforestamp09', stamp09, {expires: 7});
    }

	//スタンプの処理
	for(var i=0 ; i<=8 ; i++){
		//今回訪問したぶんのスタンプをアニメーションで表示
		if(eval('stamp0'+ (i+1) ) == (i+1) && eval('beforestamp0'+ (i+1) ) == -1){ 
		　　//今回のスタンプが押されている＆前回のスタンプが押されていない場合はアニメーションを表示
			var x = i;  　　　　　　　　　　//何故かsetTimeoutの中でiが引き継げなかったのでxに値を避難
			setTimeout(function(){
				$('#visit-stamp td:eq('+x+') span')
					.css('transition','all 0.5s ease-in')
					.addClass('visited');
			 },300);
		}
		if(eval('beforestamp0'+ (i+1) ) == (i+1) ){
			//前回のスタンプが押されている場合はそのまま表示
			$('#visit-stamp td:eq('+i+') span').addClass('visited');
		}
	}

	var stampall = 0;   //スタンプ集計
	for(var i=0;i<=8;i++){
		if(eval('stamp0'+(i+1)) == (i+1)){
			stampall++;
		}
	}

	//スタンプの状態を保存
	$.cookie('beforestamp01', stamp01, {expires: 7});
	$.cookie('beforestamp02', stamp02, {expires: 7});
	$.cookie('beforestamp03', stamp03, {expires: 7});
	$.cookie('beforestamp04', stamp04, {expires: 7});
	$.cookie('beforestamp05', stamp05, {expires: 7});
	$.cookie('beforestamp06', stamp06, {expires: 7});
	$.cookie('beforestamp07', stamp07, {expires: 7});
	$.cookie('beforestamp08', stamp08, {expires: 7});
	$.cookie('beforestamp09', stamp09, {expires: 7});

	//スタンプ数の表示
	if(stampall === 0){
		$('#visitnum').text('まだスタンプを集めていません。');
	}
	else if(stampall < 9){
		$('#visitnum').text('現在、スタンプを'+ stampall +'個集めています。');
	}
	else{
		$('#visitnum').text('おめでとうございます、スタンプを集めきりました！');
	}	
	//Cookieのリセットクリック時の処理
	$('#reset').click(function(){
		$.removeCookie('stamp01');
		$.removeCookie('stamp02');
		$.removeCookie('stamp03');
		$.removeCookie('stamp04');
		$.removeCookie('stamp05');
		$.removeCookie('stamp06');
		$.removeCookie('stamp07');
		$.removeCookie('stamp08');
		$.removeCookie('stamp09');
		$.removeCookie('beforestamp01');
		$.removeCookie('beforestamp02');
		$.removeCookie('beforestamp03');
		$.removeCookie('beforestamp04');
		$.removeCookie('beforestamp05');
		$.removeCookie('beforestamp06');
		$.removeCookie('beforestamp07');
		$.removeCookie('beforestamp08');
		$.removeCookie('beforestamp09');
		alert("Cookieをリセットしました。")
	});
	
});