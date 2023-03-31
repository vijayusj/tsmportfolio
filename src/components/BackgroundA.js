import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const BackgroundA = ({ ani }) => {
  const opt1 = {
    fullScreen: {
      enable: false,
      zIndex: -1,
    },

    fpsLimit: 120,
    interactivity: {
      events: {
        // onClick: {
        //   enable: true,
        //   mode: 'push',
        // },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          // quantity: 4,
          enable: false,
        },
        // repulse: {
        //   distance: 200,
        //   duration: 0.4,
        // },
      },
    },
    particles: {
      color: {
        value: 'rgb(55, 232, 61)',
      },
      links: {
        color: 'rgb(238, 83, 238)',
        distance: 150,
        enable: true,
        opacity: 1,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none',
        enable: true,

        random: false,
        speed: 3,
        straight: false,
        bounce: false,
      },
      number: {
        density: {
          enable: false,
          // area: 800,
        },
        value: 25,
      },

      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };
  const opt2 = {
    fullScreen: {
      zIndex: 9,
    },

    particles: {
      number: {
        value: 0,
      },
      color: {
        value: ['#00FFFC', '#FC00FF', '#fffc00', '#57df03'],
      },
      shape: {
        type: ['polygon', 'triangle', 'circle'],
        options: {},
      },
      opacity: {
        value: 6,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: 'max',
          destroy: 'min',
        },
      },
      size: {
        value: 4,
        random: {
          enable: true,
          minimumValue: 2,
        },
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 5,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 10,
        },
        speed: {
          min: 10,
          max: 20,
        },
        decay: 0.1,
        direction: 'none',
        straight: false,
        outModes: {
          default: 'destroy',
          top: 'none',
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: 'random',
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: 'random',
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
    emitters: {
      position: {
        x: 50,
        y: 5,
      },
      life: {
        count: 4,
        duration: 0.4,
        delay: 0.4,
      },
      rate: {
        delay: 0.4,
        quantity: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <div className="bg">
      <div className="blast">
        {ani && (
          <Particles
            style={{ background: 'white' }}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={opt1}
          />
        )}
      </div>

      <div className="blast">
        {!ani && (
          <Particles
            id="tsparticle"
            init={particlesInit}
            loaded={particlesLoaded}
            options={opt2}
          />
        )}
      </div>
    </div>
  );
};

export default BackgroundA;
