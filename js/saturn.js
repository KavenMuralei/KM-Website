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

camera.position.set(-6, 1.5, 0)

// axes helpers
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

renderer.render(scene,camera);

//Ring geometry
const ringTexture = new THREE.TextureLoader().load('https://i.postimg.cc/zz7Gr430/saturn-rings-top.png');
const geometry = new THREE.RingGeometry(3, 5, 64);
var pos = geometry.attributes.position;
  var v3 = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++){
    v3.fromBufferAttribute(pos, i);
    geometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
  }
const material = new THREE.MeshStandardMaterial({map:ringTexture, side:THREE.DoubleSide,color: 0xffffff,transparent: true,});
const ring = new THREE.Mesh(geometry,material);
ring.position.set(0,-2,0)

ring.rotation.x = -1*Math.PI/3



scene.add(ring)

//Saturn geometry
const saturnTexture = new THREE.TextureLoader().load('./resources/saturn.jpg');
const normalTexture = new THREE.TextureLoader().load('./resources/saturnTexture.jpg');
const geometry2 = new THREE.SphereGeometry( 3, 32, 32 ); 
const material2 = new THREE.MeshStandardMaterial( { map: saturnTexture,} ); 
const sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );
scene.add(sphere)
sphere.position.set(0,-2,0)

//lighting
const pointLight = new THREE.PointLight(0xffffff, 30)
pointLight.castShadow = true;
pointLight.position.set(-5, 5, 10)

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(pointLight)

// light helper
const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

//orbit control
const controls = new OrbitControls(camera,renderer.domElement)


window.addEventListener( 'resize', onWindowResize, false );
animate()


function addStar() {
  const geometry = new THREE.SphereGeometry(0.25,20,20);
  const material = new THREE.MeshBasicMaterial({color:0xffffff})
  const star = new THREE.Mesh(geometry,material);

  const[x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000));

  star.position.set(x,y,z)
  scene.add(star)
}

Array(500).fill().forEach(addStar)




function onWindowResize() {
				
  camera.aspect = window.innerWidth/ window.innerHeight;

  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate(){
  requestAnimationFrame(animate);
  sphere.rotation.x+=0.003;
  sphere.rotation.y+=0.005;


  controls.update();

  renderer.render(scene,camera);

}
