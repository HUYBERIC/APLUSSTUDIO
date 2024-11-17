// --- H A M B U R G E R   M E N U --- //

// V A R I A B L E S

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

// F U N C T I O N S

const toggleMenu = () => {
    navLinks.classList.toggle('active');
    if (overlay.classList.contains('hide')) {
        overlay.classList.remove('hide');
        overlay.classList.add('show');
    } else {
        overlay.classList.remove('show');
        overlay.classList.add('hide');
    }

    hamburger.classList.toggle('active');
};

// E V E N T   L I S T E N E R

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);



// --- M O D A L   B O X --- //

// V A R I A B L E S

const contactNow = document.querySelector('.contact-now');
const overlayModal = document.querySelector('.overlayModal')
const modal = document.querySelector(".modal");
const crossBtn = document.querySelector(".closeModal");
const submitBtn = document.querySelector("#submit");
const body = document.querySelector("body");

// F U N C T I O N S

function closeModal() {
    overlayModal.classList.add("hide");
    modal.classList.add("hide");
/*     body.style.overflow = "visible"; */
    body.style.position = "relative";
}

function openModal() {
    overlayModal.classList.remove("hide");
    modal.classList.remove("hide");
/*     body.style.overflow = "hide"; */
    body.style.position = "fixed"
}


// E V E N T   L I S T E N E R

contactNow.addEventListener('click', () => {
    openModal();
});

crossBtn.addEventListener('click', () => {
    closeModal();
});

overlayModal.addEventListener('click', () => {
    closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

submitBtn.addEventListener('click', () => {
    closeModal();
});

// --- S W I P E R   B R A N D --- //

const swiper = new Swiper('.brand-swiper .swiper', {
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    allowTouchMove: true,

    loopedSlides: 8,

    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: false,
        pauseOnMouseEnter: false,
    },

    speed: 5000,

    breakpoints: {
        768: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// --- S W I P E R   P I C T U R E S --- //

const swiperPictures = new Swiper('.second-swiper .swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 10,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            updateActiveImage(this.realIndex);
        },
    },
});

// L I N K   P I C - P A G I N A T I O N 

function updateActiveImage(activeIndex) {
    const images = document.querySelectorAll('.swiper-img .img');
        images.forEach((image) => {
            image.classList.add('hide');
        });
        images[activeIndex].classList.remove('hide');
}
updateActiveImage(swiperPictures.realIndex);

// B O U T T O N - C O N T A C T   N O W 

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const contactButton = document.getElementById('contact-btn');
const emailInputMob = document.getElementById('contact-mob');
const emailInputTab = document.getElementById('contact-tab');

function handleContactClick() {
    const email = window.innerWidth >= 768 ? emailInputTab.value : emailInputMob.value;

    if (isValidEmail(email)) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Subscription successful",
            showConfirmButton: true,
            timer: 1500
        });
        console.log('Email valid:', email);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid email address.",
            footer: '<a href="#">You can retry.</a>'
        });
    }
}

contactButton.addEventListener('click', handleContactClick);

emailInputMob.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleContactClick();
    }
});

emailInputTab.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleContactClick();
    }
});