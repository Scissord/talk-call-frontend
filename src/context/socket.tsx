import { useAppSelector } from "@hooks";
import { ICustomer, IMessage } from "@interfaces";
import { RootState } from "@store/index";
import { getUser } from "@store/reducers/authSlice";
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";

// Типы для контекста
interface SocketContextType {
  socket: WebSocket | null;
  newMessage: IMessage | null;
  raiseConversation: any;
  newCustomer: ICustomer | null;
  isCardBlock: boolean | undefined;
}

// Типы для пропсов провайдера
type SocketProps = {
  children: ReactNode;
};

// Создаем контекст с правильными типами
const SocketContext = createContext<SocketContextType | undefined>(undefined);

// Хук для использования контекста
export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocketContext must be used within a SocketContextProvider");
  }
  return context;
};

// Провайдер для контекста с указанием типов
export const SocketContextProvider: FC<SocketProps> = ({ children }) => {
  const user = useAppSelector((state: RootState) => getUser(state));

  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [newMessage, setNewMessage] = useState<IMessage | null>(null);
  const [raiseConversation, setRaiseConversation] = useState<any>(null);
  const [newCustomer, setNewCustomer] = useState<ICustomer | null>(null);
  const [isCardBlock, setIsCardBlock] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (user) {
      const userId = user.id;
      const ws = new WebSocket(`wss://ai.restrain.pw/ws/${userId}`);

      ws.onopen = () => {
        console.log("WebSocket connected");
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if(data.type === "new_message") {
          const message = JSON.parse(data.message);
          if(+user.role.id === 1 || +user.role.id === 2) {
            return;
          } else {
            setNewMessage(message);
          };
        };
        if(data.type === "up_customer") {
          const customer = JSON.parse(data.customer);
          customer.counter = 1;
          if(+user.role.id === 1 || +user.role.id === 2) {
            return;
          } else {
            setRaiseConversation(customer);
          };
        };
        if(data.type === "updated_status") {
          const customer = JSON.parse(data.customer);
          if(+user.role.id === 1 || +user.role.id === 2) {
            return;
          } else {
            setNewCustomer(customer);
          };
        };
        if(data.type === "onDragStart") {

          if(+user.role.id === 1 || +user.role.id === 2) {
            return;
          } else {
            if(+user.id === +data.user_id) {
              setIsCardBlock(false);
            } else {
              setIsCardBlock(true);
            };
          };
        };
      };

      ws.onclose = () => {
        console.log("WebSocket disconnected");
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      setSocket(ws);

      return () => {
        ws.close();
      };
    }
  }, [user]);

  return (
    <SocketContext.Provider
      value={{
        socket,
        newMessage,
        raiseConversation,
        newCustomer,
        isCardBlock,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
