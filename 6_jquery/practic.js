

// function div11() {
//     $('.div1').attr('style', 'color: orange');
//     $('.div1').attr('style', 'color: yellow');
// }


// $('.box_bg').click(function () { 
//     $('.box_bg').css('backgroundColor', 'orange');
//     // $('.box_bg').css('backgroundColor', 'yellow');
// });

$('.box_bg').click(function() {

    if ('background-color' == 'red') {
        $('.box-bg').toggleClass('bg-orange');
    }
    
    // $(this).css('backgroundColor','orange'); 
    // $(this).css('backgroundColor','yellow'); 
    // console.log($(this));  

});
