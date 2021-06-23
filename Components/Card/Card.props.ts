import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Cardrops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    children: ReactNode;
    color?: 'white' | 'blue';
}