REM Event: onMediaItemAddedComplete
REM Parameters expected: %item.id% "%item.name%" "%item.path%" "%series.name%" "%season.name%" %season.number% %episode.number%
REM Conditions expected: %item.type% Equals Episode
@echo Added Episode to Season %6 (%5) of %4: [ID: %1] [Episode Number: %7] [Name: %2] [Path: %3] >> D:\embyscripts\media_tv.log
