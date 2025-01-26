document.addEventListener("DOMContentLoaded", function () {
    // 檢測是否為行動裝置
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    // 遍歷所有的超連結
    document.querySelectorAll(".dynamic-link").forEach(link => {
        if (isMobile) {
            // 行動裝置：直接打開連結
            link.setAttribute("target", "_self");
        } else {
            // 桌面設備：新分頁打開連結
            link.setAttribute("target", "_blank");
        }
    });
});