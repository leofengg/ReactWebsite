
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"
import ParticleConfig from "./config/background-config";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0"
            }}
            params={ParticleConfig}
        />
    );
};

export default ParticleBackground
