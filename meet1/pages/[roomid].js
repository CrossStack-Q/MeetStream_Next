import { useSocket } from "@/context/socket"
import usePeer from "@/hooks/usePeer";
import { useEffect } from "react";

const Room = () => {
    // useEffect(() => {
    //     socket?.on("connect" , () => {
    //       console.log(socket.id);
    //     });
    //   }, [socket])
    const socket = useSocket();
    const {peer , myId} =usePeer();
}

export default Room;  