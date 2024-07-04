const inputEl = document.querySelector('#name-input').addEventListener('input', function () {
    const nameInput = document.querySelector('#name-input');
    const nameOutput = document.querySelector('#name-output');
    const trimmedValue = nameInput.value.trim();

    if (trimmedValue === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = trimmedValue;
    }
});