Batch Files
===========

- Compatible with Windows systems, and uses command prompt
- Download one of the example batch files to a directory on your Emby Windows Server - eg, c:\myscripts\
- Right click the batch file (eg, playback.bat) and click Properties
- Click the 'Security' tab, click Add, add 'Everyone' with 'Full Control'  (You can technically lock this down to whatever user your Emby Server is running as).
- Open ScripterX interface, add a new Action for the event you're testing.
- In the 'Script' field, ensure you prepend this with /c (to specify to command prompt you wish to run a batch script), followed by a space, then your batch file name, for example:  /c c:\myscripts\playback.bat
- In the 'Interpreter' field, place 'cmd'
- In the parameters field, edit the batch file with notepad and check out the REM line, it will list the parameters that particular script requires and where.  Ensure you enclose possible-multi-worded variables with " marks (eg, Movie Name could be  'The Hangover', which has two words, so always enclose media name variable in " marks.) 

