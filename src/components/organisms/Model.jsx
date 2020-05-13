import React, { useRef } from "react";
import * as THREE from "three";
//import ObjectModel from 'react-three-renderer-objects';
//import BodyModel from "../../objects/Pelvic-Ref-001.obj";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import OBJLoader from "three-obj-loader";

class Mode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'lol': 9
    }

    }


  componentDidMount() {
    const width = window.innerWidth;
     const height = window.innerHeight;
     const scene = new THREE.Scene();
     this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 10);
     this.camera.position.z = 8;
     this.camera.position.y = 5;

     // render
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#263238");
    this.renderer.setSize(width, height);

    this.mount.appendChild(this.renderer.domElement);
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshBasicMaterial({
      color: "#0F0",
      wireframe: true
    });

    this.cube = new THREE.Mesh(geometry, material);
    scene.add(this.cube)

    // OrbitControls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);

      //LIGHTS
     var lights = [];
     lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
     lights[1] = new THREE.PointLight(0xffffff, 1, 0);
     lights[2] = new THREE.PointLight(0xffffff, 1, 0);
     lights[0].position.set(0, 200, 0);
     lights[1].position.set(100, 200, 100);
     lights[2].position.set(-100, -200, -100);
     scene.add(lights[0]);
     scene.add(lights[1]);
     scene.add(lights[2]);

    // Load object

    const x = OBJLoader(THREE);
    const y = new THREE.OBJLoader();

    y.setPath( '' );
        console.log(y.load)
    y.load(

      // resource URL
    	'/Pelvic-Ref-001.obj',
    	// called when resource is loaded
    	function ( object ) {

        // Positioning
        let freedomMesh = object;
        freedomMesh.position.setY(3); //or  this
        freedomMesh.scale.set(0.02, 0.02, 0.02);
    		scene.add(freedomMesh);
        console.log(object)

    	},

    	// called when loading is in progresses
    	function ( xhr ) {

    		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    	},
    	// called when loading has errors
    	function ( error ) {

    		console.log( 'An error happened' );

    	}
    )
  }

  componentWillUnmount() {
     this.stop();
     this.mount.removeChild(this.renderer.domElement);
   }

  render() {
    return (
     <div
       style={{ width: "800px", height: "800px" }}
       ref={mount => {
         this.mount = mount;
       }}>

       </div>
  );
}


}

export default Mode;
