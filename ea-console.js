import * as EA from "./modules/ea.js" // export function name() {}
import * as Log from "./modules/utils/log.js"
import * as Common from "./modules/common.js"

const RUNNING_IN_BROWSER = false

function ea_console(event) {
	!RUNNING_IN_BROWSER && Log.log("msg")
		
	EA.run() // typeof, nodeName
}

document.addEventListener("DOMContentLoaded", ea_console);
