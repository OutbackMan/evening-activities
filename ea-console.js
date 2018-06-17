import * as EA from "./modules/ea.js"; // export function name() {}
import * as Common from "./modules/common.js"; // include export class ArgumentError()
import * as CONFIG from "./modules/config.js";

/* ENUMS
const LEVELS = Object.freeze({"DEBUG": "0", "RELEASE": "1"});

constants, enums, module namespace == UPPER_SNAKE_CASE
classes, objects == ThisCase
functions, variables == lower_snake_case
*/

function main(listened_event) {
	CONFIG.haIN_DEBUG_MODE && console.log("test");
	CONFIG.IN_DEBUG_MODE && console.warn("test2");
	console.error("test3");
	
	EA.run(); // typeof, nodeName
	
	CONFIG.WANT_PHANTOM_JS_EXECUTION && phantom.exit();
}

document.addEventListener("DOMContentLoaded", main);
