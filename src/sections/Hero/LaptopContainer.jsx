import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const LaptopContainer = ({ startAnimation = false }) => {
    const { scene } = useGLTF('/laptop.glb');
    const hingeRef = useRef();
    const videoRef = useRef();
    const videoTextureRef = useRef();
    const hasAnimated = useRef(false);
    
    // Internal state for GSAP to animate
    const [animState] = useState({ rotX: THREE.MathUtils.degToRad(180) });

    useEffect(() => {
        // Setup Video
        const video = document.createElement('video');
        video.src = '/hero-video-compressed.mp4';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.crossOrigin = 'anonymous';
        videoRef.current = video;

        const texture = new THREE.VideoTexture(video);
        texture.colorSpace = THREE.SRGBColorSpace;
        videoTextureRef.current = texture;

        // Setup Model
        scene.traverse(child => {
            // 1. ANIMATION FIX: Keep this OUTSIDE the mesh-only check if needed, 
            // but usually hinges are meshes or groups.
            const possibleNames = ['screen', 'lid', 'top', 'hinge'];
            if (possibleNames.some(name => child.name.toLowerCase().includes(name))) {
                hingeRef.current = child;
                child.rotation.x = THREE.MathUtils.degToRad(180);
            }

            // 2. MATERIAL FIX:
            if (child.isMesh && child.name.toLowerCase().includes('matte')) {
                child.material.map = texture;
                
                // Increase emissive to make the video bright (fixes the "dim" issue)
                child.material.emissive = new THREE.Color(0xffffff);
                child.material.emissiveMap = texture;
                child.material.emissiveIntensity = 1.5; // Adjusted for better brightness
                
                // Fix the white glare on the right
                child.material.roughness = 1;
                child.material.metalness = 0;
                
                // This line specifically kills that "Studio" light reflection
                if (child.material.envMapIntensity !== undefined) {
                    child.material.envMapIntensity = 0; 
                }

                child.material.toneMapped = false;
                child.material.needsUpdate = true;
            }
        });

        return () => {
            video.pause();
            texture.dispose();
        };
    }, [scene]);

    // THE WATCHER: This handles the first-load vs refresh logic
    useEffect(() => {
        // Proceed only if the prop is true AND the model is ready
        if (startAnimation && hingeRef.current && !hasAnimated.current) {
            hasAnimated.current = true;

            if (videoRef.current) videoRef.current.play().catch(() => {});

            gsap.to(animState, {
                rotX: THREE.MathUtils.degToRad(90),
                duration: 1.5,
                delay: 0.3, // Buffer for curtain reveal
                ease: "power2.inOut"
            });
        }
    }, [startAnimation, scene]); // Adding 'scene' ensures it triggers if load finishes LATER than the signal

    useFrame(() => {
        if (hingeRef.current) {
            hingeRef.current.rotation.x = animState.rotX;
        }
        if (videoTextureRef.current && videoRef.current?.readyState >= 2) {
            videoTextureRef.current.needsUpdate = true;
        }
    });

    return (
        <group position={[0, -13.5, 0]}>
            <primitive object={scene} />
        </group>
    );
};

export default LaptopContainer;
useGLTF.preload('/laptop.glb');