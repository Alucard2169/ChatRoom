import userpfp from "../assets/userpfp.png"
import searchIcon from "../assets/icons/searchIcon.svg"
import pinIcons from '../assets/icons/pinIcons.svg'
import addCircle from '../assets/icons/addCircle.svg'

const ChatList = () => {
    return ( 
    <section className="relative h-full">
        <form className="mb-6">
            <label htmlFor="chatSearch" className="relative">
                <img src={searchIcon} alt="search bar icon" width={20} height={20} className="absolute left-1 top-0"/>
            <input className="outline-none rounded-md w-full p-2 pl-8 text-sm" id="chatSearch" name="chatSearch" placeholder="Search"/>
            </label>
        </form>

        <ul className="flex flex-col gap-4 overflow-y-scroll h-[80%] scroll-smooth">
            
            <li className="flex w-full gap-2 hover:bg-gray-300 p-1 rounded-md">
                <img src={userpfp} alt="user pfp" width={50} height={50} className="rounded-md"/>
                <section className="flex justify-between w-full">
                    <article className="flex flex-col justify-between">
                    <h4 className="font-bold text-md">Chat Name</h4>
                    <p className="font-light text-xs">last message...</p>
                    </article>
                    <article className="flex flex-col gap-2 items-end">
                        <span className="text-xs">10min</span>
                       <button className="hover:bg-red-300 p-1 rounded-md"><img src={pinIcons} alt="pinned chat icon" width={20} height={20}/></button>
                    </article>
                </section>
            </li>
        </ul>
        <button className="absolute bottom-0 right-2 hover:scale-110"><img src={addCircle} alt="add chat icon" height={35} width={35}/></button>
    </section>
    );
}
 
export default ChatList;