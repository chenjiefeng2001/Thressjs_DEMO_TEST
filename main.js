import { setupScene } from './src/scene.js';
import { loadModel } from './src/modelLoader.js';

// 初始化场景并获取对象
const { scene, camera, renderer, controls } = setupScene();

// 加载模型
loadModel(scene);

// 动画循环
function animate() {
    requestAnimationFrame(animate);

    // 更新控制器（Damping需要）
    controls.update();

    // 渲染
    renderer.render(scene, camera);
}

animate();