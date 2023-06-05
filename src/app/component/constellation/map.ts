import { FunctionComponent } from "react";
import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";
import AqrOriginPath from "@/app/component/constellation/constellations/aqr-origin.path";
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
import AqrEffectPath from "@/app/component/constellation/effects/agr-effect.path";
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
import AqrWritingPath from "@/app/component/constellation/writing/agr-wrting.path";
import VirWritingPath from "@/app/component/constellation/writing/vir-writing.path";
import CapWritingPath from "@/app/component/constellation/writing/cap-writing.path";
import CncWritingPath from "@/app/component/constellation/writing/cnc-writing.path";
import GemWritingPath from "@/app/component/constellation/writing/gem-writing.path";
import LeoWritingPath from "@/app/component/constellation/writing/leo-writing.path";
import LibWritingPath from "@/app/component/constellation/writing/lib-writing.path";
import PscWritingPath from "@/app/component/constellation/writing/psc-writing.path";
import ScoWritingPath from "@/app/component/constellation/writing/sco-writing.path";
import SgrWritingPath from "@/app/component/constellation/writing/sgr-writing.path";
import TauWritingPath from "@/app/component/constellation/writing/tau-writing.path";

export type ConstellationComponentProps = {
  banzzacks: BanzzackEntity[];
};

export type ConstellationWriterProps = {
  lockMap: Map<number, boolean>;
};

type ConstellationComponents = {
  origin: FunctionComponent;
  effect: FunctionComponent<ConstellationComponentProps>;
  writing: FunctionComponent<ConstellationWriterProps>;
};

const constellationMap: Record<string, ConstellationComponents> = {
  Aqr: {
    origin: AqrOriginPath,
    effect: AqrEffectPath,
    writing: AqrWritingPath,
  },
  Cap: {
    origin: CapOriginPath,
    effect: CapEffectPath,
    writing: CapWritingPath,
  },
  Cnc: {
    origin: CncOriginPath,
    effect: CncEffectPath,
    writing: CncWritingPath,
  },
  Gem: {
    origin: GemOriginPath,
    effect: GemEffectPath,
    writing: GemWritingPath,
  },
  Leo: {
    origin: LeoOriginPath,
    effect: LeoEffectPath,
    writing: LeoWritingPath,
  },
  Lib: {
    origin: LibOriginPath,
    effect: LibEffectPath,
    writing: LibWritingPath,
  },
  Psc: {
    origin: PscOriginPath,
    effect: PscEffectPath,
    writing: PscWritingPath,
  },
  Sco: {
    origin: ScoOriginPath,
    effect: ScoEffectPath,
    writing: ScoWritingPath,
  },
  Sgr: {
    origin: SgrOriginPath,
    effect: SgrEffectPath,
    writing: SgrWritingPath,
  },
  Tau: {
    origin: TauOriginPath,
    effect: TauEffectPath,
    writing: TauWritingPath,
  },
  Vir: {
    origin: VirOriginPath,
    effect: VirEffectPath,
    writing: VirWritingPath,
  },
};

export default constellationMap;
