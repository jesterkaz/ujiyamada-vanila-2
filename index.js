$(function(){
	
	$.cookie.json = true;

	// ビジーwaitを使う方法
	function sleep(waitMsec) {
	var startMsec = new Date();
   
	// 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
	while (new Date() - startMsec < waitMsec);
  }
	/*var stamplist = {
		stamp01 : 0,
		stamp02 : 0,
		stamp03 : 0,
		stamp04 : 0,
		stamp05 : 0,
		stamp06 : 0,
		stamp07 : 0,
		stamp08 : 0,
		stamp09 : 0,
	}*/

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

	for(var i = 1; i <= 9; i++){
		if(eval('stamp0'+i+'== null')){
			eval('var stamp0'+i+' = 0;')
		}
	}

	//スタンプの処理
	for(var i = 1 ; i <= 9 ; i++){
		//今回訪問したぶんのスタンプをアニメーションで表示
		if(eval('stamp0'+ i +'== 1')){ 
		//今回のスタンプが押されている＆前回のスタンプが押されていない場合はアニメーションを表示
			var x = i - 1;    //何故かsetTimeoutの中でiが引き継げなかったのでxに値を避難
			setTimeout(function(){
				$('#visit-stamp td:eq('+ x +') span')
					.css('transition','all 0.5s ease-in')
					.css('transition-delay', (x * 10) +'ms')
					.addClass('visited');
			 },300);
			 eval('var stamp0'+i+' = 2;')	
			
		}
		else if(eval('stamp0'+ i + ' == 2')){
			var x = i - 1;
			//前回のスタンプが押されている場合はそのまま表示
			$('#visit-stamp td:eq('+ x +') span').addClass('visited');
		}
	}

	for(var i = 1; i <= 9; i++){
		eval("$.cookie('stamp0"+i+"', stamp0"+i+", {expires: 7});")
	}

	var stampall = 0;   //スタンプ集計
	for(var i = 1 ; i <= 9 ; i++){
		if(eval('stamp0'+ i + ' == 1 || stamp0' + i + '== 2')){
			stampall++;
		}
	}

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
		alert("Cookieをリセットしました。")
	});
	
});