import { io } from "socket.io-client";

const socket = io("http://192.168.0.105:3000");

export default socket;
