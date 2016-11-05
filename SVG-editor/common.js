$(document).ready(() => {
    background_bg($("#editor").val());
    $(".editor").draggable();
    $("#editor").keyup(() => {
        background_bg($("#editor").val());
    });
    });
function background_bg(string) {
    while ((string.indexOf("<")!=-1) || (string.indexOf(">")!=-1) || (string.indexOf("\"")!=-1) || (string.indexOf("#")!=-1)) {
        string = string.replace("<", "%3C");
        string = string.replace(">", "%3E");
        string = string.replace("\"", "'");
        string = string.replace("#", "%23");
        string = string.replace(/\s{2,}/g, " ");
    }
    background = "background-image: url(\"data:image/svg+xml,"+string+"\");";
    $('body').attr('style', background);
}