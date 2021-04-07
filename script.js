var listElm = document.getElementById('infinite-list');

// Detect when scrolled to bottom.
document.addEventListener('scroll', function() {
    var distanceScrolled = document.documentElement.scrollTop;
    if (distanceScrolled + window.innerHeight >= listElm.scrollHeight + listElm.offsetTop) {
        loadMore();
    }
});

var i = 0;
var page = document.querySelector(".page");
var loadMore = function() {
    var clone = page.cloneNode(true);
    var item = clone.querySelectorAll('.item');
    for(var j = 0; j<item.length; j++) {
        var carousel = item[j].querySelector('.carousel');
        carousel.setAttribute('id', carousel.getAttribute('id') + i + j);

        var btnPrev = carousel.querySelector('.carousel-control-prev').getAttribute('data-bs-target');
        carousel.querySelector('.carousel-control-prev').setAttribute('data-bs-target', btnPrev + i + j);

        var btnNext = carousel.querySelector('.carousel-control-next').getAttribute('data-bs-target');
        carousel.querySelector('.carousel-control-next').setAttribute('data-bs-target', btnNext + i + j);
    }
    listElm.appendChild(clone);

    i++;
}