$(document).ready(function(){
    $('.modal').modal();
});

$(document).ready(function(){
    $('.tooltipped').tooltip();
});


$(document).ready(function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        'onOpenEnd': initCarouselModal
    });

    function initCarouselModal() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {'fullWidth': true});
        instances[0].set(2);
    }
});

$(document).ready(function(){
    $('.collapsible').collapsible();
  });