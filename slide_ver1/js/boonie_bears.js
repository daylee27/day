$(function(){
	// window.alert("연결확인");
	
	/*
		알고리즘
		
		1. 클릭한 인디케이터(a)가 몇 번째 요소인지를 나타내는 index 번호추출
		
		2. 그 index 번호에 해당하는 a 요소의 부모에, .on클래스를 추가한다.

		3. 그 index 번호에 해당하는 a 요소의 부모의 형제에 해당하는 다른 li에게서 .on클래스를 제거한다.
		
		4. index 번호에 매칭되는 슬라이드가 보일 수 있도록 .slides-container를 이동한다.
	*/
	
	//제이쿼리로 셀렉팅할 경우 배열방식으로 저장된다.
	console.log('$("#slides>.slides-pagination>li>a")=',$("#slides>.slides-pagination>li>a"));
	
	var $indicator = $("#slides>.slides-pagination>li>a");
	
	
	
	//인디케이터에 대한 클릭이벤트 구문
	$indicator.click(function(evt){
		// window.alert("클릭");
		
		//.index() 메소드는 지정된 요소의 인덱스번호를 추출, 0부터 시작한다.
		var nowIdx = $indicator.index($(this));
		//indicator 중에서 이번에 클릭한 indicator를 가져온다.
		console.log("nowIdx = ",nowIdx);
		
		$indicator.eq(nowIdx).parent().addClass("on").siblings().removeClass("on"); // $indicator.eq(nowIdx).parent() == li
		
		//.animate ({JSON옵션},시간,이징효과,콜백함수) -JSON옵션만 필수.
		$("#slides>.slides-container").stop().animate({ //css 대신 animate 하면 흘러가는 효과.
			"left" : -665 * nowIdx
		} , 3000);
		
		evt.preventDefault();
	});
	
	
}); //약식 준비핸들러(초기화)