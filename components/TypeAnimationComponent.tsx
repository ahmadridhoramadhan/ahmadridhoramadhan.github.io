'use client'
import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationComponent({ sequence }: { sequence: Array<string | number> }) {
    return (
        <TypeAnimation sequence={sequence} wrapper="p" speed={30} className="whitespace-pre-line" />
    )
}