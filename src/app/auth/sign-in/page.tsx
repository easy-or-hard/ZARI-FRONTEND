import SignInList from "@/app/component/auth/signInList";

export default function SignInComponent() {
    return (
        <div className='h-full flex flex-col justify-center'>
            <div className='h-1/2 flex flex-col justify-center'>
                <h2 className="font-SUIT text-1xl font-normal leading-30 tracking-0 text-center">
                    우리의 이야기
                </h2>
                <h1 className="font-SUIT text-7xl font-bold leading-63 tracking-0.2 text-center">
                    ZARI
                </h1>
            </div>
            <div className='h-1/2'><SignInList/></div>
        </div>
    )
}