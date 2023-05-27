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
                {banzzacks.find(banzzack => banzzack.starNumber === 12) && <EffectBanzzack cx="20" cy="419.95"/>}
                <circle cx="20" cy="419.95" r="20" opacity="0"/>
                <circle cx="20" cy="419.95" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="59.63" cy="514.5"/>}
                <circle cx="59.63" cy="514.5" r="20" opacity="0"/>
                <circle cx="59.63" cy="514.5" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="131.6" cy="522.97"/>}
                <circle cx="131.6" cy="522.97" r="20" opacity="0"/>
                <circle cx="131.6" cy="522.97" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="340" cy="498.85"/>}
                <circle cx="340" cy="498.85" r="20" opacity="0"/>
                <circle cx="340" cy="498.85" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="272.43" cy="388.9"/>}
                <circle cx="272.43" cy="388.9" r="20" opacity="0"/>
                <circle cx="272.43" cy="388.9" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="176.47" cy="379.03"/>}
                <circle cx="176.47" cy="379.03" r="20" opacity="0"/>
                <circle cx="176.47" cy="379.03" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="235.74" cy="252.02"/>}
                <circle cx="235.74" cy="252.02" r="20" opacity="0"/>
                <circle cx="235.74" cy="252.02" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="293.6" cy="182.87"/>}
                <circle cx="293.6" cy="182.87" r="20" opacity="0"/>
                <circle cx="293.6" cy="182.87" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="120.03" cy="290.12"/>}
                <circle cx="120.03" cy="290.12" r="20" opacity="0"/>
                <circle cx="120.03" cy="290.12" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="50.88" cy="180.78"/>}
                <circle cx="50.88" cy="180.78" r="20" opacity="0"/>
                <circle cx="50.88" cy="180.78" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="105.67" cy="117.03"/>}
                <circle cx="105.67" cy="117.03" r="20" opacity="0"/>
                <circle cx="105.67" cy="117.03" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="line">
                <line x1="57.67" y1="509.9" x2="21.93" y2="424.56" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="126.62" y1="522.38" x2="64.62" y2="515.08" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="174.56" y1="383.4" x2="133.62" y2="518.32" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="122.96" y1="294.74" x2="173.54" y2="374.4" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="53.55" y1="185.01" x2="117.34" y2="285.97" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="102.37" y1="120.79" x2="53.55" y2="176.37" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="239" y1="248.12" x2="290.48" y2="186.6" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="271.11" y1="383.96" x2="237.07" y2="256.96" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="337.8" y1="494.86" x2="274.65" y2="392.93" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="230.82" y1="253.64" x2="125.3" y2="288.39" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="181.47" y1="379.54" x2="267.43" y2="388.39" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}