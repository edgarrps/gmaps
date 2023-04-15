import Input from "./Input"

export default function Form () {
    return(
    <form className='grid place-items-center space-y-5 pt-10'>
        <Input type='text' placeholder='teste' className='mt-4 rounded-full pl-3 w-80 h-8' />
    </form>
    )
}