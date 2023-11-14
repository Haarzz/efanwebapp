import { io } from 'socket.io-client';

class WebsocketService {
  #socket;
  #previousNamaArduino;

  constructor(){
    this.#socket = io('http://localhost:4000');
    console.log("CONSTRUCTOR WEB SOCKET JALAN")
    this.#socket.on("connect", () => {
      console.log("socket berhasil connect");
    });
  }

  on(namaArduino , subscribeFuntion){
    console.log(`ngecoba subscribe ${namaArduino}`)
    if (this.#previousNamaArduino != undefined && this.#previousNamaArduino != namaArduino){
      this.#socket.removeListener(this.#previousNamaArduino);
    }

    this.#socket.on(namaArduino , subscribeFuntion)
  }
  
}
export default WebsocketService;