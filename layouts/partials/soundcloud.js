for (const wrapper of document.querySelectorAll(".soundcloud")) {
  const id = wrapper.getAttribute('data-id');
  wrapper.className = "soundcloud--wrapper";
  wrapper.innerHTML = '<div class="soundcloud--player">Soundcloud player (<a href="https://soundcloud.com/pages/cookies">cookie policy</a>)</div>';
  wrapper.onclick = function () {
    wrapper.innerHTML = `<iframe style="border:none;width:100%;" height="166" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&show_comments=false"></iframe>`
  }
}