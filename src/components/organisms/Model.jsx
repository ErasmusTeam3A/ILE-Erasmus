import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";

//import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

import * as THREE from "three";
import React3 from "react-three-renderer";

extend({ OrbitControls });
class Mode extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      radiansX: 0,
      radiansY: 0,
      radiansZ: 0,
    }

    this.calculateRadians = this.calculateRadians.bind(this);
    this.Controls = this.Controls.bind(this);
  }

  //this.THREE = THREE;
  //const objLoader = new this.THREE.OBJLoader();

  Controls() {
    const controls = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
      controls.current.update();
    });

    return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
  };

  calculateRadians(){
    const radiansX = (0 * Math.PI) / 180;
    const radiansY = (0 * Math.PI) / 180;
    const radiansZ = (0 * Math.PI) / 180;

    this.setState({ radiansX: radiansX, radiansY: radiansY, radiansZ: radiansZ});
  }

  render() {
  return (
    <div>
      <Canvas className="model">

        <mesh rotation={[this.state.radiansX, this.state.radiansY, this.state.radiansZ]}>

        {/* <Controls /> */}

          <boxBufferGeometry
            rotation={[this.state.radiansX, this.state.radiansY, this.state.radiansZ]}
            attach="geometry"
            args={[3, 3, 3]}> </boxBufferGeometry>
          <meshBasicMaterial wireframe attach="material" color="black" />
          
        </mesh>

      </Canvas>
    </div>
  );
}


}

export default Mode;
