import Button from "./Button"
import Input from "./Input"

export default function Form () {
    return(
    <form className='grid place-items-center space-y-5 pt-10'>
        <Input type='text' placeholder='origem' className='mt-4 rounded-full pl-3 w-80 h-8' />
        <Input type='text' placeholder='destino' className='mt-4 rounded-full pl-3 w-80 h-8' />
        <Button text='botão' className='text-white font-bold bg-blue-400 w-20 rounded-full hover:bg-blue-300'/>
    </form>
    )
}