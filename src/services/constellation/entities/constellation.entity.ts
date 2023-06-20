export type ConstellationUniqueKey = [ConstellationEntity["constellationIAU"]];

export type ConstellationEntity = {
  name: string;
  constellationIAU: string;
  constellationCount: number;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  createdAt: Date;
  updatedAt: Date;
};
