document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85; // 屏幕滚动到 85% 位置时触发

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('show');
            }
        });
    }

    // 监听滚动事件
    window.addEventListener('scroll', checkVisibility);
    // 页面加载完毕先执行一次，把首屏的节点显示出来
    checkVisibility(); 
});