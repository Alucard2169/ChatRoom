import chatIcon from '../assets/icons/chatIcon.svg'
import archiveIcon from '../assets/icons/archiveIcon.svg'
import folderIcon from '../assets/icons/folderIcon.svg'
import logoutIcon from '../assets/icons/logoutIcon.svg'
import settingIcon from '../assets/icons/settingIcon.svg'
import userIcon from '../assets/icons/userIcon.svg'

const NavButtons = ({icon, text, style = null} : {icon: any, text: string,style: null | string}) => {
    return (
        <li className={`flex flex-col items-center text-center ${style} hover:bg-black p-2 rounded-md transition-all duration-100 ease-linear`}>
            <img src={icon} alt={`${text} icon`} width={20} height={20}/>
            <span className='text-xs text-gray-500 font-medium'>{text}</span>
        </li>
    )
}

const Navbar = () => {
    return ( 
        <nav className="flex flex-col items-center w-[5%] gap-4 bg-MAIN_BG h-full">
            <span className="bg-PRIMARY_BG text-black font-black p-2 rounded-md">Chaty</span>
            
            <ul className='h-1/2 flex flex-col justify-end'>
                <NavButtons icon={chatIcon} text="All chats" style="mb-auto"/>
                <NavButtons icon={folderIcon} text="Add Group" style={null}/>
                <NavButtons icon={archiveIcon} text="Archive Chats" style={null}/>
            </ul>
            <hr className='border'/>
            <ul className='h-1/4 justify-between flex flex-col w-full'>
                <NavButtons icon={userIcon} text="Profile" style={null}/>
                <NavButtons icon={settingIcon} text="Edit" style={null}/>
            </ul>
            
            <button className="mt-auto flex flex-col items-center bg-PRIMARY_BG rounded-md p-2">
            <img src={logoutIcon} alt='logout icon' width={25} height={25}/>
                <span className='text-black font-black text-sm'>Logout</span>
                </button>
        </nav>
     );
}
 
export default Navbar;