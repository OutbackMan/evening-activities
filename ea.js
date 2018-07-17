    // server (npm install ws)                                                  
    let WS = require("ws");

    let slither_proxy = WS.server({port: 8080});                                       
                                                                                
    const slither_server = new WS("ws://something");                            
                                                                                
    server.on("connection", (websocket) => {                                    
        websocket.on("message", (msg) => {                                      
            console.log(`[client] --> ${msg}`);                                 
            slither_server.send(msg);                                           
        });                                                                        
                                                                                
        slither_server.on("message", (msg) => {                                 
            console.log(`[server] <-- ${msg}`);                                 
            server.clients[0].send(msg);                                        
        });                                                                     
                                                                                
        websocket.on("close", () => {                                           
            console.log("client lost");                                         
        });                                                                     
    });                                                                         
                                                                                
    while (true) {                                                              
        cmd = input("cmd: ");                                                   
        if cmd[4:] == "some_cmd":                                               
    }                                                                           
                                                                                
// requireUncached("./parser");                                                 
function requireUncached(module){                                               
    delete require.cache[require.resolve(module)]                               
    return require(module)                                                      
}                                                                               
fs.watch("somedir", (event, filename)) 

function download_local_resources() {
	download_local_resource(window.location.href);
	window.performance.getEntriesByType("resource").forEach((resource) => {
		if (resource.name.substring(0, window.location.href.length) === window.location.href) {
			download_local_resource(resource.name);
		}
	});
}

function download_local_resource(resource_url) {
	let resource_url_obj = new URL(resource_url);
	let resource_file_name = resource_url_obj.pathname.replace("/", "-");
	let download_a_tag = document.createElement("a");
        download_a_tag.href = resource_url;
        download_a_tag.download = resource_file_name;
        document.body.appendChild(download_a_tag);
       	download_a_tag.click();
        document.body.removeChild(download_a_tag);
}




const CONFIG = Object.freeze({
	"WANT_DEBUG_EXECUTION": true,
	"INIT_WATCHER_DATA_VALUE": Symbol("__default__")
});


/***************** SCOPE ******************************************************/
class Scope {
	constructor() {
		this.watchers = [];		
	}

	add_watcher(get_data_to_observe, data_change_callback) {
		let watcher = new ScopeWatcher(
							get_data_to_observe, 
							data_change_callback || function() {} // nop function
						);

		this.watchers.push(watcher);
	}

	$run_watchers_once() {
		let current_watcher_data; 
		let old_watcher_data;
		let watched_data_has_changed = false;

		this.watchers.forEach((watcher) => {
			current_watcher_data = watcher.get_data_to_observe();
			old_watcher_data = watcher.previous_data_value;

			if (current_watcher_data !== old_watcher_data) {
				watcher.previous_data_value = current_watcher_data;
				watcher.data_change_callback(
										current_watcher_data,
										old_watcher_data === watcher.INIT_DATA_VALUE ? current_watcher_data : old_watcher_data
									);
				watched_data_has_changed = true;
			}
		});

		return watched_data_has_changed;
	}

	// ensure watchers that affect other watchers are handled appropriately 
	run_watchers() {
		const MAX_WATCH_ITERATION = 10;
		let watch_iteration_count = 0;
		let watched_data_has_changed;		

		do {
			watched_data_has_changed = this.$run_watchers_once();	
			// prevent two watchers changing each other, causing infinite loop
			if (watched_data_has_changed && watch_iteration_count == MAX_WATCH_ITERATION) {
				return;	
			}
		} while (watched_data_has_changed);
	}
}

class ScopeWatcher {
	constructor(get_data_to_observe, data_change_callback) {
		this.get_data_to_observe = get_data_to_observe;		
		this.data_change_callback = data_change_callback;
		this.INIT_DATA_VALUE = CONFIG.INIT_WATCHER_DATA_VALUE;
	}
}
/***************** END(SCOPE) *************************************************/





function ea(listened_event) {
	CONFIG.WANT_DEBUG_EXECUTION && console.log("test");
}

document.addEventListener("DOMContentLoaded", ea);
