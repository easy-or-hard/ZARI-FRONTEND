import {ConstellationComponentProps} from "@/components/constellation/constellation";
import EffectBanzzack from "@/components/banzzack/effect-banzzack";

export default function Tau({setClickedStarNumber, setReadBanzzackVisible, banzzacks}: ConstellationComponentProps) {
    const handleClick = (event: any) => {
        if (event.target.tagName === "circle") {
            const key = event.target.parentNode.getAttribute('data-name');
            setClickedStarNumber(+key);
            setReadBanzzackVisible(true);
        }
    };

    return (
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640">
            <g id="_14" data-name="14">
                {banzzacks.find(banzzack => banzzack.starNumber === 14) && <EffectBanzzack cx="321.12" cy="513.51"/>}
                <circle cx="321.12" cy="513.51" r="20" opacity="0"/>
                <circle cx="321.12" cy="513.51" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_13" data-name="13">
                {banzzacks.find(banzzack => banzzack.starNumber === 13) && <EffectBanzzack cx="239.78" cy="513.51"/>}
                <circle cx="239.78" cy="513.51" r="20" opacity="0"/>
                <circle cx="239.78" cy="513.51" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_12" data-name="12">
                {banzzacks.find(banzzack => banzzack.starNumber === 12) && <EffectBanzzack cx="165.83" cy="524.6"/>}
                <circle cx="165.83" cy="524.6" r="20" opacity="0"/>
                <circle cx="165.83" cy="524.6" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_11" data-name="11">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="93.11" cy="524.6"/>}

                <circle cx="93.11" cy="524.6" r="20" opacity="0"/>
                <circle cx="93.11" cy="524.6" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="69.69" cy="405.04"/>}
                <circle cx="69.69" cy="405.04" r="20" opacity="0"/>
                <circle cx="69.69" cy="405.04" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="270.59" cy="345.88"/>}
                <circle cx="270.59" cy="345.88" r="20" opacity="0"/>
                <circle cx="270.59" cy="345.88" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="125.15" cy="333.56"/>}
                <circle cx="125.15" cy="333.56" r="20" opacity="0"/>
                <circle cx="125.15" cy="333.56" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="339.61" cy="177.03"/>}
                <circle cx="339.61" cy="177.03" r="20" opacity="0"/>
                <circle cx="339.61" cy="177.03" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="268.13" cy="233.72"/>}
                <circle cx="268.13" cy="233.72" r="20" opacity="0"/>
                <circle cx="268.13" cy="233.72" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="191.71" cy="236.19"/>}
                <circle cx="191.71" cy="236.19" r="20" opacity="0"/>
                <circle cx="191.71" cy="236.19" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="117.76" cy="202.91"/>}
                <circle cx="117.76" cy="202.91" r="20" opacity="0"/>
                <circle cx="117.76" cy="202.91" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="20.39" cy="239.89"/>}
                <circle cx="20.39" cy="239.89" r="20" opacity="0"/>
                <circle cx="20.39" cy="239.89" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="252.1" cy="115.4"/>}
                <circle cx="252.1" cy="115.4" r="20" opacity="0"/>
                <circle cx="252.1" cy="115.4" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="102.97" cy="121.56"/>}
                <circle cx="102.97" cy="121.56" r="20" opacity="0"/>
                <circle cx="102.97" cy="121.56" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="line" opacity=".6">
                <line x1="335.69" y1="180.13" x2="272.38" y2="230.35" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="269.67" y1="350.88" x2="240.7" y2="508.51" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="268.24" y1="238.72" x2="270.49" y2="341.11" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="252.78" y1="120.37" x2="267.45" y2="228.75" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="319.76" y1="508.97" x2="271.96" y2="350.42" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="113.04" y1="204.7" x2="25.11" y2="238.09" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="186.71" y1="233.94" x2="122.76" y2="205.16" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="263.13" y1="233.88" x2="196.71" y2="236.03" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="70.65" y1="409.97" x2="92.14" y2="519.68" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="122.28" y1="337.26" x2="72.72" y2="401.14" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="118.04" y1="207.9" x2="124.87" y2="328.53" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="103.87" y1="126.53" x2="116.85" y2="197.94" fill="none" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="164.78" y1="519.68" x2="126.2" y2="338.48" fill="none" stroke="#fff" strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}