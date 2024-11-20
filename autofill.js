(function go() {
    const fillButton = document.querySelector('.nim_fill_button');
    if (fillButton) {
        fillButton.click();
    } else {
        return;
    }
    const interval = setInterval(() => {
        const nextButton = document.querySelector('.nim_next2_button');

        if (nextButton && nextButton.offsetParent !== null) {
            nextButton.click();
        } else {
            clearInterval(interval);
        }
    }, 10);
})();