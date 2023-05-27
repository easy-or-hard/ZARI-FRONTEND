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
            <g id="_14" data-name="14">
                {banzzacks.find(banzzack => banzzack.starNumber === 14) && <EffectBanzzack cx="146.4" cy="553.88"/>}
                <circle cx="146.4" cy="553.88" r="20" opacity="0"/>
                <circle cx="146.4" cy="553.88" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_13" data-name="13">
                <circle cx="20" cy="518.45" r="20" opacity="0"/>
                <circle cx="20" cy="518.45" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_12" data-name="12">
                {banzzacks.find(banzzack => banzzack.starNumber === 12) && <EffectBanzzack cx="222.71" cy="443.5"/>}
                <circle cx="222.71" cy="443.5" r="20" opacity="0"/>
                <circle cx="222.71" cy="443.5" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_11" data-name="11">
                {banzzacks.find(banzzack => banzzack.starNumber === 11) && <EffectBanzzack cx="165.48" cy="462.58"/>}
                <circle cx="165.48" cy="462.58" r="20" opacity="0"/>
                <circle cx="165.48" cy="462.58" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_10" data-name="10">
                {banzzacks.find(banzzack => banzzack.starNumber === 10) && <EffectBanzzack cx="80.99" cy="405.34"/>}
                <circle cx="80.99" cy="405.34" r="20" opacity="0"/>
                <circle cx="80.99" cy="405.34" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_9" data-name="9">
                {banzzacks.find(banzzack => banzzack.starNumber === 9) && <EffectBanzzack cx="148.66" cy="333.58"/>}
                <circle cx="148.66" cy="333.58" r="20" opacity="0"/>
                <circle cx="148.66" cy="333.58" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_8" data-name="8">
                {banzzacks.find(banzzack => banzzack.starNumber === 8) && <EffectBanzzack cx="338.54" cy="317.21"/>}
                <circle cx="338.54" cy="317.21" r="20" opacity="0"/>
                <circle cx="338.54" cy="317.21" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_7" data-name="7">
                {banzzacks.find(banzzack => banzzack.starNumber === 7) && <EffectBanzzack cx="256.78" cy="244.98"/>}
                <circle cx="256.78" cy="244.98" r="20" opacity="0"/>
                <circle cx="256.78" cy="244.98" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_6" data-name="6">
                {banzzacks.find(banzzack => banzzack.starNumber === 6) && <EffectBanzzack cx="159.56" cy="231.38"/>}
                <circle cx="159.56" cy="231.38" r="20" opacity="0"/>
                <circle cx="159.56" cy="231.38" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_5" data-name="5">
                {banzzacks.find(banzzack => banzzack.starNumber === 5) && <EffectBanzzack cx="72.35" cy="174.14"/>}
                <circle cx="72.35" cy="174.14" r="20" opacity="0"/>
                <circle cx="72.35" cy="174.14" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_4" data-name="4">
                {banzzacks.find(banzzack => banzzack.starNumber === 4) && <EffectBanzzack cx="223.97" cy="202.49"/>}
                <circle cx="223.97" cy="202.49" r="20" opacity="0"/>
                <circle cx="223.97" cy="202.49" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_3" data-name="3">
                {banzzacks.find(banzzack => banzzack.starNumber === 3) && <EffectBanzzack cx="243.61" cy="134.09"/>}
                <circle cx="243.61" cy="134.09" r="20" opacity="0"/>
                <circle cx="243.61" cy="134.09" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_2" data-name="2">
                {banzzacks.find(banzzack => banzzack.starNumber === 2) && <EffectBanzzack cx="191.37" cy="72.86"/>}
                <circle cx="191.37" cy="72.86" r="20" opacity="0"/>
                <circle cx="191.37" cy="72.86" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="_1" data-name="1">
                {banzzacks.find(banzzack => banzzack.starNumber === 1) && <EffectBanzzack cx="144.13" cy="110.56"/>}
                <circle cx="144.13" cy="110.56" r="20" opacity="0"/>
                <circle cx="144.13" cy="110.56" r="5" fill="none" stroke="#fff" />
            </g>
            <g id="line">
                <line x1="79.14" y1="409.99" x2="21.85" y2="513.8" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="145.22" y1="337.2" x2="84.44" y2="401.73" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="159.03" y1="236.38" x2="149.2" y2="328.58" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="219.31" y1="204.29" x2="164.21" y2="229.54" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="253.66" y1="241.08" x2="227.26" y2="206.25" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="223.72" y1="438.4" x2="255.92" y2="249.98" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="170.22" y1="461" x2="218.2" y2="445.65" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="147.44" y1="548.88" x2="164.07" y2="469.25" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="85.13" y1="408.15" x2="161.34" y2="459.77" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="242.31" y1="139.09" x2="225.25" y2="197.66" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="194.61" y1="76.67" x2="240.13" y2="130.17" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="148.05" y1="107.24" x2="187.45" y2="76.19" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="76.53" y1="176.89" x2="155.38" y2="228.63" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
                <line x1="260.52" y1="248.29" x2="334.79" y2="313.9" fill="none" opacity=".6" stroke="#fff"
                      strokeMiterlimit="10"/>
            </g>
        </svg>
    )
}