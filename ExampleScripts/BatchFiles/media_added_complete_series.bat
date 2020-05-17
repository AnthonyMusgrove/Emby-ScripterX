REM Event: onMediaItemAddedComplete
REM Parameters expected: %item.id% "%item.name%" "%item.path%"
REM Conditions expected: %item.type% Equals Series
@echo Added Series [ID: %1] [Name: %2] [Path: %3] >> D:\embyscripts\media_tv.log
