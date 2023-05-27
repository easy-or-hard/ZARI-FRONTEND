import {ConstellationComponentProps} from "@/components/constellation/constellation";
import EffectBanzzack from "@/components/banzzack/effect-banzzack";

export default function Aqr({setClickedStarNumber, setBanzzackVisible, banzzacks}: ConstellationComponentProps) {
    const handleClick = (event: any) => {
        if (event.target.tagName === "circle") {
            const key = event.target.parentNode.getAttribute('data-name')
            setClickedStarNumber(+key);
            setBanzzackVisible(true);
        }
    };

    return (
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640">
            <g id="_13" data-name="13">
                {banzzacks.find(banzzack => banzzack.starNumber === 13) && <EffectBanzzack cx="257.9" cy="340.5"/>}
                <circle cx="257.9" cy="340.5" r="20" opacity="0"/>
                <circle cx="257.9" cy="340.5" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_12" data-name="12">
                {banzzacks.find(banzzack => banzzack.starNumber === 12) && <EffectBanzzack cx="161.3" cy="348.9"/>}
                <circle cx="161.3" cy="348.9" r="20" opacity="0"/>
                <circle cx="161.3" cy="348.9" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_11" data-name="11">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="340" cy="579.3"/>}
                <circle cx="340" cy="579.3" r="20" opacity="0"/>
                <circle cx="340" cy="579.3" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="267.5" cy="527.5"/>}
                <circle cx="267.5" cy="527.5" r="20" opacity="0"/>
                <circle cx="267.5" cy="527.5" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="210.1" cy="488.3"/>}
                <circle cx="210.1" cy="488.3" r="20" opacity="0"/>
                <circle cx="210.1" cy="488.3" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="124.5" cy="485.7"/>}
                <circle cx="124.5" cy="485.7" r="20" opacity="0"/>
                <circle cx="124.5" cy="485.7" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="65.7" cy="534.7"/>}
                <circle cx="65.7" cy="534.7" r="20" opacity="0"/>
                <circle cx="65.7" cy="534.7" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="20" cy="416.3"/>}
                <circle cx="20" cy="416.3" r="20" opacity="0"/>
                <circle cx="20" cy="416.3" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="54.5" cy="343.3"/>}
                <circle cx="54.5" cy="343.3" r="20" opacity="0"/>
                <circle cx="54.5" cy="343.3" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="75.7" cy="263.7"/>}
                <circle cx="75.7" cy="263.7" r="20" opacity="0"/>
                <circle cx="75.7" cy="263.7" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="144.1" cy="202.3"/>}
                <circle cx="144.1" cy="202.3" r="20" opacity="0"/>
                <circle cx="144.1" cy="202.3" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="184.7" cy="142.3"/>}
                <circle cx="184.7" cy="142.3" r="20" opacity="0"/>
                <circle cx="184.7" cy="142.3" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="220.5" cy="89.7"/>}
                <circle cx="220.5" cy="89.7" r="20" opacity="0"/>
                <circle cx="220.5" cy="89.7" r="5" fill="none" opacity=".7" stroke="#fff" />
            </g>
            <g id="line">
                <line x1="271.04" y1="530.96" x2="336.36" y2="575.75" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="214.03" y1="490.98" x2="263.41" y2="524.71" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="129.11" y1="486.52" x2="205.1" y2="487.41" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="69.56" y1="531.48" x2="120.62" y2="488.93" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="21.22" y1="420.99" x2="64.4" y2="529.74" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="52.25" y1="347.82" x2="22.3" y2="411.67" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="75.43" y1="268.7" x2="54.8" y2="338.09" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="140.38" y1="205.69" x2="79.58" y2="260.17" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="182.17" y1="146.66" x2="146.7" y2="197.81" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="218.08" y1="93.65" x2="187.26" y2="138.12" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="166.29" y1="348.47" x2="252.84" y2="340.94" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="78.85" y1="267.67" x2="158" y2="344.74" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}