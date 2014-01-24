function resizeWindow(evt) {
    var updateInfo = {
        width: parseInt(this.dataset.width),
        height: parseInt(this.dataset.height),
        state: 'normal'
    };

    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, updateInfo);
    window.close();
}

var menuitems = document.querySelectorAll('.menu li a');
for (var i = 0; i < menuitems.length; i++) {
    var menuitem = menuitems[i];
    menuitem.addEventListener('click', resizeWindow, false);
}
