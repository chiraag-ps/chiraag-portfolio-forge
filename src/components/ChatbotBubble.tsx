
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const ChatbotBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Version */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="relative">
          {isOpen ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-[400px] h-[600px] overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h3 className="font-medium text-primary">Chat with me</h3>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1">
                <iframe
                  src="https://www.chatbase.co/chatbot-iframe/GN0j1WXUmF2XzDYX0uq8Z"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="bg-transparent"
                ></iframe>
              </div>
            </div>
          ) : (
            <Button
              className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              onClick={() => setIsOpen(true)}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden fixed bottom-6 right-6 z-50">
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform">
              <MessageCircle className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-[70vh] flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-medium text-primary">Chat with me</h3>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/GN0j1WXUmF2XzDYX0uq8Z"
                width="100%"
                height="100%"
                frameBorder="0"
                className="bg-transparent"
              ></iframe>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default ChatbotBubble;
