import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const LaptopContainer = ({ startAnimation = false }) => {
    const { scene } = useGLTF('/laptop.glb');
    const screenRef = useRef();
    const videoRef = useRef();
    const videoTextureRef = useRef();
    const hasAnimated = useRef(false);
    
    const rotationState = useRef({ x: THREE.MathUtils.degToRad(180) });

    useEffect(() => {
        const video = document.createElement('video');
        video.src = '/hero-video-compressed.mp4';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.crossOrigin = 'anonymous';
        video.preload = 'auto';
        
        const texture = new THREE.VideoTexture(video);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        videoRef.current = video;
        videoTextureRef.current = texture;

        video.play().catch(() => {
            // Silently fail for autoplay blocks; handled in startAnimation effect
        });

        scene.traverse(child => {
            if (child.isMesh && child.name === 'matte') {
                child.material.map = texture;
                child.material.color = new THREE.Color(0xffffff);
                
                // Enhanced visibility settings
                child.material.emissive = new THREE.Color(0xffffff);
                child.material.emissiveMap = texture;
                child.material.emissiveIntensity = 0.2; // Subtly brightens the video
                child.material.toneMapped = false;
                child.material.metalness = 0;
                child.material.roughness = 1;
                
                child.material.needsUpdate = true;
            }
            if (child.name === 'screen') {
                screenRef.current = child;
                child.rotation.x = rotationState.current.x;
            }
        });

        return () => {
            video.pause();
            texture.dispose();
            video.src = "";
            video.load();
        };
    }, [scene]);

    useEffect(() => {
        if (startAnimation && !hasAnimated.current) {
            hasAnimated.current = true;
            
            // Re-trigger play on user interaction/scroll
            if (videoRef.current) {
                videoRef.current.play().catch(() => {});
            }

            gsap.to(rotationState.current, {
                x: THREE.MathUtils.degToRad(90),
                duration: 1.5,
                ease: "power2.inOut"
            });
        }
    }, [startAnimation]);

    useFrame(() => {
        if (screenRef.current) {
            screenRef.current.rotation.x = rotationState.current.x;
        }
        if (videoTextureRef.current) {
            videoTextureRef.current.needsUpdate = true;
        }
    });

    return (
        <group position={[0, -13.5, 0]}>
            <primitive object={scene} />
        </group>
    )
}

export default LaptopContainer;