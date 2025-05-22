import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

type FireParticlesProps = React.ComponentProps<typeof Particles>;

const FireParticles: React.FC<FireParticlesProps> = (props) => {
  const [particleCount, setParticleCount] = useState(150);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      console.log(init);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    const handlePageClick = () => {
      setParticleCount((prev) => prev + 50);
    };

    window.addEventListener("click", handlePageClick);

    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, []);

  const options = useMemo(
    () => ({
      fullscreen: false,
      background: {
        image: "radial-gradient(#4a0000, #000)",
      },
      fpsLimit: 40,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
        },
        move: {
          direction: "up",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: particleCount,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [particleCount]
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default FireParticles;
