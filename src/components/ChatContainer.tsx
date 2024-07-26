import ChatList from "./ChatList";
import MainChatSection from "./MainChatSection";

const ChatContainer = () => {
    return ( 
        <main className="bg-white h-full flex gap-2 rounded-md p-1">
            <section className="w-[30%] h-full rounded-md bg-gray-200 p-2">
                <ChatList/>
            </section>
            <section className="w-[70%] h-full">
                <MainChatSection/>
            </section>
        </main>
     );
}
 
export default ChatContainer;