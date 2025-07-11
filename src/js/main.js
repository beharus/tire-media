import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { Fancybox } from '@fancyapps/ui';
import AOS from 'aos';
import 'aos/dist/aos.css';

// HEADER STARTS
document.addEventListener('DOMContentLoaded', () => {
    const popupWrapper = document.getElementById('project-popup-wrapper');
    const popup = document.getElementById('project-popup');
    const overlay = document.getElementById('project-overlay');
    const header = document.querySelector('.sticky-header');

    const openPopup = () => {
        popupWrapper.classList.remove('hidden');
        header?.classList.add('header-static');
        setTimeout(() => {
            popup.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0');
        }, 10);
    };

    const closePopup = () => {
        header?.classList.remove('header-static');
        popup.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            popupWrapper.classList.add('hidden');
        }, 300);
    };

    // ✅ All open buttons
    document.querySelectorAll('[data-popup="project"]').forEach(btn => {
        btn.addEventListener('click', openPopup);
    });

    // ❌ Remove this single button logic
    // const openBtn = document.getElementById('open-project-popup');
    // openBtn?.addEventListener('click', openPopup);

    document.getElementById('project-close')?.addEventListener('click', closePopup);
    overlay?.addEventListener('click', closePopup);

    // Sections
    const formSection = document.querySelector('#project-popup form');
    const errorSection = document.getElementById('project-popup-error');
    const successSection = document.getElementById('project-popup-success');
    const submitBtn = document.getElementById('project-submit');

    const showSection = (sectionToShow) => {
        [formSection, errorSection, successSection].forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('flex');
        });

        sectionToShow.classList.remove('hidden');
        if (sectionToShow === errorSection || sectionToShow === successSection) {
            sectionToShow.classList.add('flex');
        }
    };

    submitBtn?.addEventListener('click', (e) => {
        e.preventDefault();

        const nameInput = formSection.querySelector('input[placeholder="Иванов Иван"]');
        const contactInput = formSection.querySelector('input[placeholder="Почта, телефон или мессенджер"]');
        const projectTextarea = formSection.querySelector('textarea');
        const consentCheckbox = formSection.querySelector('#project-consent');

        [nameInput, contactInput, projectTextarea].forEach(el => el.classList.remove('border-red-500'));
        consentCheckbox.classList.remove('outline-red-500', 'ring-2', 'ring-red-500');

        let hasError = false;

        if (!nameInput.value.trim()) {
            nameInput.classList.add('border-red-500');
            hasError = true;
        }
        if (!contactInput.value.trim()) {
            contactInput.classList.add('border-red-500');
            hasError = true;
        }
        if (!projectTextarea.value.trim()) {
            projectTextarea.classList.add('border-red-500');
            hasError = true;
        }
        if (!consentCheckbox.checked) {
            consentCheckbox.classList.add('outline-red-500', 'ring-2', 'ring-red-500');
            hasError = true;
        }

        if (hasError) return;

        // Simulate submission
        const isSuccess = Math.random() > 0.3;

        nameInput.value = '';
        contactInput.value = '';
        projectTextarea.value = '';
        consentCheckbox.checked = false;

        showSection(isSuccess ? successSection : errorSection);
    });

    errorSection?.querySelector('button')?.addEventListener('click', () => {
        showSection(formSection);
    });

    successSection?.querySelector('button')?.addEventListener('click', () => {
        closePopup();
        showSection(formSection);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('menu-toggle');
    const menuWrapper = document.getElementById('mobile-menu-wrapper');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    const menuText = document.getElementById('menu-text');
    const menuIcon = document.getElementById('menu-icon');

    let isOpen = false;

    const openMenu = () => {
        menuWrapper.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('translate-x-full');
            overlay.classList.remove('opacity-0');
        }, 10);

        menuText.textContent = 'Закрыть';
        menuIcon.src = '/main-assets/Close.svg'; // или замените на подходящую иконку
        isOpen = true;
    };

    const closeMenu = () => {
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => {
            menuWrapper.classList.add('hidden');
        }, 300);

        menuText.textContent = 'Меню';
        menuIcon.src = '/main-assets/Menu.svg';
        isOpen = false;
    };

    toggleBtn.addEventListener('click', () => {
        isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);
});
const header = document.querySelector('.sticky-header');
let lastScroll = window.scrollY;
let isPopupOpen = false; // <== Новый флаг

