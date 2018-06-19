// rename to .mjs files
// lint, minify

function handle_command_line_arguments() {
	let command_line_arguments = process.argv.slice(2);
	let command_line_arguments_are_valid = true;
	
	command_line_arguments.forEach((argument_str) => {
		if (argument_str[0] == '-') {
			argument_str.forEach((argument) => {
				switch (argument) {
				case 'd':			
					CONFIG.WANT_DEBUG_EXECUTION = true;
					break;
				case 'r':
					CONFIG.WANT_DEBUG_EXECUTION = false;
					break;
				case 'p':
					CONFIG.WANT_PHANTOM_JS_EXECUTION = true;
					break;
				case 'b':
					CONFIG.WANT_PHANTOM_JS_EXECUTION = true;
					break;
				default:
					console.error(`Illegal option: ${argument}`);
					command_line_arguments_are_valid = false;
					goto finish;
				}
			});
		}
	});

finish:
	if (!command_line_arguments_are_valid) {
		console.error("Usage: node ea [-d] [-p]");
	}
	
	return command_line_arguments_are_valid;
}
