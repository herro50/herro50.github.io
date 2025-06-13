// 等待页面完全加载
window.addEventListener('DOMContentLoaded', function() {
    
    // 获取按钮元素
    const myButton = document.getElementById('myButton');
    
    // 添加点击事件
    myButton.addEventListener('click', function() {
        alert('你好！这是我的第一个JavaScript交互！');
        
        // 改变按钮文字
        myButton.textContent = '你点击过了！';
        
        // 改变按钮颜色
        myButton.style.backgroundColor = '#ff9800';
    });
    
    // 额外效果：当鼠标移到特性盒子上时
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    featureBoxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s';
        });
        
        box.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});