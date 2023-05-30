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

export type ConstellationComponentProps = {
    banzzacks: BanzzackEntity[];
};

type ConstellationComponents = {
    origin: FunctionComponent;
    effect: FunctionComponent<ConstellationComponentProps>;
};

const constellationMap: Record<string, ConstellationComponents> = {
    Agr: {origin: AgrOriginPath, effect: AqrEffectPath},
    Cap: {origin: CapOriginPath, effect: AqrEffectPath},
    Cnc: {origin: CncOriginPath, effect: AqrEffectPath},
    Gem: {origin: GemOriginPath, effect: AqrEffectPath},
    Leo: {origin: LeoOriginPath, effect: AqrEffectPath},
    Lib: {origin: LibOriginPath, effect: AqrEffectPath},
    Psc: {origin: PscOriginPath, effect: AqrEffectPath},
    Sco: {origin: ScoOriginPath, effect: AqrEffectPath},
    Sgr: {origin: SgrOriginPath, effect: AqrEffectPath},
    Tau: {origin: TauOriginPath, effect: AqrEffectPath},
    Vir: {origin: VirOriginPath, effect: AqrEffectPath},
}

export default constellationMap;