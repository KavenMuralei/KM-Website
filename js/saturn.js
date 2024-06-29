import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#saturn'),
});

var canvas = document.getElementById('saturn');
var heightRatio = 1.5;
canvas.height = canvas.width * heightRatio;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

//Torus geometry
const geometry = new THREE.TorusGeometry(13,1,2,100)
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const torus = new THREE.Mesh(geometry,material);
torus.translateY(-5);
scene.add(torus)

//Sphere geometry
const geometry2 = new THREE.SphereGeometry( 10, 16, 8 ); 
const material2 = new THREE.MeshStandardMaterial( { color: 0xffff00,} ); 
const sphere = new THREE.Mesh( geometry2, material2 ); scene.add( sphere );
sphere.translateY(-5);
scene.add(sphere)

//lighting
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,12,0)

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight, ambientLight)

//light helper
// const lightHelper = new THREE.PointLightHelper(pointLight)
// scene.add(lightHelper)

//orbit control
const controls = new OrbitControls(camera,renderer.domElement)


window.addEventListener( 'resize', onWindowResize, false );
animate()

function onWindowResize() {
				
  camera.aspect = window.innerWidth/ window.innerHeight;

  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x+=0.01;
  torus.rotation.y+=0.005;
  torus.rotation.z+=0.01;

  sphere.rotation.x+=0.01;
  sphere.rotation.y+=0.005;
  sphere.rotation.z+=0.01;

  controls.update();

  renderer.render(scene,camera);

}
