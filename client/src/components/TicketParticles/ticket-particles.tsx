import React, { FC, useCallback, useMemo, useState } from "react";
import particles, { Particles } from 'react-tsparticles';
import { Engine } from "tsparticles-engine";
import { loadSlim } from 'tsparticles-slim'

const TicketParticles: FC = () => {
    const options = useMemo(() => {
        return {
            "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "links": {
                    "enable": true
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "random": false,
                    "straight": false,
                    "bounce": false,
                },
                "shape": {
                    "type": ["image"],
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },

                    "image": {
                        "src": "ticket.png",
                        "width": 1050,
                        "height": 352
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 50,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 20,
                        "size_min": 20,
                        "sync": false
                    }
                },

            },
        };
    }, [])

    const init = async (engin: Engine) => {
        await loadSlim(engin);
    }

    return (
        <>
            <Particles init={init} options={options}></Particles>
        </>
    )

    //TODO - add validations on username field, if needed

}

export default TicketParticles;