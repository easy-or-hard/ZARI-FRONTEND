import React from 'react';

type Props = {
    params: {
        byeolName: string;
    }
}

export default function ConstellationPage({ params: { byeolName }} : Props ) {
    return (<div>
        별 이름: {byeolName}
    </div>)
}
