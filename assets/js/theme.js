$(document).ready(function(){
    // We added class from Jquery
    $('.sideBarToggler').on('click', function(){
        if($('.sideBar').hasClass('view')){
            $('.sideBar').removeClass('view');
            $('.overlay').removeClass('show');
        } else {
            $('.sideBar').addClass('view');
            $('.overlay').addClass('show');
        }
    });
    $('.overlay, .btnCloser').on('click', function(){
        if($('.sideBar').hasClass('view')){
            $('.sideBar').removeClass('view');
            $('.overlay').removeClass('show');
        } else {
            $('.sideBar').addClass('view');
            $('.overlay').addClass('show');
        }
    });
     $('.drop .dropLink').on('click', function(){
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
        } else {
            $(this).parent().addClass('open');
        }
    });
})