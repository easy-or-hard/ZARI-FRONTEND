import {ConstellationComponentProps} from "@/app/component/constellation/constellation";
import EffectBanzzack from "@/app/component/banzzack/effect-banzzack";

export default function Psc({setClickedStarNumber, setReadBanzzackVisible, banzzacks}: ConstellationComponentProps) {
    const handleClick = (event: any) => {
        if (event.target.tagName === "circle") {
            const key = event.target.parentNode.getAttribute('data-name');
            setClickedStarNumber(+key);
            setReadBanzzackVisible(true);
        }
    };

    return (
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640">
            <g id="_13" data-name="13">
                {banzzacks.find(banzzack => banzzack.starNumber === 13) && <EffectBanzzack cx="172.19" cy="540.86"/>}
                <circle cx="172.19" cy="540.86" r="20" opacity="0"/>
                <circle cx="172.19" cy="540.86" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_12" data-name="12">
                {banzzacks.find(banzzack => banzzack.starNumber === 12) && <EffectBanzzack cx="89.79" cy="550.8"/>}
                <circle cx="89.79" cy="550.8" r="20" opacity="0"/>
                <circle cx="89.79" cy="550.8" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_11" data-name="11">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="130.99" cy="478.35"/>}
                <circle cx="130.99" cy="478.35" r="20" opacity="0"/>
                <circle cx="130.99" cy="478.35" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="129.57" cy="415.84"/>}
                <circle cx="129.57" cy="415.84" r="20" opacity="0"/>
                <circle cx="129.57" cy="415.84" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="111.1" cy="349.07"/>}
                <circle cx="111.1" cy="349.07" r="20" opacity="0"/>
                <circle cx="111.1" cy="349.07" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="99.73" cy="289.41"/>}
                <circle cx="99.73" cy="289.41" r="20" opacity="0"/>
                <circle cx="99.73" cy="289.41" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="75.58" cy="214.11"/>}
                <circle cx="75.58" cy="214.11" r="20" opacity="0"/>
                <circle cx="75.58" cy="214.11" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="339.82" cy="239.68"/>}
                <circle cx="339.82" cy="239.68" r="20" opacity="0"/>
                <circle cx="339.82" cy="239.68" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="311.41" cy="174.33"/>}
                <circle cx="311.41" cy="174.33" r="20" opacity="0"/>
                <circle cx="311.41" cy="174.33" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="244.64" cy="215.53"/>}
                <circle cx="244.64" cy="215.53" r="20" opacity="0"/>
                <circle cx="244.64" cy="215.53" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="159.4" cy="177.17"/>}
                <circle cx="159.4" cy="177.17" r="20" opacity="0"/>
                <circle cx="159.4" cy="177.17" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="98.31" cy="141.66"/>}
                <circle cx="98.31" cy="141.66" r="20" opacity="0"/>
                <circle cx="98.31" cy="141.66" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="20.18" cy="90.51"/>}
                <circle cx="20.18" cy="90.51" r="20" opacity="0"/>
                <circle cx="20.18" cy="90.51" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="line">
                <line x1="128.49" y1="482.74" x2="92.41" y2="546.19"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="169.48" y1="536.75" x2="133.68" y2="482.44"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="94.64" y1="550.22" x2="167.14" y2="541.47"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="313.53" y1="179.21" x2="337.69" y2="234.78"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="249.01" y1="212.83" x2="307.01" y2="177.05"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="163.99" y1="179.24" x2="239.94" y2="213.41"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="102.44" y1="144.06" x2="155" y2="174.62"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="24.37" y1="93.26" x2="93.96" y2="138.81"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="73.45" y1="209.36" x2="22.21" y2="95.04"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="98.17" y1="284.54" x2="77.16" y2="219.02"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="110.17" y1="344.18" x2="100.67" y2="294.3"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="128.22" y1="410.96" x2="112.46" y2="354"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line x1="130.87" y1="473.31" x2="129.68" y2="420.89"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}