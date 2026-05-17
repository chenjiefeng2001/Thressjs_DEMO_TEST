import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadModel(scene) {
    const loader = new GLTFLoader();
    
    // 测试模型 URL
    const modelUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb';

    loader.load(
        modelUrl,
        (gltf) => {
            const model = gltf.scene;
            model.scale.set(2, 2, 2);
            model.position.set(0, 0, 0);
            scene.add(model);
            console.log('Model loaded successfully');
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
            console.error('Error loading model:', error);
        }
    );
}