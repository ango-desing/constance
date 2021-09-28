$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() > 1) {
            $('#logo-constance').attr('src','https://ucarecdn.com/5076becc-3668-4344-b8be-d472d4b0f000/constancelogo2.png')
        }
        if($(this).scrollTop() < 1) {        
         $('#logo-constance').attr('src','https://ucarecdn.com/b3d6765f-e9c7-4fe3-b970-897f840af64e/constancelogo1.png');   
        }
    });
});