var XULPeriodicTable = {
    url: "chrome://periodictable/content/top.xul",
    windowID: "periodictable:window",
    parameters: "chrome,titlebar,toolbar,resizable,dialog=no",
    openWindow: function () {
        toOpenWindowByType(this.windowID, this.url, this.parameters);
    }
};
