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
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="20" cy="472.38"/>}
                <circle cx="20" cy="472.38" r="20" opacity="0"/>
                <circle cx="20" cy="472.38" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="70.57" cy="516.05"/>}
                <circle cx="70.57" cy="516.05" r="20" opacity="0"/>
                <circle cx="70.57" cy="516.05" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="204.94" cy="471.46"/>}
                <circle cx="204.94" cy="471.46" r="20" opacity="0"/>
                <circle cx="204.94" cy="471.46" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="137.13" cy="417.44"/>}
                <circle cx="137.13" cy="417.44" r="20" opacity="0"/>
                <circle cx="137.13" cy="417.44" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="323.67" cy="464.56"/>}
                <circle cx="323.67" cy="464.56" r="20" opacity="0"/>
                <circle cx="323.67" cy="464.56" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="211.03" cy="315.15"/>}
                <circle cx="211.03" cy="315.15" r="20" opacity="0"/>
                <circle cx="211.03" cy="315.15" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="331.95" cy="326.76"/>}
                <circle cx="331.95" cy="326.76" r="20" opacity="0"/>
                <circle cx="331.95" cy="326.76" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="340" cy="264.7"/>}
                <circle cx="340" cy="264.7" r="20" opacity="0"/>
                <circle cx="340" cy="264.7" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="282.29" cy="178.5"/>}
                <circle cx="282.29" cy="178.5" r="20" opacity="0"/>
                <circle cx="282.29" cy="178.5" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="234.02" cy="110.69"/>}
                <circle cx="234.02" cy="110.69" r="20" opacity="0"/>
                <circle cx="234.02" cy="110.69" r="5" fill="none" stroke="#fff" stroke-miterlimit="10"/>
            </g>
            <g id="line">
                <line x1="280.09" y1="174.18" x2="236.26" y2="115.09" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="213.01" y1="310.53" x2="280.31" y2="183.12" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="140.57" y1="413.73" x2="207.59" y2="318.86" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="73.99" y1="512.64" x2="133.71" y2="420.86" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="23.89" y1="475.74" x2="66.68" y2="512.69" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="337.44" y1="260.41" x2="284.85" y2="182.78" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="333" y1="321.97" x2="338.96" y2="269.48" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="320.17" y1="461.18" x2="214.53" y2="318.53" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="205.04" y1="466.64" x2="210.93" y2="319.97" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
                <line x1="140.81" y1="420.37" x2="201.27" y2="468.53" fill="none" opacity=".6" stroke="#fff"
                      stroke-miterlimit="10"/>
            </g>
        </svg>
    )
}