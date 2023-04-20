import { ButtonProps } from "@/types/ButtonProps";

export default function Button({ className, text }: ButtonProps) {
    return (
        <button className={className}>{text}</button>
    )
}