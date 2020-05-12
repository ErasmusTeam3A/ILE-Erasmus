
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/Duck.glb')
  return (
    <span>
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.01, 0.01, 0.01]}>
        <primitive object={nodes['']} />
        <mesh material={materials['blinn3-fx']} geometry={nodes.LOD3spShape.geometry} />
      </group>
    </group>
    </span>
  )
}
