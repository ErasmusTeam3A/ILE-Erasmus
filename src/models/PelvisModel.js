

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/pelvisModel.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_0'].geometry} />
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_1'].geometry} />
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_2'].geometry} />
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_3'].geometry} />
        <mesh material={materials.boneMaterial} geometry={nodes['Pelvis.001_4'].geometry} />
      </group>
    </group>
  )
}
