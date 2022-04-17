<u>4.0.0.1</u>
<strong>General</strong>
* Added token %session.id% to all Session events on request of digitalirony, to address [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/discussions/60" class="button-link emby-button">Github Discussion#60</a>]

<hr/>

<u>4.0.0.0</u>
<strong>General</strong>
* Compiled against BETA 4.7+ packages and libraries
* Modified LiveTV functionality to suit new library adjustments
* Required: Testing, Testing, Testing - please report any issues to the GitHub ISSUE LIST (Thank you!)

<hr/>

<u>3.0.5.5</u>

<strong>General</strong>
* Rectified reference to Emby LiveTV, create new platform and baseline for debugging moving forward

<hr/>

<u>3.0.5.3</u>

<strong>General</strong>
* Added some logical housekeeping to onRecordingTimerCreated to address [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/45" class="button-link emby-button">Github Issue#45</a>]
* Rectified reported bug for _onAuthenticationSuccess not executing. [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/43" class="button-link emby-button">Github Issue#43</a>], issue was that two instances of %server.name% were trying to be added to the token context.  Changed the 'Auth' server name token to %user.server.name%

<hr/>

<u>3.0.5.2</u>

<strong>General</strong>
* Cleaned up boolean parsing in conditions.

<hr/>

<u>3.0.5.1</u>

<strong>General</strong>
* Urgent bugfix, Jint rollback to stable version, was affecting condition parsing.

<hr/>

<u>3.0.5.0</u>

<strong>General</strong>
* Added event onUserDataSaved which is triggered for various reasons within Emby.  Initially added to support the functionality of when a user 'likes/favorites' a selected media item.
* %userdata.save.reason% will be one of 7 values:  Import, PlaybackFinished, PlaybackProgress, PlaybackStart, TogglePlayed, UpdateHideFromResume, UpdateUserRating

<hr/>

<u>3.0.4.9</u>

<strong>General</strong>
* Revamp/revive of ScripterX project;  modified all references to the ScripterX website, the website is now https://emby-scripterx.com
* Compiled against latest core nuget packages

<hr/>

<u>3.0.4.8</u>

<strong>General</strong>
* Added requested [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/14" class="button-link emby-button">Github Feature Request#14</a>]: 
Added two new events - onRecordingTimerCreated and onRecordingTimerCancelled

* Added %was.cancelled% token to onLibraryScanComplete event (for testing to address [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/23" class="button-link emby-button">Github Feature Request#23</a>])

<strong>Packages</strong>
* Consequently, _onRecordingTimerCreated and _onRecordingTimerCancelled are now available for packages as
event subscriptions.

<hr/>

<u>3.0.4.7</u>

<strong>General</strong>
-

<strong>Packages</strong>
* ScripterX now has the ability to include additional scripts in your package with the ScripterX.Include.Script()
function.  Please see https://wiki.emby-scripterx.com/books/packages/page/including-other-script-files-in-your-package
for more information.

<hr/>

<u>3.0.4.6</u>

<strong>General</strong>
-

<strong>Packages</strong>
* Rectified reported [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/40" class="button-link emby-button">Github Issue#40</a>]: 
_onAuthenticationFailed never called when expected.  This was due to a mis-typing of the event name (it was coded as
onAuthenticatedFailed mistakenly).  This has been rectified, and _onAuthenticationFailed is now called as expected.

<hr/>

<u>v3.0.4.5</u>

<strong>General</strong>
-

<strong>Packages</strong>
* Introduced API extensions.  This new feature is an amazing way to extend your Emby API without having to write
a plugin to do so.  In your package you can 'register' and 'unregister' your own Package API commands that will
direct to a defined callback when they're called from the Emby API.  For more information - please see the
ScripterX wiki page Packages > API Extensions

<hr/>

<u>v3.0.4.4</u>

<strong>General</strong>
* Added 'Person' to [Entity Types] for conditions on actions.
* Rectified bug where a 'Person' %library.* values would be substituted as errors.  This stems from these types of
entities not belonging to a library, and not having any path or parent.  So now, any entity without a path and parent
will not attempt to have its library type or name ascertained, as it doesn't have one.

<strong>Packages</strong>
* Rectified reported [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/37" class="button-link emby-button">Github Issue#37</a>]: 
.JsonPost() was not sending the correct accept header, now rectified (please see issue notes).  Set the default content-type
for .Post() to application/x-www-form-urlencoded.  Headers can be overridden (see next log entry)

* Implemented a CustomHeaderBuilder container that you can use to create custom headers for your Get, JsonPost or Post request.
Rectified issue relating to the new parameter being mandatory, it is no longer mandatory and you can submit your request using
the default headers by ommitting the third parameter of the request (JsonPost,Post) or second parameter of a Get request.
(please see wiki on how to create a CustomHeaderBuilder and how it works.)

<hr/>

<u>v3.0.4.3</u>

<strong>Packages</strong>
* Added requested [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/33" class="button-link emby-button">Github Feature Request#33</a>]: 
 Added functionality to customise Web Request headers for Web.Post, Web.PostJson, Web.Get (please see wiki at https://wiki.emby-scripterx.com for more information.)

 <hr/>

<u>v3.0.4.2</u>

<strong>Packages</strong>
* Rectified reported [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/36" class="button-link emby-button">Github Issue#36</a>]:
Scripting errors were logged as Debug rather than Error.  Scripting errors didn't include a proper stacktrace.  This has now been changed
such that a scripting error is now logged as an Error, and includes the entire stacktrace.

* Added requested [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/35" class="button-link emby-button">Github Feature Request#35</a>]: added context.allTokens() which returns a 
JSON Object keyed to the token's name, value being the value of the token. For example,
<code>ScripterX.Log.Info("Failed to authenticate, allTokens = " + context.allTokens());</code> yields <code>allTokens = { "%server.name%": "MediusDev2", "%server.port.local.http%": "8096", ... }</code>

* Added (as requested requested [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/34" class="button-link emby-button">Github Feature Request#34</a>]) two new API functions: 
/ScripterX/Packages/Instances/{packageId} (Get a list of Installed Packages with PackageId) 
and /ScripterX/Packages/Info/{installationId} (Get Installed Package Information)

<hr/>

<u>v3.0.4.1</u>

<strong>General</strong>
* Added new Action types for User manipulation: onUserConfigurationUpdated, onUserPasswordChanged, 
onUserCreated, onUserDeleted, onUserLockedOut

<strong>Packages</strong>
* Added new subscription functions for User manipulation: _onUserConfigurationUpdated(context), 
_onUserPasswordChanged(context), _onUserCreated(context), _onUserDeleted(context), _onUserLockedOut(context)

<hr/>

<u>v3.0.4.0</u>

<strong>General</strong>
* Continued working towards mouse driven Actions interface.  This should be finalised very soon.

<strong>Packages</strong>
* Packages now have a configuration framework.  Check out our wiki for more information regarding
package configuration <a href='https://wiki.emby-scripterx.com/'>here</a>

<hr/>

<u>v3.0.3.5</u>

<strong>General</strong>
* Rectified reported [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/32" class="button-link emby-button">Github Issue#32</a>] where Package function subscriptions were mislabelled, they all <strong>require</strong> an underscore prefix. 
* Added additional Package event subscriptions - _onAttachLiveTV(live_tv_name, live_tv_url), _onLibraryRefreshStart(library_name), _onLibraryRefreshEnded(library_name)

<hr/>

<u>v3.0.3.4</u>

<strong>General</strong>
* Rectified reported [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/31" class="button-link emby-button">Github Issue#31</a>] where packages couldn't install.  This was due to the Package Installer not successfully checking for the 'Packages'
directory before attempting to move files into the package's repository. 

<hr/>

<u>v3.0.3.3</u>

<strong>General</strong>
* Clean up formatting and styling for dropdown box on Actions interface; preliminary stages of mouse-drive Actions interface
* Removed the requirement for specifying a "script file" in an action thus giving the user the ability to specify a custom
executable in the "Interpreter" field, without having to specify a "script file".

<hr/>

<u>v3.0.3.2</u>

<strong>General</strong>
* Integrated SMTP mail into Packages.  A Package can now send an email out, by using the following syntax:
<code>
 var smtp_server = ScripterX.Email.Server();
 
 smtp_server.Host = "mail.mysmtpserver.com";
 smtp_server.Port = 465;
 smtp_server.useAuth = true;
 smtp_server.useSsl = true;
 smtp_server.ignoreCertificateErrors = false;
 
 smtp_server.AuthUsername = "senderauthusername@myemail.com";
 smtp_server.AuthPassword = "mYSmTpPassWoRd!";
 
 function _onAuthenticationFailed(context)
 {
	 // Lets send an email to advise of the failed authentication
	 
	 var email = ScripterX.Email.Create();
	 
	 email.FromName = context.Token("%server.name%").value;
	 email.From = send_email_from_addr;
	 
	 email.To = "mynotificationemail@address.here";
	 
	 email.Subject = "Failed authentication on " + context.Token("%server.name%").value;
	 
	 email.TextBody = "Authentication Failed on your Emby Server " + context.Token("%server.name%").value;
	 email.TextBody += "\nFrom IP Address: " + context.Token("%device.remote.ipaddress%").value;
	 email.TextBody += "\nUsing username: " + context.Token("%username%").value;
	 email.TextBody += "\nWith password: " + context.Token("%password%").value;

	 email.HtmlBody = "Authentication Failed on your Emby Server <strong>" + context.Token("%server.name%").value + "</strong>";
	 email.HtmlBody += "<br/>From IP Address: <strong>" + context.Token("%device.remote.ipaddress%").value + "</strong>";
	 email.HtmlBody += "<br/>Using username: <strong>" + context.Token("%username%").value + "</strong>";
	 email.HtmlBody += "<br/>With password: <strong>" + context.Token("%password%").value + "</strong>";
	 
	 ScripterX.Email.Send(smtp_server, email);
 }
</code>

<hr/>

<u>v3.0.3.1</u>

<strong>General</strong>
* Rectified Playback context factory, resolved issue where some values may be null and would thus throw an exception.  Now utilising the correct GetValueOrDefault(), default being 0 on all nullable numbers. 

<hr/>

<u>v3.0.3</u>

<strong>General</strong>
* Added ability to send an email using Actions.  To do this, use the following configuration:

Run <strong>[script]</strong> = server=smtp.server.host:smtp.port;fromname=My Emby Server;from=myservers@email.address;to=recipient@email.address;subject=My mail subject;auth=mysmtpauthusername:mysmtpauthpassword;ignorecertificate=false
Using <strong>[Interpreter]</strong> = either smtp or smtp:secure (smtp:secure will use SSL, where as smtp will not)
<strong>[Parameters]</strong> = email body

Example:  Send an email when somebody fails to authenticate to your emby server:

[script]: server=mail.gmail.com:465;fromname=%server.name%;from=sender@gmail.com;to=recipient@gmail.com;subject=Authentication Failure;auth=mygmail@email.address:myGmAiLpAsSwoRd;ignorecertificate=false
[using]: smtp:secure
[parameters]: Device %device.name% failed to authenticate from %device.remote.ipaddress% using username: %username%, password: %password%

Which yields an email that appears like the following:

<code>
Device Firefox failed to authenticate from 192.168.1.124 using username: Anthony, password: fakePasSWoRd!
</code>

<hr/>

<u>v3.0.2</u>

<strong>General</strong>
* Added new tokens to Live TV record item: %recording.iskids%, %recording.islive%, %recording.ismanual%, %recording.ismovie%, %recording.isnew%, %recording.isnews%, %recording.isprepaddingrequired%, %recording.ispostpaddingrequired%, %recording.ispremiere%, %recording.isprogramseries%, %recording.isrepeat%, %recording.isseries%, %recording.issports%

<hr/>

<u>v3.0.1</u>

<strong>General</strong>
* Resolved issue with various transcoding variables not being substituted. [<a is="emby-linkbutton" target= '_blank' href="https://github.com/AnthonyMusgrove/Emby-ScripterX/issues/27" class="button-link emby-button">Github Issue#27</a>]

<strong>Packages</strong>
* Added Debug to ScripterX.Log - usage ScripterX.Log.Debug('Add emby debug log entry here..')

* Added Library to ScripterX:
&nbsp;&nbsp;&nbsp;ScripterX.Library.findMovieById(movieId), ScripterX.Library.findEpisodeById(episodeId),
&nbsp;&nbsp;&nbsp;ScripterX.Library.findSeasonById(seasonId), ScripterX.Library.findSeriesById(seriesId),
&nbsp;&nbsp;&nbsp;ScripterX.Library.isScanning(), ScripterX.Library.scanLibrary()
&nbsp;&nbsp;&nbsp;findXById returns an item context with the tokens available to that particular item type.

* Added File Functions to ScripterX:
&nbsp;&nbsp;&nbsp;ScripterX.File.Append(filename, data), ScripterX.File.Write(filename, data), 
&nbsp;&nbsp;&nbsp;ScripterX.File.ReadLine(filename, line_number), ScripterX.File.ReadAll(filename) 

