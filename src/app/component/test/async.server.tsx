import {ReactNode} from "react";

export default async function AsyncServer({children}: { children: ReactNode} ) {
    console.log('async Server')
    return (
        <div>
            비동기 서버 컴포넌트
            {children}
        </div>
    )
}