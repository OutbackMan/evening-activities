import * as EA from "./modules/ea.js"; // export function name() {}
import * as Log from "./modules/utils/log.js";
import * as Common from "./modules/common.js"; // include export class ArgumentError()

const RUNNING_IN_BROWSER = false; // don't think this is necessary

function ea_console(event) {
	Log.set_level(Log.LEVELS.DEBUG);
	
	!RUNNING_IN_BROWSER && Log.info("msg");
		
	EA.run(); // typeof, nodeName
	
	phantom.exit();
}

document.addEventListener("DOMContentLoaded", ea_console);

// log.js
export const LEVELS = Object.freeze({"DEBUG": "0", "RELEASE": "1"});

let current_log_level = LEVELS.DEBUG;

export function set_level() {
	// check argument type
	current_log_level = desired_log_level;
}

const INFO_CONSOLE_HANDLE = console.log.bind(window.console); // use these to preserve line numbers
const WARN_CONSOLE_HANDLE = console.warn.bind(window.console);
const ERROR_CONSOLE_HANDLE = console.error.bind(window.console);

export function info(msg) {
	if (current_log_level < LEVELS.RELEASE) {
		console.log(msg);
	} else {
		return;
	}	
}

export function warn(msg) {
	if (current_log_level < LEVELS.RELEASE) {
		console.warn(msg);
	} else {
		return;
	}
}

export function error(msg) {
	console.error(msg);
}
