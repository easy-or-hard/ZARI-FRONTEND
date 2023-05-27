import {ConstellationComponentProps} from "@/components/constellation/constellation";
import EffectBanzzack from "@/components/banzzack/effect-banzzack";

export default function Tau({setClickedStarNumber, setBanzzackVisible, banzzacks}: ConstellationComponentProps) {
    const handleClick = (event: any) => {
        if (event.target.tagName === "circle") {
            const key = event.target.parentNode.getAttribute('data-name')
            setClickedStarNumber(+key);
            setBanzzackVisible(true);
        }
    };

    return (
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640">
            <g id="_11" data-name="11">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="339.99" cy="479.13"/>}
                <circle cx="339.99" cy="479.13" r="20" opacity="0"/>
                <circle cx="339.99" cy="479.13" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="339.99" cy="429.91"/>}
                <circle cx="339.99" cy="429.91" r="20" opacity="0"/>
                <circle cx="339.99" cy="429.91" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="254.41" cy="412.57"/>}
                <circle cx="254.41" cy="412.57" r="20" opacity="0"/>
                <circle cx="254.41" cy="412.57" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="210.78" cy="361.11"/>}
                <circle cx="210.78" cy="361.11" r="20" opacity="0"/>
                <circle cx="210.78" cy="361.11" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="147.01" cy="334.26"/>}
                <circle cx="147.01" cy="334.26" r="20" opacity="0"/>
                <circle cx="147.01" cy="334.26" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="78.77" cy="304.06"/>}
                <circle cx="78.77" cy="304.06" r="20" opacity="0"/>
                <circle cx="78.77" cy="304.06" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="20.01" cy="221.28"/>}
                <circle cx="20.01" cy="221.28" r="20" opacity="0"/>
                <circle cx="20.01" cy="221.28" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="260" cy="307.42"/>}
                <circle cx="260" cy="307.42" r="20" opacity="0"/>
                <circle cx="260" cy="307.42" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="195.12" cy="290.64"/>}
                <circle cx="195.12" cy="290.64" r="20" opacity="0"/>
                <circle cx="195.12" cy="290.64" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="183.93" cy="235.82"/>}
                <circle cx="183.93" cy="235.82" r="20" opacity="0"/>
                <circle cx="183.93" cy="235.82" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="115.69" cy="160.87"/>}
                <circle cx="115.69" cy="160.87" r="20" opacity="0"/>
                <circle cx="115.69" cy="160.87" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="line" opacity=".6">
                <line x1="75.85" y1="299.89" x2="22.94" y2="225.36" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="142.38" y1="332.21" x2="83.39" y2="306.13" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="206.16" y1="359.17" x2="151.46" y2="336.16" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="251.25" y1="408.85" x2="213.95" y2="364.85" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="334.99" y1="428.85" x2="259.26" y2="413.59" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="339.99" y1="473.99" x2="339.99" y2="434.89" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="200.12" y1="291.93" x2="254.75" y2="306.06" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="184.95" y1="240.82" x2="194.11" y2="285.69" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="119.06" y1="164.57" x2="180.52" y2="232.07" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="256.56" y1="311.18" x2="214.25" y2="357.36" fill="none" stroke="#fff"
                      stroke-miterlimit="10"/>
            </g>
        </svg>
    )
}