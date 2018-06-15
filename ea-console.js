import * as EA from "./modules/ea.js"; // export function name() {}
import * as Log from "./modules/utils/log.js";
import * as Common from "./modules/common.js"; // include export class ArgumentError()

/* ENUMS
const LEVELS = Object.freeze({"DEBUG": "0", "RELEASE": "1"});
*/
const IN_DEBUG_MODE = true;
const WANT_PHANTOM_JS_EXECUTION = false;

function main(event) {
	IN_DEBUG_MODE && console.log("test");
	IN_DEBUG_MODE && console.warn("test2");
	console.error("test3");
	
	EA.run(); // typeof, nodeName
	
	WANT_PHANTOM_JS_EXECUTION && phantom.exit();
}

document.addEventListener("DOMContentLoaded", main);
