import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {
  color: 0xFF8844, 
  // map: texture,
  } );
const loader = new THREE.TextureLoader();
const texture = loader.load( 'kristin-o-karlsen-BfqbYyfo56w-unsplash.jpg' );
texture.colorSpace = THREE.SRGBColorSpace;
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;





const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set(0, 0, 0);
controls.update();

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

function animate() {
    renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    
    cube.rotation.y += 0.01;
}
renderer.setAnimationLoop( animate )
