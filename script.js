function callbackFn(event) {
    event.returnValue = "Can you leave this page?";
}

window.onbeforeunload = callbackFn;