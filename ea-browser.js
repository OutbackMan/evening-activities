const RUNNING_IN_BROWSER = true

function ea_browser() {
	!RUNNING_IN_BROWSER && log("msg")
}
