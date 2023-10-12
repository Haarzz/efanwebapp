import { io } from 'socket.io-client';
import axios from 'axios';

class WebsocketService {
  #socket;
  #modelId;
  #refresh;

  constructor(){
    this.#socket = io('http://localhost:4000');
    this.#socket.on("connect", () => {
      console.log("socket berhasil connect");
    });

    // eslint-disable-next-line no-unused-vars
    this.#socket.on('message', (message) => {
      // Trigger a button click programmatically or perform any other action
      if (this.#modelId !== undefined){
        axios.put(`http://localhost:4000/api/increment-transaction/${this.#modelId}`) // Update with your API endpoint
        .then(
          // eslint-disable-next-line no-unused-vars
          (response) => {
            this.#refresh();
          }
        )
        .catch((error) => console.error("Error update result :", error));
      }
    });
  }

  setModelId(newModelId , refresh){
    this.#modelId = newModelId;
    this.#refresh = refresh;
  }
  
}
export default WebsocketService;