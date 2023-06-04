import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";

export type PostPatchBanzzackDto = Pick<BanzzackEntity, "content">;
