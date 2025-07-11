const header = document.querySelector('.transparent-sticky-header');
const borderElements = document.querySelectorAll('.border-toggle'); // use this class on elements with border
let lastScroll = window.scrollY;
let isPopupOpen = false;
let isHeaderColored = false;

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
