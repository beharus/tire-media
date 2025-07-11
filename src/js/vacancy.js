
//Vacancies popup
// Popup logic
const popupWrapper = document.getElementById("vacancy-popup-wrapper");
const overlay = document.getElementById("vacancy-overlay");
const popup = document.getElementById("vacancy-popup");
const openButtons = document.querySelectorAll(".toggle-content .open-btn");
const closeBtn = document.getElementById("vacancy-close");

// Popups inside form
const form = document.querySelector("#vacancy-popup form");
const success = document.getElementById("vacancy-popup-success");
const error = document.getElementById("vacancy-popup-error");

// Inputs
const nameInput = form.querySelector('input[placeholder*="Иванов Иван"]');
const contactInput = form.querySelector('input[placeholder*="Почта"]');
const textInput = form.querySelector('textarea');
const fileInput = form.querySelector('input[type="file"]');
const checkInput = document.getElementById("vacancy-consent");
const fileNameDisplay = document.getElementById("file-name");
const fileLabel = document.getElementById("file-upload-label");


fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileNameDisplay.textContent = `Вы выбрали файл: ${file.name.slice(0, 15)}....`;
    } else {
        fileNameDisplay.textContent = "";
    }
});


// Open popup
openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        popupWrapper.classList.remove("hidden");
        setTimeout(() => {
            overlay.classList.add("opacity-100");
            popup.classList.remove("translate-x-full");
        }, 10);
    });
});

// Close popup function
function closePopup() {
    overlay.classList.remove("opacity-100");
    popup.classList.add("translate-x-full");
    setTimeout(() => {
        popupWrapper.classList.add("hidden");
        resetPopup();
    }, 300);
}

// Reset form and popup states
function resetPopup() {
    form.classList.remove("hidden");
    success.classList.add("hidden");
    error.classList.add("hidden");
    form.reset();

    [nameInput, contactInput, textInput].forEach((el) =>
        el.classList.remove("border-red-500")
    );
    checkInput.classList.remove("ring-2", "ring-red-500");
}

// Close on background or close button
overlay.addEventListener("click", closePopup);
closeBtn.addEventListener("click", closePopup);

// Submit with validation
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let hasError = false;

    if (fileInput.files.length === 0) {
        fileLabel.classList.add("border-red-500", "text-red-500");
        hasError = true;
    } else {
        fileLabel.classList.remove("border-red-500", "text-red-500");
    }

    // Validate Name
    if (nameInput.value.trim() === "") {
        nameInput.classList.add("border-red-500");
        hasError = true;
    } else {
        nameInput.classList.remove("border-red-500");
    }

    // Validate Contact
    if (contactInput.value.trim() === "") {
        contactInput.classList.add("border-red-500");
        hasError = true;
    } else {
        contactInput.classList.remove("border-red-500");
    }

    // Validate "О себе"
    if (textInput.value.trim() === "") {
        textInput.classList.add("border-red-500");
        hasError = true;
    } else {
        textInput.classList.remove("border-red-500");
    }

    // Validate consent checkbox
    if (!checkInput.checked) {
        checkInput.classList.add("ring-2", "ring-red-500");
        hasError = true;
    } else {
        checkInput.classList.remove("ring-2", "ring-red-500");
    }

    // Optional: validate file
    if (fileInput.files.length === 0) {
        fileInput.classList.add("border-red-500");
        hasError = true;
    } else {
        fileInput.classList.remove("border-red-500");
    }

    if (hasError) return;

    // Simulate success or failure
    const simulateSuccess = true;

    form.classList.add("hidden");

    if (simulateSuccess) {
        success.classList.remove("hidden");
    } else {
        error.classList.remove("hidden");
    }
});

// Buttons in success or error popup
document
    .querySelectorAll("#vacancy-popup-success button, #vacancy-popup-error button")
    .forEach((btn) => {
        btn.addEventListener("click", () => {
            const isRetry = btn.textContent.includes("Повторить");

            if (isRetry) {
                // Show form again
                success.classList.add("hidden");
                error.classList.add("hidden");
                form.classList.remove("hidden");
            } else {
                // Close entire popup
                closePopup();
            }
        });
    });


