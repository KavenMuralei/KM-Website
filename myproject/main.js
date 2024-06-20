import './styles.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(windows.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

const geometry = new THREE.RingGeometry( 1, 5, 32 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wifeframe:true } );
const mesh = new THREE.Mesh( geometry, material ); scene.add( mesh );