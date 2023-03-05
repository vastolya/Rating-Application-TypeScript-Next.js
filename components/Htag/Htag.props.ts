import { ReactNode } from "react";

export interface HtagProps {
    tags: 'h1' | 'h2' | 'h3'
    children: ReactNode
}