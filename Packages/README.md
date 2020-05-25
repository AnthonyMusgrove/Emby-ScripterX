# Scripter-X Packages

Scripter-X Packages allow community contributions to extend Scripter-X's ability to serve its purpose well.   A package will be installable within the server console.  An example package zip file is included in this directory for you to see how they function, and give you some information regarding what is available to you as a scripter.

This is in BETA stage, so functionality will increase over time.   

Packages are written in ES5/6 compatible Javascript, and is processed by Scripter-X's internal Javascript engine.

At this stage, packages are installed via zip files, and contain two files that are essential:

#### PackageInfo.json

<code>
  {
	"PackageInfo": {
		"Id":			"scripterx.package.example",
		"name":  		"Example Package",
		"description":	"An example package for the ScripterX package system."
	}
}
</code>

#### Package.js

<code>

/* ScripterX Example Package */

/* Create a timer designed to elapse once per start, called myTimer, with an interval of 5sec (5000ms).  When it elapses, call tmrMyTimer_Elapsed function */
ScripterX.Timers.createOnce("myTimer", 5000, "tmrMyTimer_Elapsed", null);

/* Create a timer designed to continously elapse, called myRepeatingTimer, with an interval of 10sec (10000ms).  When it elapses, call tmrMyRepeatingTimer_Elapsed function */
ScripterX.Timers.createRepeating("myRepeatingTimer", 10000, "tmrMyRepeatingTimer_Elapsed", null);


function _package_init() {
	/* Log output to Emby Log */
	ScripterX.Log.Info("Initialised package.");
}

/* Timer Callbacks */
function tmrMyTimer_Elapsed(timer_name, timer_interval, objects)
{
	/* Lets restart this timer, so it elapses again */
	ScripterX.Timers.Restart(timer_name);
}

function tmrMyRepeatingTimer_Elapsed(timer_name, timer_interval, objects)
{
	/* Lets stop the timer so it doesn't repeat anymore, until I start it again. */
	ScripterX.Timers.Stop(timer_name);
	
	/* If we wanted to delete this timer, we simply call ScripterX.Timers.Delete(timer_name)
}


/*
* Events available:  (handled with function _EventName())
* onAuthenticationFailed, onAuthenticationSuccess, onLibraryScanComplete, onMediaItemAdded, onMediaItemRemoved, onMediaItemUpdated,
* onPlaybackStart, onPlaybackStopped, onScheduledTask, onSessionEnded, onSessionStarted, onCameraImageUploaded, onLiveTVRecordingStart,
* onLiveTVRecordingEnded, onScheduledTaskStart, onScheduledTaskEnded,  onMediaItemAddedComplete, onPlaybackProgress
*/

/*  Tokens available in context _onPlaybackStart :
%playback.position.ticks%,%playback.item.total.ticks%,%playback.position.percentage%,%item.id%,%item.name%,%item.path%,%item.originaltitle%,%item.tagline%,%item.overview%,%location.type%,%item.type%,%item.productionyear%,%item.isvirtual%,%item.meta.?%,%item.library.type%,%item.library.name%,%season.id%,%season.name%,%season.number%,%season.meta.*%,%series.id%,%series.name%,%series.meta.*%,%episode.number%,%user.id%,%username%,%device.id%,%device.name%,%server.id%,%server.name%,%server.port.local.http%,%server.port.local.https%,%server.port.public.http%,%server.port.public.https%,%server.version%,%server.platform.os%,%server.platform.osver%,%server.platform.uptime%,%scripterx.version%,%scripterx.version.major%,%scripterx.version.revision%,%scripterx.version.minor%,%scripterx.version.build%
*/

function _onPlaybackStart(context)
{
	/* Send a webhook when (someone) plays (something) */
	var api_url = "https://myapi.url.com";
	
	var playback_info = {};
	
	playback_info.itemId = context.Token("%item.id%").value;
	playback_info.itemName = context.Token("%item.name%").value;
	
	playback_info.userName = context.Token("%username%").value;
	playback_info.deviceName = context.Token("%device.name%").value;

	playback_info.serverName = context.Token("%server.name%").value;
	
	playback_info.memo = playback_info.userName + " is playing " + playback_info.itemName + " on device " + playback_info.deviceName + " from server " + playback_info.serverName; 
	
	ScripterX.Web.Post(api_url, JSON.stringify(playback_info));
}

</code>
