function labnolIframe() {
var iframe = document.createElement("iframe");
var embed = "https://www.youtube.com/embed/ID?autoplay=1";
iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("allowfullscreen", "1");
this.parentNode.replaceChild(iframe, this);
}
