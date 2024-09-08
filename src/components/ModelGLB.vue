<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Loader from "./Loader.vue";

const container = ref<HTMLDivElement | null>(null);
const loading = ref<boolean>(true); // Inicialmente en true

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let controls: OrbitControls | undefined;
let object: THREE.Object3D | undefined;
const loader = new GLTFLoader();

const init = () => {
  // Create the scene
  scene = new THREE.Scene();

  // Create the camera
  camera = new THREE.PerspectiveCamera(12, window.innerWidth / window.innerHeight, 0.1, 1000);

  // Create the renderer
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.shadowMap.enabled = true; // Activar sombras
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Sombras suaves

  if (container.value) {
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  }

  // Luz ambiental para iluminación base
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.6); // Color blanco, intensidad 0.6
  scene.add(ambientLight);

  // Luz direccional para simular la luz del sol
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(50, 100, -50);
  directionalLight.castShadow = true; // Activar sombras
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  scene.add(directionalLight);

  // Luz puntual opcional para iluminar zonas específicas (ej. frente del edificio)
  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  pointLight.position.set(0, 100, 100); // Ajustar la posición cerca del edificio
  scene.add(pointLight);

  // Load the 3D model
  loader.load(
    `models/main.glb`,
    (gltf) => {
      object = gltf.scene;
      object.scale.set(0.9, 0.4, 1);
      const box = new THREE.Box3().setFromObject(object);
      const center = box.getCenter(new THREE.Vector3());

      object.position.sub(center);

      // Hacer que el modelo proyecte y reciba sombras
      object.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;  // Proyectar sombras
          child.receiveShadow = true;  // Recibir sombras
        }
      });

      scene.add(object);
      loading.value = false;
    },
    undefined,
    (error) => {
      console.error('An error happened', error);
      loading.value = false;
    }
  );

  animate();

  if (container.value) {
    container.value.appendChild(renderer.domElement);
  }
};

function resizeRenderer() {
  if (container.value) {
    renderer.setSize(container.value.clientWidth, container.value.clientHeight);
  }
}

function animate() {
  requestAnimationFrame(animate);
  
  const time = Date.now() * 0.0001; 
  const radius = 80; 
  camera.position.x = radius * Math.cos(time); 
  camera.position.z = radius * Math.sin(time);
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

onMounted(() => {
  init();

  window.addEventListener('resize', resizeRenderer);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeRenderer);
});
</script>

<template>
  <div ref="container" id="container3D">
    <div class="containerLoader" v-if="loading">
      <Loader/>
    </div>
  </div>
</template>

<style scoped>
#container3D {
  width: 40vw;
  height: 40vw; /* Ajustar la altura para que sea igual al ancho */
  position: relative; /* Ajustar según el diseño */
}

.containerLoader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centrar el loader */
}
</style>
