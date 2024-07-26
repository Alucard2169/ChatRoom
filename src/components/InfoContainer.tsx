import userpfp from '../assets/userpfp.png'

const InfoContainer = () => {
    return ( 
        <section className="bg-green-100 rounded-md h-full p-4">
            <header>
                <h3 className='font-bold text-md'>23 members</h3>
            </header>
            <ul className='flex flex-col gap-4 mt-6'>
                <li className='flex gap-2 items-center'>
                    <img src={userpfp} width={45} className='rounded-md' height={45}/>
                    <p className='text-sm font-semibold'>Gintoki <span className='ml-2 text-white bg-MAIN_BG p-1 rounded-md'>admin</span></p>
                </li>

                <li className='flex gap-2 items-center'>
                    <img src={userpfp} width={45} className='rounded-md' height={45}/>
                    <p className='text-sm font-semibold'>Gintoki <span className='ml-2 text-white bg-MAIN_BG p-1 rounded-md'>admin</span></p>
                </li>
            </ul>
        </section>
     );
}
 
export default InfoContainer;