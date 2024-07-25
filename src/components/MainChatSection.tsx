import sendIcon from '../assets/icons/sendIcon.svg'

const MainChatSection = () => {
    return ( 
        <section className='flex flex-col h-full'>
            <header className='mb-6'>
                <section>
                <h1 className='font-bold text-xl'>Chat Name</h1>
                <p className='mt-2 font-light text-sm'>23 people, 10 online</p>
                </section>
            </header>
            <ul className='flex flex-col gap-4 w-full'>
                <li className='self-start bg-gray-200 w-fit p-2 rounded-md rounded-tl-none'>Hello</li>
                <li className='self-end bg-purple-400 w-fit p-2 rounded-md rounded-tr-none text-white'>Hi</li>
            </ul>
            <form className='mt-auto w-full'>
                <label htmlFor="message" className='relative'>
                    <img src={sendIcon} alt='send message icon' width={25} height={25} className='absolute top-0 right-5'/>
                    <input type="text" className='outline outline-1 outline-gray-500 rounded-md w-full p-2' placeholder='Press enter to send message' name="message" id="message" required/>
                </label>
            </form>
        </section>
     );
}
 
export default MainChatSection;