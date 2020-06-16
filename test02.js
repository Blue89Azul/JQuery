(function($, window) {
    $(function() {
        
// 課題１
$('h2').remove();

 
// 課題２:alertメソッドで確認。
alert($('#index').text());
// テキストのみが出力（テキストのみ変更できる）
alert($('#index').html());
//htmlタグも出力（htmlタグも解釈して出力できる）


//課題３
$('#index').append('<li>メソッド</li>')


//課題4
$("#index").find('li').each(function() {
    
    alert($(this).text().length);
    
});


//課題5
$("#index").find('li').each(function() {
    
$(this).text().after($(this).html($(this).text().length + "文字"));
    
});

    });
})(jQuery, window);