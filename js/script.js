// 在页面加载完成后执行
window.onload = function() {
	// 获取所有图片元素
	var images = document.querySelectorAll('.gallery img');
	// 遍历图片元素
	for (var i = 0; i < images.length; i++) {
		// 添加点击事件
		images[i].addEventListener('click', function() {
			// 创建一个模态框
			var modal = document.createElement('div');
			modal.classList.add('modal');
			// 创建一个图片元素
			var modalImg = document.createElement('img');
			modalImg.src = this.src;
			// 添加图片元素到模态框中
			modal.appendChild(modalImg);
			// 添加模态框到页面中
			document.body.appendChild(modal);
			// 添加点击事件，关闭模态框
			modal.addEventListener('click', function() {
				document.body.removeChild(modal);
			});
		});
	}
};
