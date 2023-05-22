'use client'

import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import {BanzzackEntity} from "@/service/banzzack/entities/banzzack.entity";
import Banzzack from "@/components/banzzack/banzzack";
import EffectBanzzack from "@/components/banzzack/effect-banzzack";

type props = {
    banzzacks: BanzzackEntity[];
}

export default function Tau({banzzacks}: props) {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [nowShowBanzzack, setNowShowBanzzack] = useState(0);

    const handleClick = (event: any) => {
        if (event.target.tagName === "circle") {
            const key = event.target.parentNode.getAttribute('data-name')
            setNowShowBanzzack(Number(key));
        }
    };

    useEffect(() => {
        const svgElement = svgRef.current;
        if (svgElement) {
            banzzacks.forEach((banzzack) => {
                const starGroup = svgElement.querySelector(
                    `g[data-name="${banzzack.starNumber}"]`
                );
                if (starGroup) {
                    const circle = starGroup.querySelector("circle");
                    if (circle) {
                        console.log('test')
                        const cx = circle.getAttribute("cx");
                        const cy = circle.getAttribute("cy");
                        const r = circle.getAttribute("r");
                        // starGroup.appendChild(
                        //     <EffectBanzzack
                        //         key={banzzack.starNumber}
                        //         positionX={cx}
                        //         positionY={cy}
                        //         r={r}
                        //     />
                        // );
                    }
                }
            });
        }
    }, []);

    return (
        <>
            {
                banzzacks.map(banzzack =>
                    nowShowBanzzack === banzzack.starNumber &&
                    <Banzzack key={banzzack.starNumber} banzzack={banzzack} closeFunction={setNowShowBanzzack}/>)
            }

            <svg ref={svgRef} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236.98 439.1">
                <g id="line">
                    <line x1="155.56" y1="24.17" x2="133.85" y2="60.19" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="128.97" y1="68.27" x2="104.98" y2="110.5" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="98.48" y1="117.5" x2="46.06" y2="171.6" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="40.13" y1="178.46" x2="37.98" y2="224.84" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="35.94" y1="233.17" x2="20" y2="266.1" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="20.83" y1="275.54" x2="45.9" y2="377.43" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="53.15" y1="379.15" x2="77.82" y2="351.46" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="86.13" y1="347.31" x2="137.52" y2="353.65" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="145.49" y1="357.94" x2="211.98" y2="414.1" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="46.5" y1="177.9" x2="96.82" y2="230.91" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                    <line x1="105.61" y1="234.07" x2="164.27" y2="227.26" fill="none" opacity=".6" stroke="#fff"
                          strokeWidth=".5"/>
                </g>
                <g id="_1" data-name="1">
                    <circle cx="157.98" cy="20" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="157.98" cy="20" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_2" data-name="2">
                    <circle cx="130.98" cy="64.1" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="130.98" cy="64.1" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_3" data-name="3">
                    <circle cx="101.98" cy="114" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="101.98" cy="114" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_4" data-name="4">
                    <circle cx="42.98" cy="175" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="42.98" cy="175" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_5" data-name="5">
                    <circle cx="37.98" cy="229" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="37.98" cy="229" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_6" data-name="6">
                    <circle cx="20" cy="271.1" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="20" cy="271.1" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_7" data-name="7">
                    <circle cx="48.98" cy="381" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="48.98" cy="381" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_8" data-name="8">
                    <circle cx="81.98" cy="349" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="81.98" cy="349" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_9" data-name="9">
                    <circle cx="141.98" cy="355" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="141.98" cy="355" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_10" data-name="10">
                    <circle cx="216.98" cy="419.1" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="216.98" cy="419.1" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_11" data-name="11">
                    <circle cx="100.98" cy="233" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="100.98" cy="233" r="20" fill="#231f20" opacity="0"/>
                </g>
                <g id="_12" data-name="12">
                    <circle cx="168.98" cy="227" r="5" fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                    <circle cx="168.98" cy="227" r="20" fill="#231f20" opacity="0"/>
                </g>
            </svg>
        </>
    )
}