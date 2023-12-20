for (const wrapper of document.getElementsByClassName("Soundcloud")) {
  const link = wrapper.firstElementChild;
  const iframe = document.createElement("iframe");
  iframe.className = "Soundcloud-iframe";
  iframe.setAttribute("src", `https://w.soundcloud.com/player/?url=${link.getAttribute('href')}&show_comments=false`);
  const player = document.createElement("div");
  player.className = "Soundcloud-player";
  player.setAttribute("tabindex", "0");
  player.textContent = 'Load SoundCloud player';
  player.onclick = () => wrapper.replaceChildren(iframe);
  player.onkeydown = e => { if (e.code == "Enter") wrapper.replaceChildren(iframe) };
  wrapper.replaceChild(player, link);
};
