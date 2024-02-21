import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const dragon = useGLTF("./dragon/scene.glb")

  return (
    <mesh>
      <hemisphereLight
        intensity={0.5}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <primitive
        object={dragon.scene}
        scale={isMobile ? 0.05 : 0.1}
        position={isMobile ? [0, -1, 0] : [0, -2, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
  
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change',
    handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange);
    }
  }, [])
  
  // const mixer = new THREE.AnimationMixer( Computers );
  // const clips = mesh.animations;

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [8, 5, 10], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={null}> */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      {/* </Suspense>3js portfolio
       */}
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;