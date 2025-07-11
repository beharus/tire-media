const header = document.querySelector('.transparent-sticky-header');
const borderElements = document.querySelectorAll('.border-toggle'); // use this class on elements with border
let lastScroll = window.scrollY;
let isPopupOpen = false;
let isHeaderColored = false;
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

import '@fancyapps/ui/dist/fancybox/fancybox.css';
import 'aos/dist/aos.css';


document.addEventListener('DOMContentLoaded', () => {
    const popupWrapper = document.getElementById('project-popup-wrapper');
    const popup = document.getElementById('project-popup');
    const overlay = document.getElementById('project-overlay');

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

function handleHeaderScroll() {
    const currentScroll = window.scrollY;
    const isDesktop = window.innerWidth >= 1280;

    if (isPopupOpen) return;

    if (isDesktop) {
        if (currentScroll > lastScroll && currentScroll > 50) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        // Switch to white header with black text and borders
        if (currentScroll > 10 && !isHeaderColored) {
            header.classList.remove('bg-transparent', 'text-white');
            header.classList.add('bg-white', 'text-black');

            borderElements.forEach(el => {
                el.classList.remove('border-white');
                el.classList.add('border-black');
            });

            isHeaderColored = true;
        }
        // Switch back to transparent with white text and borders
        else if (currentScroll <= 10 && isHeaderColored) {
            header.classList.remove('bg-white', 'text-black');
            header.classList.add('bg-transparent', 'text-white');

            borderElements.forEach(el => {
                el.classList.remove('border-black');
                el.classList.add('border-white');
            });

            isHeaderColored = false;
        }
    } else {
        header.style.transform = 'none';
    }

    if (currentScroll > 50) {
        header.style.background = 'white';
        header.style.color = 'black';
    }else{
        header.style.background = 'transparent';
        header.style.color = 'white';
    }

    lastScroll = currentScroll;
}

window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('resize', handleHeaderScroll);


//SLIDER FOR CASES ARTICLE
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.cases-slider', {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 28,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 28
            }
        }
    });
});