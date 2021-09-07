$(function() {
    $('.ds').addClass('all').addClass('scale');
    $('#combo img').addClass('img-responsive');
    var selectedClass = "";
    $(".select-btn>a").click(function(){
    selectedClass = $(this).attr("data-rel");
    $("#combo").fadeTo(100, 0.1);
    $("#combo a").not("."+selectedClass).fadeOut().removeClass('scale');
    setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('scale');
    $("#combo").fadeTo(300, 1);
    }, 300);
    return false;
    });
});