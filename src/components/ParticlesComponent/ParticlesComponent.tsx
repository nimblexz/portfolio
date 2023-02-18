import Particles from "react-tsparticles";
import s from "../../Main/Main.module.scss";
import {useCallback} from "react";
import {Container, Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";


export function ParticlesComponent() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return <Particles className={s.particles}
                      id="tsparticles"
                      init={particlesInit}
                      loaded={particlesLoaded}
                      options={{
                          fullScreen: {enable: false}, backgroundMode: {enable: false},
                          background: {
                              color: {
                                  value: "#0b0b0b",
                              },
                          },
                          fpsLimit: 120,
                          interactivity: {
                              events: {
                                  onClick: {
                                      enable: true,
                                      mode: "push",
                                  },
                                  onHover: {
                                      enable: true,
                                      mode: "repulse",
                                  },
                                  resize: true,
                              },
                              modes: {
                                  push: {
                                      quantity: 4,
                                  },
                                  repulse: {
                                      distance: 200,
                                      duration: 0.4,
                                  },
                              },
                          },
                          particles: {
                              color: {
                                  value: "#ffffff",
                              },
                              links: {
                                  color: "#ffffff",
                                  distance: 150,
                                  enable: true,
                                  opacity: 0.5,
                                  width: 1,
                              },
                              collisions: {
                                  enable: true,
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
                                  value: 80,
                              },
                              opacity: {
                                  value: 0.5,
                              },
                              shape: {
                                  type: "circle",
                              },
                              size: {
                                  value: {min: 1, max: 5},
                              },
                          },
                          detectRetina: true,
                      }}
    />
}