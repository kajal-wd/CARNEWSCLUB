

const search_btn = document.querySelector(".search-icon");
const search_div = document.querySelector(".search");
const cross = document.querySelector(".close");

function search_icon() {
    search_div.style.display = "block";
    cross.style.display = "block";
    search_btn.style.display = "none";
};

function cross_icon() {
    search_div.style.display = "none";
    cross.style.display = "none";
    search_btn.style.display = "block";
};


function changeffect(event) {
    let activeSpan = document.querySelector(".active-contact");
    if(activeSpan){
        activeSpan.classList.remove("active-contact");
    }
    let span_tag = event.target;
    let classinput = span_tag.getAttribute("data");
    let spanclass = document.querySelector(`span.${classinput}`);
    spanclass.classList.add("active-contact");
}


$('.owl-carousel1.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-carousel2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.owl-carousel3 .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

const load_div = document.querySelector(".loading");
console.log(load_div);

const loader = () => {
    load_div.classList.add("load-active");
    console.log("hello");
}

setTimeout(loader, 1000);


