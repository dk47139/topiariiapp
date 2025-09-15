// adbang.ru
	if(jQuery("body").length) {
		jQuery('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><style>center{		clear: both;padding:5px;}</style>').insertAfter(jQuery("body"));
	}
 

var count = jQuery('.entry-content > p').length;
//считаем середины абзацев
var sered=Math.floor(count/2);

 //alert(sered);
  	

	
 
 
 
 



if(jQuery(window).width()>1700){
	// дектоп
	


 
}else if(jQuery(window).width()<700){
	// мобила 



	// прилипашка снизу мобила
	function closepopup(){
		document.getElementById('leftrekl').style.display='none';
	}
	 
	 
	jQuery('<style> footer{padding-bottom:100px;}</style><div id="leftrekl" style="position:fixed; bottom:0; width:100%; background:#fff;z-index: 999999;"><span class="closel" onclick="closepopup()" title="Закрыть"></span> <center><div id="yandex_rtb_R-A-648300-1" style="width: 100%;    height: 100%;    position: relative;    background: rgba(255, 255, 255, 0);    clear: both;"></div></center></div> <style type="text/css"> .closel{display: block; box-sizing: content-box; position: absolute; top: 0px; left: 0px; width: 32px; height: 32px; z-index: 999999; cursor: pointer; background-color: #000; text-decoration: none; border: none; box-shadow: none!important; opacity:1; } .closel::after { transform: rotate(-45deg); } .closel::before { transform: rotate(45deg); } .closel::before,.closel::after { content: \'\'; position: absolute; height: 2px; width: 100%; top: 50%; left: 0; margin-top: -1px; background: #fff; } </style>').insertAfter('body');
	  
    (function(w, d, n, s, t) {  
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "R-A-648300-1",
                renderTo: "yandex_rtb_R-A-648300-1",
                async: true
            });  
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
    })(this, this.document, "yandexContextAsyncCallbacks");
	
	// второй раз
	var niz_pop=0;
 	jQuery(window).scroll(function() {
		if (jQuery(document).scrollTop()  > jQuery(document).height() / 2 && niz_pop==0)
		{
			document.getElementById('leftrekl').style.display='';
			niz_pop=1;
			
			(function(w, d, n, s, t) {  
				w[n] = w[n] || [];
				w[n].push(function() {
					Ya.Context.AdvManager.render({
						blockId: "R-A-648300-2",
						renderTo: "yandex_rtb_R-A-648300-1",
						async: true
					});  
				});
				t = d.getElementsByTagName("script")[0];
				s = d.createElement("script");
				s.type = "text/javascript";
				s.src = "//an.yandex.ru/system/context.js";
				s.async = true;
				t.parentNode.insertBefore(s, t);
			})(this, this.document, "yandexContextAsyncCallbacks");
	
		}
	});

}