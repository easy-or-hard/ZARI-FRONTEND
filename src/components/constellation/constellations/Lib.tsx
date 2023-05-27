import {ConstellationComponentProps} from "@/components/constellation/constellation";
import EffectBanzzack from "@/components/banzzack/effect-banzzack";

export default function Tau({setClickedStarNumber, setBanzzackVisible, banzzacks}: ConstellationComponentProps) {
    const handleClick = (event: any) => {
        if (event.target.tagName === "circle") {
            const key = event.target.parentNode.getAttribute('data-name');
            setClickedStarNumber(+key);
            setBanzzackVisible(true);
        }
    };

    return (
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640">
            <g id="_11" data-name="11">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="116.16" cy="514.14"/>}
                <circle cx="116.16" cy="514.14" r="20" opacity="0"/>
                <circle cx="116.16" cy="514.14" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="69.06" cy="464.55"/>}
                <circle cx="69.06" cy="464.55" r="20" opacity="0"/>
                <circle cx="69.06" cy="464.55" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="148.39" cy="412.49"/>}
                <circle cx="148.39" cy="412.49" r="20" opacity="0"/>
                <circle cx="148.39" cy="412.49" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="276.07" cy="387.7"/>}
                <circle cx="276.07" cy="387.7" r="20" opacity="0"/>
                <circle cx="276.07" cy="387.7" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="340" cy="206.73"/>}
                <circle cx="340" cy="206.73" r="20" opacity="0"/>
                <circle cx="340" cy="206.73" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="225.24" cy="232.76"/>}
                <circle cx="225.24" cy="232.76" r="20" opacity="0"/>
                <circle cx="225.24" cy="232.76" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="272.35" cy="137.31"/>}
                <circle cx="272.35" cy="137.31" r="20" opacity="0"/>
                <circle cx="272.35" cy="137.31" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="191.78" cy="102.6"/>}
                <circle cx="191.78" cy="102.6" r="20" opacity="0"/>
                <circle cx="191.78" cy="102.6" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="124.84" cy="220.36"/>}
                <circle cx="124.84" cy="220.36" r="20" opacity="0"/>
                <circle cx="124.84" cy="220.36" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="20" cy="251.35"/>}
                <circle cx="20" cy="251.35" r="20" opacity="0"/>
                <circle cx="20" cy="251.35" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="29.92" cy="174.5"/>}
                <circle cx="29.92" cy="174.5" r="20" opacity="0"/>
                <circle cx="29.92" cy="174.5" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="line">
                <line x1="72.51" y1="468.18" x2="112.71" y2="510.5" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="144.06" y1="414.44" x2="73.39" y2="462.61" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="271.09" y1="388.67" x2="153.36" y2="411.53" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="338.31" y1="211.47" x2="277.76" y2="382.96" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="275.68" y1="140.69" x2="336.67" y2="203.35" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="196.41" y1="104.6" x2="267.72" y2="135.32" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="127.34" y1="215.97" x2="189.24" y2="107.06" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="25.14" y1="250.2" x2="119.87" y2="221.48" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="29.27" y1="179.48" x2="20.64" y2="246.37" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="224.04" y1="228.07" x2="192.98" y2="107.29" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="274.5" y1="382.92" x2="226.81" y2="237.54" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}