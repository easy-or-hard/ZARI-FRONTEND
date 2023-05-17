import React from "react";
import {cookies} from "next/headers";
import {JWT} from "@/lib/const";
import {redirect} from "next/navigation";
import UserService from "@/service/user/user.service";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";
import {UserEntity} from "@/service/user/dto/entities/user.entity";
import SignInComponent from "@/app/auth/sign-in/sign-in";

export default async function SignIn() {
    const jwt = cookies().get(JWT.ACCESS_TOKEN);
    const {key, fetcher} = UserService.findMe(jwt);
    const response = await fetcher(key);

    switch (response.statusCode) {
        case 200: // 정상 응답
            if ((response as OkResponseDto<UserEntity>).data.byeolId) {
                redirect('/byeol/me');
            }
            break;
        case 401: // 비인증 사용자, 비인증 사용자는 이 화면을 봐야하기 때문에 아무것도 안 합니다.
            break;
    }

    return (
        <>
            <SignInComponent/>
        </>
    )
}