import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    isEditable?: boolean;
    raiting: number;
    setRaiting?: (raiting:number) => void
}