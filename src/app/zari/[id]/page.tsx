import Zari from "@/components/zari/zari";

type Props = {
    params: {
        id: number;
    }
}

export default function ZariPage({params: {id}}: Props) {
    return (
        /* @ts-expect-error Async Server Component */
        <Zari params={{id}}/>
    )
}
