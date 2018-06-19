const CONFIG = Object.freeze({
	"WANT_DEBUG_EXECUTION": "true"	
});


// watcher(data_to_observe, handle_data_changing)
// digest run watchers on scope
class Scope {
	constructor() {
		this.watchers = [];		
	}

	add_watcher(data_to_observe, data_change_callback) {
		let watcher = new ScopeWatcher(data_to_observe, data_change_callback);
		this.watchers.push(watcher);
	}

	run_watchers() {
		let current_watcher_data; 
		let old_watcher_data;

		this.watchers.forEach((watcher) => {
			current_watcher_data = watcher.data_to_observe;
			old_watcher_data = watcher.previous_data_value;

			if (current_watcher_data !== old_watcher_data) {
				watcher.previous_data_value = current_watcher_data;
				watcher.data_change_callback();
			}
		});
	}
}

class ScopeWatcher {
	constructor(data_to_observe, data_change_callback) {
		this.data_to_observe = data_to_observe;		
		this.data_change_callback = data_change_callback;
		this.previous_data_value = Symbol();
	}
}





function ea(listened_event) {
	CONFIG.WANT_DEBUG_EXECUTION && console.log("test");

}

document.addEventListener("DOMContentLoaded", ea);
