"use client";

import useBanzzack from "@/services/banzzack/use.banzzack";

// props
const uniqueBanzzack = {
  zariId: 5,
  starNumber: 45,
};

export default function Page() {
  const { data: banzzack, post, patch } = useBanzzack(uniqueBanzzack);

  const handlePost = async () => {
    const creatBanzzack = {
      content: "✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨",
    };

    await post(creatBanzzack);
  };

  const handlePatch = async () => {
    const patchBanzzack = {
      content: "😱😱😱😱😱😱😱😱😱😱",
    };
    await patch(patchBanzzack);
  };

  return (
    <>
      <div>banzzack : {banzzack && banzzack.content}</div>
      <button type="button" onClick={handlePost}>
        붙이기
      </button>
      <hr />
      <button type="button" onClick={handlePatch}>
        바꾸기
      </button>
      <hr />
    </>
  );
}
