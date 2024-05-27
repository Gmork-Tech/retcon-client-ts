import {w3cwebsocket} from "websocket";


export class Retcon {
    private client : w3cwebsocket;


    public constructor(client : w3cwebsocket) {
        this.client = client;
        client.onerror = function() : void {
            console.log('Connection Error');
        };

        client.onopen = function() : void {
            console.log('WebSocket Client Connected');
        };

        client.onclose = function() : void {
            console.log('echo-protocol Client Closed');
        };

        client.onmessage = function(e : MessageEvent) : void {
            if (typeof e.data === 'string') {
                console.log("Received: '" + e.data + "'");
            }
        };
    }



}