import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useRef }  from 'react'
import { useFrame } from '@react-three/fiber';

const LaptopContainer = () => {
    let model = useGLTF('/laptop.glb');

    const screenRef = useRef();
    const targetRotation = useRef(THREE.MathUtils.degToRad(90));
    const animationSpeed = 0.5;
    const videoRef = useRef();
    const videoTextureRef = useRef();

    useEffect(() => {
        let meshes = {};

        model.scene.traverse(child => {
            meshes[child.name] = child;
        });

        // Create video element
        const video = document.createElement('video');
        video.src = '/hero-video-compressed.mp4'; // Replace with your video path
        video.crossOrigin = 'anonymous';
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.play();
        
        videoRef.current = video;

        // Create video texture
        const videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTextureRef.current = videoTexture;

        if (meshes.matte) {
            meshes.matte.material.map = videoTexture;
            meshes.matte.material.emissiveIntensity = 0;
            meshes.matte.material.metalness = 0;
            meshes.matte.material.roughness = 1;
            meshes.matte.material.needsUpdate = true;
        }

        // Find and store screen mesh
        if (meshes.screen) {
            screenRef.current = meshes.screen;
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
        }

        // Cleanup
        return () => {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.src = '';
            }
            if (videoTextureRef.current) {
                videoTextureRef.current.dispose();
            }
        };
    }, [model]);

    useFrame((state, delta) => {
        if (screenRef.current) {
            screenRef.current.rotation.x = THREE.MathUtils.lerp(
                screenRef.current.rotation.x,
                targetRotation.current,
                delta * animationSpeed
            );
        }
    });

  return (
    <group position={[0, -13.5, 100]}>
        <primitive object={model.scene} />
    </group>
  )
}

export default LaptopContainer