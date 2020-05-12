import * as THREE from 'three'
import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader, extend} from "react-three-fiber";

export default function ModelTest(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, "/PelvisModelsEct.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.09, 0.09, 0.09]}>
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_0'].geometry} />
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_1'].geometry} />
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_2'].geometry} />
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_3'].geometry} />
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_4'].geometry} />
      </group>
    </group>
  )
}