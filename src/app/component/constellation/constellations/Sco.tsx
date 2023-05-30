import {ConstellationComponentProps} from "@/app/component/constellation/constellation";
import EffectBanzzack from "@/app/component/banzzack/effect-banzzack";

export default function Sco({setClickedStarNumber, setReadBanzzackVisible, banzzacks}: ConstellationComponentProps) {
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
                {banzzacks.find(banzzack => banzzack.starNumber === 14) && <EffectBanzzack cx="20" cy="439.35"/>}
                <circle cx="20" cy="439.35" r="20" opacity="0"/>
                <circle cx="20" cy="439.35" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_13" data-name="13">
                {banzzacks.find(banzzack => banzzack.starNumber === 13) && <EffectBanzzack cx="79.09" cy="406.9"/>}
                <circle cx="79.09" cy="406.9" r="20" opacity="0"/>
                <circle cx="79.09" cy="406.9" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_12" data-name="12">
                {banzzacks.find(banzzack => banzzack.starNumber === 12) && <EffectBanzzack cx="49.65" cy="514.66"/>}
                <circle cx="49.65" cy="514.66" r="20" opacity="0"/>
                <circle cx="49.65" cy="514.66" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_11" data-name="11">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="107.58" cy="537.84"/>}
                <circle cx="107.58" cy="537.84" r="20" opacity="0"/>
                <circle cx="107.58" cy="537.84" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="194.48" cy="522.77"/>}
                <circle cx="194.48" cy="522.77" r="20" opacity="0"/>
                <circle cx="194.48" cy="522.77" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="277.91" cy="469.47"/>}
                <circle cx="277.91" cy="469.47" r="20" opacity="0"/>
                <circle cx="277.91" cy="469.47" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="222.29" cy="395.32"/>}
                <circle cx="222.29" cy="395.32" r="20" opacity="0"/>
                <circle cx="222.29" cy="395.32" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="168.99" cy="338.54"/>}
                <circle cx="168.99" cy="338.54" r="20" opacity="0"/>
                <circle cx="168.99" cy="338.54" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="179.42" cy="237.73"/>}
                <circle cx="179.42" cy="237.73" r="20" opacity="0"/>
                <circle cx="179.42" cy="237.73" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="228.09" cy="187.91"/>}
                <circle cx="228.09" cy="187.91" r="20" opacity="0"/>
                <circle cx="228.09" cy="187.91" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="340" cy="222.67"/>}
                <circle cx="340" cy="222.67" r="20" opacity="0"/>
                <circle cx="340" cy="222.67" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="323.78" cy="172.84"/>}
                <circle cx="323.78" cy="172.84" r="20" opacity="0"/>
                <circle cx="323.78" cy="172.84" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="297.61" cy="113.75"/>}
                <circle cx="297.61" cy="113.75" r="20" opacity="0"/>
                <circle cx="297.61" cy="113.75" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="229.24" cy="102.16"/>}
                <circle cx="229.24" cy="102.16" r="20" opacity="0"/>
                <circle cx="229.24" cy="102.16" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="line">
                <line x1="325.57" y1="178.35" x2="338.21" y2="217.16" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="232.05" y1="183.69" x2="293.65" y2="117.97" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="183.47" y1="233.59" x2="224.04" y2="192.05" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="169.59" y1="332.75" x2="178.82" y2="243.5" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="218.86" y1="390.65" x2="172.42" y2="343.2" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="274.44" y1="464.84" x2="225.77" y2="399.95" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="199.36" y1="519.66" x2="273.03" y2="472.59" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="113.32" y1="537.05" x2="188.69" y2="523.57" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="55.02" y1="516.81" x2="102.2" y2="535.68" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="77.59" y1="412.49" x2="51.15" y2="509.07" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="25.08" y1="436.56" x2="74.02" y2="409.69" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="299.99" y1="119.03" x2="321.4" y2="167.57" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="234.95" y1="103.13" x2="291.9" y2="112.78" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}