REM Event: onMediaItemAddedComplete
REM Parameters expected: %item.id% "%item.name%" "%item.path%" "%series.name%" %season.number%
REM Conditions expected: %item.type% Equals Season
@echo Added Season to Series %4: [ID: %1] [Season Number: %5] [Name: %2] [Path: %3] >> D:\embyscripts\media_tv.log

