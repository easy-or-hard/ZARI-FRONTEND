import React from 'react';

type Props = {
    params: {
        name: string;
    }
}

export default function ConstellationPage({ params: { name }} : Props ) {
    return (<div>
        별 이름: {name}
    </div>)
}
