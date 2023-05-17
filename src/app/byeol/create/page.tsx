import React from "react";
import {cookies} from "next/headers";
import {JWT} from "@/lib/const";
import {redirect} from "next/navigation";
import Form from "@/app/byeol/create/form";
import UserService from "@/service/user/user.service";
import {OkResponseDto} from "@/service/common/dto/ok.response.dto";
import {UserEntity} from "@/service/user/dto/entities/user.entity";

export default async function Create() {
    const jwt = cookies().get(JWT.ACCESS_TOKEN);
    const {key, fetcher} = UserService.findMe(jwt);
    const response = await fetcher(key);

    switch (response.statusCode) {
        case 200: // 정상 응답
            if ((response as OkResponseDto<UserEntity>).data.byeolId) {
                redirect('/byeol/me');
            }
            break;
        case 401: // 비인증 사용자, 이 화면은 인증 사용자에게만 보여줌
            redirect('/auth/sign-in');
            break;
        // 그 외의 케이스가 있을까?
    }

    return (
        <>
            <Form/>
        </>
    )
}