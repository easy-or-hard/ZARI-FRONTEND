export default function ModalPopup() {
    return (
        <div className={'absolute top-0 w-full h-full z-20'}>
            <div className={'absolute top-0 w-full h-full bg-zari_default_black opacity-80'}></div>
            <div>
                타이틀
            </div>
            <div>엑스버튼</div>
            <div>
                컨텐츠
            </div>
            <button className="
    flex
    items-center
    justify-center
    px-10 py-2
    absolute
    w-70
    h-12
    left-5
    top-104
    bg-zari_primary
    rounded-md
">버튼
            </button>
            )
        </div>
    )
}