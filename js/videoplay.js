var playButton = document.getElementById("playButton");
var videoOverlay = document.getElementById("videoOverlay");

playButton.addEventListener("click", function (event) {
  event.stopPropagation(); // 防止点击按钮时触发下面的全局点击事件
  videoOverlay.style.display = "flex";
});

videoOverlay.addEventListener("click", function () {
  videoOverlay.style.display = "none";
  // 获取嵌入式 iframe，并停止播放
  var iframe = videoOverlay.querySelector("iframe");
  iframe.src = iframe.src; // 刷新 iframe，停止播放
});

// 全局点击事件，用于关闭视频播放器
document.addEventListener("click", function (event) {
  // 如果点击的不是视频播放区域，则关闭视频播放器
  if (!videoOverlay.contains(event.target) && event.target !== playButton) {
    videoOverlay.style.display = "none";
    // 获取嵌入式 iframe，并停止播放
    var iframe = videoOverlay.querySelector("iframe");
    iframe.src = iframe.src; // 刷新 iframe，停止播放
  }
});
