function cbF(e) {
    e.returnValue = "Can you leave this page?";
}
window.onbeforeunload = cbF;