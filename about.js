function replaceText() {
    document.body.innerHTML = document.body.innerHTML.replace(/The/g, 'Replaced');
    document.body.innerHTML = document.body.innerHTML.replace(/the/g, 'replaced');
}

setTimeout(replaceText, 4000);
