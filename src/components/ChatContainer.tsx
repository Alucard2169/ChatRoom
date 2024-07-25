import ChatList from "./ChatList";
import MainChatSection from "./MainChatSection";

const ChatContainer = () => {
    return ( 
        <main className="bg-white h-full flex gap-2 rounded-md p-1">
            <section className="w-[25%] h-full rounded-md bg-gray-100 p-2">
                <ChatList/>
            </section>
            <section className="w-[75%] h-full">
                <MainChatSection/>
            </section>
        </main>
     );
}
 
export default ChatContainer;