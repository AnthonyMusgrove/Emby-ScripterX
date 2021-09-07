#!/usr/bin/python

# START/STOP "%item.name%" "%item.path%" "%item.type%" "%username%" "%device.name%"

import sys, getopt

playback_log_file = "c:\emby\scripts\playback_python.log"

if __name__ == "__main__":

    if (len(sys.argv) < 7):
       print(f"Usage: playback.py <playback_action> <playback_title> <playback_path> <media_type> <username> <device_name>")
       sys.exit()

    playback_action = sys.argv[1];
    media_title = sys.argv[2];
    media_path = sys.argv[3];
    media_type = sys.argv[4];
    username = sys.argv[5];
    device_name = sys.argv[6];

    f = open(playback_log_file, 'a')
    
    f.write ('User ' + username + ' Playback on Device ' + playback_action + ' for media (' + media_type + ') ' + media_title + ' (Path: ' + media_path + ')\n')


