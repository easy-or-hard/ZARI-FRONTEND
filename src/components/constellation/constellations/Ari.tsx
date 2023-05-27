import {ConstellationComponentProps} from "@/components/constellation/constellation";
import EffectBanzzack from "@/components/banzzack/effect-banzzack";

export default function Ari({setClickedStarNumber, setReadBanzzackVisible, banzzacks}: ConstellationComponentProps) {
    const handleClick = (event: any) => {
        if (event.target.tagName === "circle") {
            const key = event.target.parentNode.getAttribute('data-name');
            setClickedStarNumber(+key);
            setReadBanzzackVisible(true);
        }
    };

    return (
        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 640">
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="20.19" cy="462.57"/>}
                <circle cx="20.19" cy="462.57" r="20" opacity="0"/>
                <circle cx="20.19" cy="462.57" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="181.99" cy="531.53"/>}
                <circle cx="181.99" cy="531.53" r="20" opacity="0"/>
                <circle cx="181.99" cy="531.53" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="143.53" cy="416.15"/>}
                <circle cx="143.53" cy="416.15" r="20" opacity="0"/>
                <circle cx="143.53" cy="416.15" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="38.76" cy="385.65"/>}
                <circle cx="38.76" cy="385.65" r="20" opacity="0"/>
                <circle cx="38.76" cy="385.65" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="115.68" cy="242.42"/>}
                <circle cx="115.68" cy="242.42" r="20" opacity="0"/>
                <circle cx="115.68" cy="242.42" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="304" cy="184.06"/>}
                <circle cx="304" cy="184.06" r="20" opacity="0"/>
                <circle cx="304" cy="184.06" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="221.78" cy="161.52"/>}
                <circle cx="221.78" cy="161.52" r="20" opacity="0"/>
                <circle cx="221.78" cy="161.52" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="282.78" cy="108.47"/>}
                <circle cx="282.78" cy="108.47" r="20" opacity="0"/>
                <circle cx="282.78" cy="108.47" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="339.81" cy="119.08"/>}
                <circle cx="339.81" cy="119.08" r="20" opacity="0"/>
                <circle cx="339.81" cy="119.08" r="4.93" fill="none" stroke="#fff" />
            </g>
            <g id="line">
                <line id="_Path_" data-name="&amp;lt;Path&amp;gt;" x1="145.11" y1="420.88" x2="180.38" y2="526.72"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line id="_Path_-2" data-name="&amp;lt;Path&amp;gt;" x1="43.59" y1="387.06" x2="138.43" y2="414.67"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line id="_Path_-3" data-name="&amp;lt;Path&amp;gt;" x1="21.34" y1="457.82" x2="37.59" y2="390.5"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line id="_Path_-4" data-name="&amp;lt;Path&amp;gt;" x1="287.43" y1="109.33" x2="334.88" y2="118.16"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line id="_Path_-5" data-name="&amp;lt;Path&amp;gt;" x1="120" y1="239.12" x2="217.74" y2="164.59"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line id="_Path_-6" data-name="&amp;lt;Path&amp;gt;" x1="40.64" y1="380.86" x2="113.33" y2="246.75"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line id="_Path_-7" data-name="&amp;lt;Path&amp;gt;" x1="299.11" y1="182.72" x2="226.68" y2="162.86"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
                <line id="_Path_-8" data-name="&amp;lt;Path&amp;gt;" x1="225.79" y1="158.02" x2="278.86" y2="111.88"
                      fill="none" opacity=".6" stroke="#fff" strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}