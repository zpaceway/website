import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";

const PictureParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      className="overflow-hidden w-full h-full"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#5eead4",
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 1000,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 12 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default PictureParticles;
