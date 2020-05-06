import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });
function Mode() {
  const radiansX = (0 * Math.PI) / 180;
  const radiansY = (0 * Math.PI) / 180;
  const radiansZ = (0 * Math.PI) / 180;

  const Controls = () => {
    const controls = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
      controls.current.update();
    });

    return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
  };

  return (
    <div>
      <Canvas className="model">
        <mesh rotation={[radiansX, radiansY, radiansZ]}> 
          <Controls />

          <boxBufferGeometry
            rotation={[radiansX, radiansY, radiansZ]}
            attach="geometry"
            args={[3, 3, 3]}
          />

          <meshBasicMaterial wireframe attach="material" color="black" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Mode;