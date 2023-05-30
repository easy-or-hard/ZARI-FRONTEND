import ZariHeader from "@/app/component/zari/zari-header";
import React from "react";

export default function ZariLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <ZariHeader/>
            {children}
        </>
    )
}