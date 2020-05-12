import React, { useRef, Suspense } from "react"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { Loader, Scene } from "three";
import ModelTest from "../../models/Duck"
import Test from "../atoms/Test.jsx"
extend({ OrbitControls })

//3d view model
const Mode = () => {
  const radiansX = (0 * Math.PI) / 180
  const radiansY = (0 * Math.PI) / 180
  const radiansZ = (0 * Math.PI) / 180

  // const material = new THREE.MeshBasicMaterial({color:0x00ff00})


  //controls
  const Controls = () => {
    const controls = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
      controls.current.update();
    });

    return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
  };

  // const Lights = () => {
  //   let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30,100%,75%)'),1.0)
  //   keyLight.position.set(-100, 0, 100)

  //   let FillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'))
  //   FillLight.position.set(100, 0, 100)
  // }

  return (
    <div>
      <Canvas className="model">
    
        <mesh rotation={[radiansX, radiansY, radiansZ]}>
          <Controls />
          <Suspense fallback={<Test />}>
            <ModelTest />
          </Suspense>
           {/* <boxBufferGeometry
            rotation={[radiansX, radiansY, radiansZ]}
            attach="geometry"
            args={[3, 3, 3]}
          /> 
    
          <meshBasicMaterial wireframe attach="material" color="black" />  */}
        </mesh>
      </Canvas>
    </div>
  );
}

export default Mode