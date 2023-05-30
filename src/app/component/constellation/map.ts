import AgrOriginPath from "@/app/component/constellation/constellations/agr-origin.path";
import {FunctionComponent} from "react";
import AqrEffectPath from "@/app/component/constellation/effects/agr-effect.path";
import {BanzzackEntity} from "@/services/banzzack/entities/banzzack.entity";
import CapOriginPath from "@/app/component/constellation/constellations/cap-origin.path";
import CncOriginPath from "@/app/component/constellation/constellations/cnc-origin.path";
import GemOriginPath from "@/app/component/constellation/constellations/gem-ogirin.path";
import VirOriginPath from "@/app/component/constellation/constellations/vir-origin.path";
import LeoOriginPath from "@/app/component/constellation/constellations/leo-ogirin.path";
import LibOriginPath from "@/app/component/constellation/constellations/lib-origin.path";
import PscOriginPath from "@/app/component/constellation/constellations/psc-origin.path";
import ScoOriginPath from "@/app/component/constellation/constellations/sco-origin-path";
import SgrOriginPath from "@/app/component/constellation/constellations/sgr-origin-path";
import TauOriginPath from "@/app/component/constellation/constellations/tau-origin.path";
import CapEffectPath from "@/app/component/constellation/effects/cap-effect.path";
import VirEffectPath from "@/app/component/constellation/effects/vir-effect.path";
import CncEffectPath from "@/app/component/constellation/effects/cnc-effect.path";
import GemEffectPath from "@/app/component/constellation/effects/gem-effect.path";
import LeoEffectPath from "@/app/component/constellation/effects/leo-effect.path";
import LibEffectPath from "@/app/component/constellation/effects/lib-effect.path";
import PscEffectPath from "@/app/component/constellation/effects/psc-effect.path";
import ScoEffectPath from "@/app/component/constellation/effects/sco-effect.path";
import SgrEffectPath from "@/app/component/constellation/effects/sgr-effect.path";
import TauEffectPath from "@/app/component/constellation/effects/tau-effect.path";

export type ConstellationComponentProps = {
    banzzacks: BanzzackEntity[];
};

type ConstellationComponents = {
    origin: FunctionComponent;
    effect: FunctionComponent<ConstellationComponentProps>;
};

const constellationMap: Record<string, ConstellationComponents> = {
    Agr: {origin: AgrOriginPath, effect: AqrEffectPath},
    Cap: {origin: CapOriginPath, effect: CapEffectPath},
    Cnc: {origin: CncOriginPath, effect: CncEffectPath},
    Gem: {origin: GemOriginPath, effect: GemEffectPath},
    Leo: {origin: LeoOriginPath, effect: LeoEffectPath},
    Lib: {origin: LibOriginPath, effect: LibEffectPath},
    Psc: {origin: PscOriginPath, effect: PscEffectPath},
    Sco: {origin: ScoOriginPath, effect: ScoEffectPath},
    Sgr: {origin: SgrOriginPath, effect: SgrEffectPath},
    Tau: {origin: TauOriginPath, effect: TauEffectPath},
    Vir: {origin: VirOriginPath, effect: VirEffectPath},
}

export default constellationMap;