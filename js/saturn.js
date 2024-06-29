import * as THREE from 'https://unpkg.com/three/build/three.module.js';



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

const geometry = new THREE.TorusGeometry(13,1,2,100)
const material = new THREE.MeshBasicMaterial({color: 0xFF6347});
const torus = new THREE.Mesh(geometry,material);
torus.translateY(-5);
scene.add(torus)

const geometry2 = new THREE.SphereGeometry( 10, 16, 8 ); 
const material2 = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe:true } ); 
const sphere = new THREE.Mesh( geometry2, material2 ); scene.add( sphere );
sphere.translateY(-5);
scene.add(sphere)


window.addEventListener( 'resize', onWindowResize, false );

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

  
  

  renderer.render(scene,camera);

}
animate()

console.log("hello")