function handleHeaderScroll() {
    const currentScroll = window.scrollY;
    const isDesktop = window.innerWidth >= 1280;

    if (isPopupOpen) return; // <== При открытом попапе — ничего не делаем

    if (isDesktop) {
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.backgroundColor = 'white';
        }
    } else {
        header.style.transform = 'none';
    }

    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('resize', handleHeaderScroll);

// DROPDOWN
const dropdowns = document.querySelectorAll('.dropdown-wrapper');

dropdowns.forEach(wrapper => {
    const content = wrapper.querySelector('.dropdown-content');

    wrapper.addEventListener('mouseenter', () => {
        // Закрываем все, кроме текущего
        dropdowns.forEach(w => {
            if (w !== wrapper) {
                w.classList.remove('open');
                w.querySelector('.dropdown-content').classList.remove('opacity-100', 'visible');
                w.querySelector('.dropdown-content').classList.add('opacity-0', 'invisible');
            }
        });

        wrapper.classList.add('open');
        content.classList.remove('opacity-0', 'invisible');
        content.classList.add('opacity-100', 'visible');
    });

    wrapper.addEventListener('mouseleave', () => {
        wrapper.classList.remove('open');
        content.classList.remove('opacity-100', 'visible');
        content.classList.add('opacity-0', 'invisible');
    });
});

// ❌ Удаляем клик вне, т.к. теперь всё на hover
// document.addEventListener('click', ...);

//HEADER ENDS


// BLOG STARTS
const blogSwiper = new Swiper('.blog-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
    loop: false,
});
// BLOG ENDS

// CASES STARTS
document.querySelectorAll('.hover-part').forEach(card => {
    const floatingBtn = card.querySelector('.floating-btn');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        floatingBtn.style.left = `${x}px`;
        floatingBtn.style.top = `${y}px`;
    });

    card.addEventListener('mouseenter', () => {
        floatingBtn.classList.remove('opacity-0');
        floatingBtn.classList.add('opacity-100');
    });

    card.addEventListener('mouseleave', () => {
        floatingBtn.classList.add('opacity-0');
        floatingBtn.classList.remove('opacity-100');
    });
});
// CASES ENDS


// CONTACTS STARTS
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form.contacts');

    forms.forEach(form => {
        const successPopup = document.getElementById('audit-success');
        const errorPopup = document.getElementById('audit-error');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form.querySelector('input[placeholder*="Иванов Иван"]').value.trim();
            const contact = form.querySelector('input[placeholder*="Почта"]').value.trim();
            const description = form.querySelector('textarea').value.trim();
            const consent = form.querySelector('#consent').checked;

            const directions = [...form.querySelectorAll('button[type="button"]')];
            const hasDirections = directions.length > 0;
            const isDirectionSelected = hasDirections
                ? directions.some(btn => btn.classList.contains('bg-black'))
                : true; // if no directions, skip validation

            const isValid = name && contact && description && consent && isDirectionSelected;

            if (!isValid) {
                if (errorPopup) errorPopup.classList.remove('hidden');
                return;
            }

            // Очистка формы
            form.reset();
            if (hasDirections) {
                directions.forEach(btn => btn.classList.remove('bg-black', 'text-white'));
            }

            if (successPopup) successPopup.classList.remove('hidden');
        });

        // При клике по кнопке выбора направления — выделяем её
        form.querySelectorAll('button[type="button"]').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('bg-black');
                btn.classList.toggle('text-white');
            });
        });
    });
});
// CONTACTS ENDS

// FOOTER STARTS
document.querySelectorAll('[data-dropdown]').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('img');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});
// FOOTER ENDS


// AOS ANIMATIONS STARTS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});
// AOS ANIMATIONS ENDS


