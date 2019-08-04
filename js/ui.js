$(function(){
    $('#thirdpage .text03 .sent03 .copyT03').on('scroll', function(){
        if( $(this).scrollTop() == 0 ){
            console.log('흰색배경 나타남');
            $('#thirdpage .text03 .sent03 .copyT03').removeClass('scrolled');
        } else {
            console.log('흰색배경 사라짐');
            $('#thirdpage .text03 .sent03 .copyT03').addClass('scrolled');
        }
    });
});