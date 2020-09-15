@echo off

:choice
echo Press 1 to open Firefox
echo Press 2 to open Google Chrome
choice /c 12 /n
if %errorlevel%==1 goto fire
if %errorlevel%==2 goto chrome

:fire
cd C:\Program Files\Mozilla Firefox\
echo Opening Firefox
firefox.exe
goto choice
pause

:chrome
cd C:\Program Files (x86)\Google\Chrome\Application\
echo Opening Google Chrome
chrome.exe
goto choice
pause