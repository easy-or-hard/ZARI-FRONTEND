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
            <g id="_16" data-name="16">
                {banzzacks.find(banzzack => banzzack.starNumber === 16) && <EffectBanzzack cx="155.38" cy="532.44"/>}
                <circle cx="155.38" cy="532.44" r="20" opacity="0"/>
                <circle cx="155.38" cy="532.44" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_15" data-name="15">
                {banzzacks.find(banzzack => banzzack.starNumber === 15) && <EffectBanzzack cx="137.05" cy="475.18"/>}
                <circle cx="137.05" cy="475.18" r="20" opacity="0"/>
                <circle cx="137.05" cy="475.18" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_14" data-name="14">
                {banzzacks.find(banzzack => banzzack.starNumber === 14) && <EffectBanzzack cx="78.65" cy="517.55"/>}
                <circle cx="78.65" cy="517.55" r="20" opacity="0"/>
                <circle cx="78.65" cy="517.55" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_13" data-name="13">
                {banzzacks.find(banzzack => banzzack.starNumber === 13) && <EffectBanzzack cx="36.27" cy="424.79"/>}
                <circle cx="36.27" cy="424.79" r="20" opacity="0"/>
                <circle cx="36.27" cy="424.79" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_12" data-name="12">
                {banzzacks.find(banzzack => banzzack.starNumber === 12) && <EffectBanzzack cx="20.24" cy="286.22"/>}
                <circle cx="20.24" cy="286.22" r="20" opacity="0"/>
                <circle cx="20.24" cy="286.22" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_11" data-name="11">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="85.52" cy="232.39"/>}
                <circle cx="85.52" cy="232.39" r="20" opacity="0"/>
                <circle cx="85.52" cy="232.39" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="273.34" cy="393.87"/>}
                <circle cx="273.34" cy="393.87" r="20" opacity="0"/>
                <circle cx="273.34" cy="393.87" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="337.73" cy="331.85"/>}
                <circle cx="337.73" cy="331.85" r="20" opacity="0"/>
                <circle cx="337.73" cy="331.85" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="285.88" cy="302.86"/>}
                <circle cx="285.88" cy="302.86" r="20" opacity="0"/>
                <circle cx="285.88" cy="302.86" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="339.76" cy="163.68"/>}
                <circle cx="339.76" cy="163.68" r="20" opacity="0"/>
                <circle cx="339.76" cy="163.68" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="296.24" cy="234.68"/>}
                <circle cx="296.24" cy="234.68" r="20" opacity="0"/>
                <circle cx="296.24" cy="234.68" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="224.09" cy="246.13"/>}
                <circle cx="224.09" cy="246.13" r="20" opacity="0"/>
                <circle cx="224.09" cy="246.13" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="208.06" cy="307.98"/>}
                <circle cx="208.06" cy="307.98" r="20" opacity="0"/>
                <circle cx="208.06" cy="307.98" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="151.94" cy="272.47"/>}
                <circle cx="151.94" cy="272.47" r="20" opacity="0"/>
                <circle cx="151.94" cy="272.47" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="162.25" cy="184.29"/>}
                <circle cx="162.25" cy="184.29" r="20" opacity="0"/>
                <circle cx="162.25" cy="184.29" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="110.71" cy="107.56"/>}
                <circle cx="110.71" cy="107.56" r="20" opacity="0"/>
                <circle cx="110.71" cy="107.56" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="line">
                <line x1="298.85" y1="230.42" x2="337.15" y2="167.94" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="229.05" y1="245.47" x2="291.28" y2="235.34" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="156.7" y1="270.74" x2="219.34" y2="247.87" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="90.36" y1="234.49" x2="147.1" y2="270.37" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="23.9" y1="283.2" x2="81.86" y2="235.41" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="35.73" y1="420.13" x2="20.78" y2="290.84" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="76.62" y1="513.12" x2="38.3" y2="429.22" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="150.75" y1="531.54" x2="83.27" y2="518.45" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="333.3" y1="329.35" x2="290.43" y2="305.15" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="295.55" y1="239.5" x2="286.63" y2="298.11" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="285.16" y1="307.66" x2="274.02" y2="389.13" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="159.39" y1="180.04" x2="113.57" y2="111.81" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="152.53" y1="267.47" x2="161.66" y2="189.29" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="203.77" y1="305.26" x2="156.23" y2="275.19" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="222.87" y1="250.85" x2="209.28" y2="303.26" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="82.95" y1="514.54" x2="132.81" y2="478.27" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}