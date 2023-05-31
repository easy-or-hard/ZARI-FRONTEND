import { BanzzackEntity } from "@/services/banzzack/entities/banzzack.entity";
import { useContext, useMemo } from "react";
import { BaseModalContext } from "@/app/component/ui/popup/modal/modal.provider";
import CloseButton from "@/app/component/ui/button/icon/close.button";
import ConfirmButton from "@/app/component/ui/button/confirm/confirm.button";

export type ReadBanzzackModalProps = {
  banzzack: BanzzackEntity;
};

/**
 * @description 반짝이 읽기 모달
 * @param {BanzzackEntity} banzzack
 * @constructor
 */
export default function ReadBanzzackModal({
  banzzack,
}: ReadBanzzackModalProps) {
  const baseModalContext = useContext(BaseModalContext);
  if (!baseModalContext) {
    throw new Error("BaseModalContext is null");
  }
  const { closeModal } = useMemo(() => baseModalContext, [baseModalContext]);

  return (
    <div className={"flex flex-col gap-2"}>
      <div className="flex justify-between items-center">
        <div
          className={
            "font-bold indent-1 overflow-hidden whitespace-nowrap overflow-ellipsis"
          }
        >
          <span className={"text-zari_txt_primary"}>{banzzack.byeolName}</span>{" "}
          의 반짝이
        </div>
        <CloseButton onClick={closeModal} />
      </div>
      <div
        className={"bg-zari_default_white bg-opacity-20 rounded-lg px-2 py-4"}
      >
        <div className={"h-32 max-h-60"}>{banzzack.content}</div>
      </div>
      <ConfirmButton
        colorType={"accept"}
        onClick={() => alert("아직 이벤트를 안 넣었음")}
      >
        <span className={"text-bold"}>나도 반짝이 붙이기</span>
      </ConfirmButton>
    </div>
  );
}
