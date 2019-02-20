for (const wrapper of document.querySelectorAll(".soundcloud")) {
  const button = document.createElement("span")
  button.style.cursor = "pointer"
  button.innerHTML = "Show player"
  button.onclick = function () {
    const id = wrapper.getAttribute("data-id")
    wrapper.innerHTML = `<iframe style="border: none;" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&show_comments=false" width="100%" height="166"></iframe>`
  }
  wrapper.appendChild(button)
  wrapper.insertAdjacentHTML("beforeend",' (<a href="https://soundcloud.com/pages/cookies">cookie policy</a>)')
}