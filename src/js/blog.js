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