// USERS ОТЗЫВА STARTS
new Swiper('.testimonial-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
        el: '.testimonial-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// USERS ОТЗЫВА ENDS

// Taiwlind Slider/TEAM STARTS
const sliders = document.querySelectorAll('.overflow-x-auto');
document.addEventListener('DOMContentLoaded', function() {
    const teamSwiper = new Swiper('.teamSwiper', {
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 24,
        grabCursor: true,
        resistance: true,
        resistanceRatio: 0.5,
        breakpoints: {
            // When window width is >= 768px
            768: {
                enabled: false // Disable swiper on desktop
            }
        },
        // Custom effect for partial visibility
        on: {
            init: function() {
                this.slides.forEach(slide => {
                    if (!slide.classList.contains('swiper-slide-active') &&
                        !slide.classList.contains('swiper-slide-next') &&
                        !slide.classList.contains('swiper-slide-prev')) {
                    }
                });
            },
            slideChange: function() {
                this.slides.forEach(slide => {
                    if (!slide.classList.contains('swiper-slide-active') &&
                        !slide.classList.contains('swiper-slide-next') &&
                        !slide.classList.contains('swiper-slide-prev')) {
                    } else {
                        slide.style.opacity = '1';
                        slide.style.transform = 'scale(1)';
                    }
                });
            }
        }
    });

    // Re-init swiper if window is resized from mobile to desktop and vice versa
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && teamSwiper.enabled) {
            teamSwiper.disable();
        } else if (window.innerWidth < 768 && !teamSwiper.enabled) {
            teamSwiper.enable();
        }
    });
});
// Taiwlind Slider/TEAM ENDS

// PDF SLIDER STARTS
Fancybox.bind('[data-fancybox="testimonials"]', {
    animated: true,
    showClass: "fancybox-zoomIn",
    hideClass: "fancybox-zoomOut",
    dragToClose: false,
    Thumbs: false,
    Toolbar: {
        display: ["close"],
    },
});
// PDF SLIDER ENDS

//DROPDOWN STARTS
    document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.closest('div').nextElementSibling;
        const isOpen = content.classList.contains('max-h-[2000px]');

        if (isOpen) {
            content.classList.remove('max-h-[2000px]');
            content.classList.add('max-h-0');
            btn.textContent = '+';
        } else {
            content.classList.remove('max-h-0');
            content.classList.add('max-h-[2000px]');
            btn.textContent = '−';
        }
    });
});
//DROPDOWN STARTS


// awars logic
const awards = document.querySelectorAll(".awards");
awards.forEach((award) => {
    const btn = award.querySelector(".show-more-awards"); // <-- fixed here
    const hiddenAwards = award.querySelectorAll(".hidden-awards");

    btn.addEventListener("click", () => {
        const isHidden = hiddenAwards[0].classList.contains("hidden");

        hiddenAwards.forEach((item) => {
            item.classList.toggle("hidden");
        });

        btn.textContent = isHidden ? "Скрыть награды" : "Все награды";
    });
});

// Slider for blog article
const track = document.querySelector('#slider-tracks');

if (track) {
    const total = track.children.length;
    const counter = document.getElementById('counter');
    let current = 0;

    function updateSlider() {
        track.style.transform = `translateX(-${current * 100}%)`;
        counter.innerHTML = `<span class="text-black">${current + 1}</span> / ${total}`;
    }

    document.getElementById('prev-btn').onclick = () => {
        console.log(true)
        current = (current - 1 + total) % total;
        updateSlider();
    };
    document.getElementById('next-btn').onclick = () => {
        current = (current + 1) % total;
        updateSlider();
    };

    updateSlider();
}


// Cookies

const cookiesPopup = document.getElementById("cookies");
const acceptBtn = document.getElementById("cookie-accept");

// Show popup with animation after delay
setTimeout(() => {
    cookiesPopup.classList.remove("translate-y-full", "opacity-0");
    cookiesPopup.classList.add("translate-y-0", "opacity-100");
}, 1000); // 1 second delay

// Hide popup on accept
acceptBtn.addEventListener("click", () => {
    cookiesPopup.classList.remove("translate-y-0", "opacity-100");
    cookiesPopup.classList.add("translate-y-full", "opacity-0");

    // Optional: store in localStorage to remember consent
    localStorage.setItem("cookiesAccepted", "true");
});

// Optional: check if already accepted
if (localStorage.getItem("cookiesAccepted") === "true") {
    cookiesPopup.style.display = "none";
}
