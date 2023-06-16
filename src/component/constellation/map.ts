import { FunctionComponent } from "react";
import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";
import AqrOriginPath from "@/component/constellation/constellations/aqr-origin.path";
import AqrEffectPath from "@/component/constellation/effects/agr-effect.path";
import AqrWritingPath from "@/component/constellation/writing/agr-wrting.path";
import CapOriginPath from "@/component/constellation/constellations/cap-origin.path";
import CapEffectPath from "@/component/constellation/effects/cap-effect.path";
import CapWritingPath from "@/component/constellation/writing/cap-writing.path";
import CncOriginPath from "@/component/constellation/constellations/cnc-origin.path";
import CncEffectPath from "@/component/constellation/effects/cnc-effect.path";
import CncWritingPath from "@/component/constellation/writing/cnc-writing.path";
import GemOriginPath from "@/component/constellation/constellations/gem-ogirin.path";
import GemEffectPath from "@/component/constellation/effects/gem-effect.path";
import GemWritingPath from "@/component/constellation/writing/gem-writing.path";
import LeoOriginPath from "@/component/constellation/constellations/leo-ogirin.path";
import LeoEffectPath from "@/component/constellation/effects/leo-effect.path";
import LeoWritingPath from "@/component/constellation/writing/leo-writing.path";
import LibOriginPath from "@/component/constellation/constellations/lib-origin.path";
import LibEffectPath from "@/component/constellation/effects/lib-effect.path";
import LibWritingPath from "@/component/constellation/writing/lib-writing.path";
import PscOriginPath from "@/component/constellation/constellations/psc-origin.path";
import PscEffectPath from "@/component/constellation/effects/psc-effect.path";
import PscWritingPath from "@/component/constellation/writing/psc-writing.path";
import ScoOriginPath from "@/component/constellation/constellations/sco-origin-path";
import ScoEffectPath from "@/component/constellation/effects/sco-effect.path";
import ScoWritingPath from "@/component/constellation/writing/sco-writing.path";
import SgrOriginPath from "@/component/constellation/constellations/sgr-origin-path";
import SgrEffectPath from "@/component/constellation/effects/sgr-effect.path";
import SgrWritingPath from "@/component/constellation/writing/sgr-writing.path";
import TauOriginPath from "@/component/constellation/constellations/tau-origin.path";
import TauEffectPath from "@/component/constellation/effects/tau-effect.path";
import TauWritingPath from "@/component/constellation/writing/tau-writing.path";
import VirOriginPath from "@/component/constellation/constellations/vir-origin.path";
import VirEffectPath from "@/component/constellation/effects/vir-effect.path";
import VirWritingPath from "@/component/constellation/writing/vir-writing.path";
import Cap from "@/component/constellation/icons/Cap";
import Cnc from "@/component/constellation/icons/Cnc";
import Gem from "@/component/constellation/icons/Gem";
import Leo from "@/component/constellation/icons/Leo";
import Lib from "@/component/constellation/icons/Lib";
import Psc from "@/component/constellation/icons/Psc";
import Sco from "@/component/constellation/icons/Sco";
import Aqr from "@/component/constellation/icons/Aqr";
import Tau from "@/component/constellation/icons/Tau";
import Vir from "@/component/constellation/icons/Vir";
import Sgr from "@/component/constellation/icons/Sgr";
import Ari from "@/component/constellation/icons/Ari";
import AriOriginPath from "@/component/constellation/constellations/ari-origin.path";
import AriEffectPath from "@/component/constellation/effects/ari-effect.path";
import AriWritingPath from "@/component/constellation/writing/ari-writing.path";

export type ConstellationEffectProps = {
  banzzacks: BanzzackEntity[];
};

export type ConstellationWriterProps = {
  locks: Number[];
};

type ConstellationComponents = {
  icon: FunctionComponent;
  origin: FunctionComponent;
  effect: FunctionComponent<ConstellationEffectProps>;
  writing: FunctionComponent<ConstellationWriterProps>;
};

const constellationMap: Record<string, ConstellationComponents> = {
  Ari: {
    icon: Ari,
    origin: AriOriginPath,
    effect: AriEffectPath,
    writing: AriWritingPath,
  },
  Tau: {
    icon: Tau,
    origin: TauOriginPath,
    effect: TauEffectPath,
    writing: TauWritingPath,
  },
  Gem: {
    icon: Gem,
    origin: GemOriginPath,
    effect: GemEffectPath,
    writing: GemWritingPath,
  },

  Cnc: {
    icon: Cnc,
    origin: CncOriginPath,
    effect: CncEffectPath,
    writing: CncWritingPath,
  },
  Leo: {
    icon: Leo,
    origin: LeoOriginPath,
    effect: LeoEffectPath,
    writing: LeoWritingPath,
  },
  Vir: {
    icon: Vir,
    origin: VirOriginPath,
    effect: VirEffectPath,
    writing: VirWritingPath,
  },
  Lib: {
    icon: Lib,
    origin: LibOriginPath,
    effect: LibEffectPath,
    writing: LibWritingPath,
  },
  Sco: {
    icon: Sco,
    origin: ScoOriginPath,
    effect: ScoEffectPath,
    writing: ScoWritingPath,
  },
  Sgr: {
    icon: Sgr,
    origin: SgrOriginPath,
    effect: SgrEffectPath,
    writing: SgrWritingPath,
  },
  Cap: {
    icon: Cap,
    origin: CapOriginPath,
    effect: CapEffectPath,
    writing: CapWritingPath,
  },
  Aqr: {
    icon: Aqr,
    origin: AqrOriginPath,
    effect: AqrEffectPath,
    writing: AqrWritingPath,
  },
  Psc: {
    icon: Psc,
    origin: PscOriginPath,
    effect: PscEffectPath,
    writing: PscWritingPath,
  },
};

export default constellationMap;
