import { io } from "socket.io-client";

const socket = io("http://10.112.5.156:3000");

export default socket;
