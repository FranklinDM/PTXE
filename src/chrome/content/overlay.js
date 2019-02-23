var XULPeriodicTable = {
    url: "chrome://periodictable/content/top.xul",
    windowID: "periodictable:window",
    parameters: "width=640,height=480,chrome,titlebar,toolbar,resizable,centerscreen,dialog=no",
    openWindow: function () {
        toOpenWindowByType(this.windowID, this.url, this.parameters);
    }
};
