#!/usr/bin/env node


let PacketParser = require("./packet-parser");

let Readline = require("readline");
let FS = require("fs");

let WS = require("ws");

void function server() {
	

	FS.watchFile("packet-parser.js", (curr, prev) => {
		if (curr.mtime !== prev.mtime) {
			PacketParser = reload_module("./packet-parser");	
		}		
	}); 

}();

function initialize(name, port, max_payload) {
	let readline_interface = Readline.createInterface({
					input: process.stdin,
					output: process.stdout
				});
	readline_interface.setPrompt(prompt_str);
	// rl.prompt()

	let [proxy_server, server_to_forward] = initialize_proxy();

	readline_interface.on("line", (line) => {
		let trimmed_input = line.trim();

		switch (String(trimmed_input)) {
		case "exit":
			readline_interface.close();
		default:
			readline_interface.write("unknown command");
		}	
	});

	readline_interface.on("SIGINT", () => {
		readline_interface.close();
	});

	readline_interface.on("close", () => {
		readline_interface.write(`exiting ${prompt_str}`);
		server_to_forward.close();
		proxy_server.close();
		process.exit(0);
	});

}

function initialize_proxy() {
	let proxy_server = ;


	return {
		"proxy_server": proxy_server,
		"server_to_forward": server_to_forward_socket
	};
}

function setup_server(port, max_payload) {
    let proxy_server = WS.server({hostname: "127.0.0.1", port: 8080, maxPayload: 4096, clientTracking: true});
}

function reload_module(module_name) {
    delete require.cache[require.resolve(module_name)]                               
    return require(module)                                                      
}

// server (npm install ws)                                                  
    const server_socket = new WS("ws://something");                            
                                                                                
    proxy_server.on("connection", (client_socket) => {
		client_socket.on("message", (msg) => {                                      
            console.log(`[client] --> ${msg}`);                                 
            server_socket.on("open", () => {
				server_socket.send(msg); 
			});                                        
    	});
	});

   server_socket.on("message", (msg) => {                                 
            console.log(`[server] <-- ${msg}`);                                 
            proxy_server.clients[0].send(msg);                                        
   })
