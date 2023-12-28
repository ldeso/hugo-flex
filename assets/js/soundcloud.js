for (const wrapper of document.getElementsByClassName("Soundcloud")) {
  const url = wrapper.firstElementChild.getAttribute('href');
  const iframe = document.createElement("iframe");
  iframe.className = "Soundcloud-iframe";
  iframe.setAttribute("src", `https://w.soundcloud.com/player/?url=${url}&show_comments=false`);
  const button = document.createElement("button");
  button.className = "Soundcloud-box Soundcloud-box--button";
  button.textContent = "Load SoundCloud player";
  button.onclick = () => wrapper.replaceChildren(iframe);
  const policy = document.createElement("a");
  policy.className = "Soundcloud-policy";
  policy.textContent = "(cookie policy)";
  policy.setAttribute("href", "https://soundcloud.com/pages/cookies");
  wrapper.replaceChildren(button, policy);
};
