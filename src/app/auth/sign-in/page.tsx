import SignInList from "@/components/auth/signInList";
import {Identity} from "@/components/Identity";

export default function SignInComponent() {
    return (
        <div className='h-full flex flex-col justify-center'>
            <div className='h-1/2 flex flex-col justify-center'>
                <Identity/>
            </div>
            <div className='h-1/2'><SignInList/></div>
        </div>
    )
}