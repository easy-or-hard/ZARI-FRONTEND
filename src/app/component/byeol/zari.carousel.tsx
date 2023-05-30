'use client'
import {ReactNode} from "react";
import Carousel from "nuka-carousel";

export default function ZariCarousel({children}: { children: ReactNode }) {
    return (
        <Carousel
            dragging={true}
        >
            {children}
        </Carousel>
    )
}