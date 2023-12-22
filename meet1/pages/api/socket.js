import { Server } from "socket.io";


const SocketHandler = (req,res) => {
    console.log("call api")
    if(res.socket.server.io){
        console.log("Already on")
    }
    else{
    const io = new Server(res.socket.server);
    res.socket.server.io = io

    io.on('connection' , (socket) => {
        console.log("server is on")
    })
}
    res.end();
}

export default SocketHandler;