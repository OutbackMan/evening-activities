import * as CONFIG from "./modules/config.js";

function ea(listened_event) {
	CONFIG.WANT_DEBUG_EXECUTION && console.log("test");
}

document.addEventListener("DOMContentLoaded", ea);
// typeof, nodeName
