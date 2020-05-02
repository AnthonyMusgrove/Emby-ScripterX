Node.JS Scripts
===========

Node.JS is a very powerful scripting interpreter that supports a plethora of javascript functionality on a multitude of operating systems/platforms.

After you have correctly installed node.js on your system, at your command-line, running 'node' should place you in a node-shell.  When you're at this level, Scripter-X can seamlessly integrate with your node installation.

- Download auth.js - this is a sample script for Node.JS which simply functions on the Authentication Success and Authentication Fail events within Emby Scripter-X

- Setup your actions as follows  (<strong>Note:</strong> ensure you change /home/medius/scripts/ to the path where you've saved your auth.js script file to - and ensure appropriate permissions are on that directory for emby to read/write.  Also edit auth.js "var log_file = '/home/medius/scripts/node_auth.log';" to point to the location on your system you wish for NodeJS to write this sample log file to. Also ensure emby has write permissions on this directory.  If emby doesn't have read/write permissions where required, don't worry, ScripterX will let you know via the Emby Server Log.):

<img style="margin-left:auto; margin-right:auto;" src="/Images/nodeJS_authSuccessFailActions.png" width="80%">



