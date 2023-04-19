import { InputProps } from '@/types/InputProps'

export default function Input({ type, placeholder, className }: InputProps) {

    return (<input type={type} placeholder={placeholder} className={className} />)
}