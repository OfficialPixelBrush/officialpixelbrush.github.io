@echo off
chcp 65001
@chcp 65001>nul

:titlescreen
cls
echo  █ █ █ █ █ █ █ █ █ █ 
echo  █ R P G   G A M E  █
echo  █ █ █ █ █ █ █ █ █ █
echo   School  Edition
pause

:playscreen
cls
echo + Play +
echo - End  -
choice /c 12 /n
if %errorlevel%==1 goto l1
if %errorlevel%==2 goto endscreen

:endscreen
cls
echo - Play -
echo + End  +
choice /c 12 /n
if %errorlevel%==1 goto playscren
if %errorlevel%==2 goto shutdown+

:shutdown
exit