const RUNNING_IN_BROWSER = false

function ea_console() {
	!RUNNING_IN_BROWSER && log("msg")
}

document.addEventListener("DOMContentLoaded", ea_console);
