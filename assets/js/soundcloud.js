for (const wrapper of document.getElementsByClassName("Soundcloud")) {
  const link = wrapper.firstElementChild;
  const iframe = document.createElement("iframe");
  iframe.className = "Soundcloud-iframe";
  iframe.setAttribute("src", `https://w.soundcloud.com/player/?url=${link.getAttribute('href')}&show_comments=false`);
  const button = document.createElement("button");
  button.className = "Soundcloud-player";
  button.textContent = 'Load SoundCloud player';
  button.onclick = () => wrapper.replaceChildren(iframe);
  wrapper.replaceChild(button, link);
};
