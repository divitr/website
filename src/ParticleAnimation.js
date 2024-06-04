import React, { useEffect } from 'react';
import Particles from 'react-particles';

const ParticleAnimation = () => {
  useEffect(() => {
    // Initialize Particle.js
    window.particlesJS('particles-js', {
      particles: {
        // Particle configurations
      },
      // Other configurations
    });
  }, []);

  return (
    <Particles
      id="particles-js"
      params={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ['#bdbdbd', '#757575', '#ffffff'] // Monochrome color scheme
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            }
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.2,
            width: 0.5
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: true,
              rotateX: 3000,
              rotateY: 3000
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 80,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default ParticleAnimation;

