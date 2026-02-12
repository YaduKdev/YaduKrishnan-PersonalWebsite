import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useEffect, useRef }  from 'react'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

const LaptopContainer = ({ startAnimation = false, isMobile = false }) => {
    let model = useGLTF('/laptop.glb');

    const screenRef = useRef();
    const groupRef = useRef();
    const targetRotation = useRef(THREE.MathUtils.degToRad(180));
    const animationSpeed = 0.5;
    const videoRef = useRef();
    const videoTextureRef = useRef();
    const hasAnimated = useRef(false);
    const isAnimating = useRef(false);

    useEffect(() => {
        let meshes = {};

        model.scene.traverse(child => {
            meshes[child.name] = child;
        });

        // Create video element with better mobile support
        const video = document.createElement('video');
        video.src = '/hero-video-compressed.mp4';
        video.crossOrigin = 'anonymous';
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', ''); // iOS Safari
        video.preload = isMobile ? 'metadata' : 'auto'; // Reduce preload on mobile
        
        // Handle video load errors
        video.onerror = (e) => {
            console.error("Video error:", e);
        };

        // Attempt to play with user interaction fallback
        const playVideo = () => {
            video.play().catch(e => {
                console.warn("Autoplay blocked, will retry on user interaction:", e);
                
                // Retry on first user interaction
                const playOnInteraction = () => {
                    video.play().catch(err => console.error("Video play failed:", err));
                    document.removeEventListener('touchstart', playOnInteraction);
                    document.removeEventListener('click', playOnInteraction);
                };
                
                document.addEventListener('touchstart', playOnInteraction, { once: true });
                document.addEventListener('click', playOnInteraction, { once: true });
            });
        };

        // Delay video load slightly to allow page to render first
        const loadTimer = setTimeout(playVideo, isMobile ? 500 : 100);
        
        videoRef.current = video;

        // Create video texture with mobile optimizations
        const videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = isMobile ? THREE.LinearFilter : THREE.LinearMipmapLinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.colorSpace = THREE.SRGBColorSpace;
        videoTexture.format = THREE.RGBAFormat;
        videoTexture.generateMipmaps = !isMobile; // Disable mipmaps on mobile
        videoTextureRef.current = videoTexture;

        if (meshes.matte) {
            meshes.matte.material.map = videoTexture;
            meshes.matte.material.toneMapped = false;
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

        // Set laptop to full size immediately (visible but closed)
        if (groupRef.current) {
            groupRef.current.scale.set(1, 1, 1);
        }

        // Cleanup
        return () => {
            clearTimeout(loadTimer);
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.src = '';
                videoRef.current.load(); // Force cleanup
            }
            if (videoTextureRef.current) {
                videoTextureRef.current.dispose();
            }
        };
    }, [model, isMobile]);

    // Separate useEffect for animation that depends on startAnimation prop
    useEffect(() => {
        if (startAnimation && !hasAnimated.current) {
            hasAnimated.current = true;
            isAnimating.current = true;
            
            const tl = gsap.timeline({
                onComplete: () => {
                    isAnimating.current = false;
                }
            });
            
            // Open the laptop immediately when triggered
            tl.to(targetRotation, {
                current: THREE.MathUtils.degToRad(90),
                duration: 1.2,
                ease: "power2.inOut"
            });
        }
    }, [startAnimation]);

    useFrame((state, delta) => {
        // Only run frame updates when animating to save performance
        if (screenRef.current && (isAnimating.current || Math.abs(screenRef.current.rotation.x - targetRotation.current) > 0.01)) {
            // Clamp delta to prevent large jumps when tab is inactive
            const clampedDelta = Math.min(delta, 0.1);
            
            const newRotation = THREE.MathUtils.lerp(
                screenRef.current.rotation.x,
                targetRotation.current,
                clampedDelta * animationSpeed
            );
            
            screenRef.current.rotation.x = newRotation;
            
            // Stop updating when close enough
            if (!isAnimating.current && Math.abs(newRotation - targetRotation.current) < 0.01) {
                screenRef.current.rotation.x = targetRotation.current;
            }
        }
    });

  return (
    <group ref={groupRef} position={[0, -13.5, 100]}>
        <primitive object={model.scene} />
    </group>
  )
}

export default LaptopContainer
