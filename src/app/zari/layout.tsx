import Header from "@/components/header";
import React from "react";

export default function ByeolLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}