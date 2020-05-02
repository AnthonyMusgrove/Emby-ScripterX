/*  Emby Scripter-X
 *  Node.js Example Authentication Script
 *
 *  @author: Anthony Musgrove 03/05/2020
 *
 *  expects: <status: OK|FAIL> "%device.name%" "%username%" "%password%"
 *  note:    "%password%" will only be supplied if auth failed
 */

/* include filesystem library */
var fs = require('fs');

/* remove first two command-line arguments (they're node scriptfile.js) */
var script_args = process.argv.slice(2);

/* set logfile to output to */
var log_file = '/home/medius/scripts/node_auth.log';

/* process provided information */

var log_output_str;

switch(script_args[0].toUpperCase())
{
	case 'FAIL':
	log_output_str = "Authentication attempt FAILED for " + script_args[2] + " using device " + script_args[1] + " with password " + script_args[3];
	break;

	case 'OK':
	log_output_str = "Authentication Succeeded for " + script_args[2] + " using device " + script_args[1];
	break;

}


//console.log('Arguments:', script_args);

fs.appendFile(log_file, log_output_str + '\n', function (err) {
	if(err) {
	  console.log('Failed to save to log file: ' + log_file + ' because: ' + err);
	  return(1);
	}
	else
	{
	  console.log('Successfully saved to log file: ' + log_file);
	  return(0);
	}
});
