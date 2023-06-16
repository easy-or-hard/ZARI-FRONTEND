import { useContext, useMemo } from "react";
import { BaseModalContext } from "@/component/ui/popup/modal/modal.provider";
import CloseButton from "@/component/ui/button/icon/close.button";
import ConfirmButton from "@/component/ui/button/confirm/confirm.button";
import { useBanzzack } from "@/services/banzzack/use.banzzack";
import { BanzzackUnique } from "@/services/byeol/api.byeol";

/**
 * @description 반짝이 읽기 모달
 * @constructor
 * @param {BanzzackUnique} key
 */
export default function ReadBanzzackModal(key: BanzzackUnique) {
  const baseModalContext = useContext(BaseModalContext);
  if (!baseModalContext) {
    throw new Error("BaseModalContext is null");
  }
  const { closeModal } = useMemo(() => baseModalContext, [baseModalContext]);

  const { data } = useBanzzack(key);

  if (!data) return <>loading</>;
  return (
    <div className={"flex flex-col gap-2"}>
      <div className="flex justify-between items-center">
        <div
          className={
            "font-bold indent-1 overflow-hidden whitespace-nowrap overflow-ellipsis"
          }
        >
          <span className={"text-zari_txt_primary"}>{data.byeolName}</span> 의
          반짝이
        </div>
        <CloseButton onClick={closeModal} />
      </div>
      <div className={"bg-zari_btn_disabled rounded-lg px-2 py-4"}>
        <div className={"h-32 max-h-60"}>{data.content}</div>
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
