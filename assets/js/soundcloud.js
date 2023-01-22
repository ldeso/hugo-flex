for (const wrapper of document.getElementsByClassName("Soundcloud")) {
  const iframe = document.createElement("iframe");
  iframe.className = "Soundcloud-iframe";
  iframe.setAttribute("src", `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${wrapper.getAttribute('data-id')}&show_comments=false`);
  const link = document.createElement("a");
  link.setAttribute("href", "https://soundcloud.com/pages/cookies");
  link.textContent = "cookie policy";
  link.onclick = e => e.stopPropagation();
  link.onkeydown = e => e.stopPropagation();
  const player = document.createElement("div");
  player.className = "Soundcloud-player";
  player.setAttribute("tabindex", "0");
  player.textContent = 'Load player';
  player.appendChild(link);
  player.onclick = () => wrapper.replaceChild(iframe, player);
  player.onkeydown = e => { if (e.code == "Enter") wrapper.replaceChild(iframe, player) };
  wrapper.appendChild(player);
};
