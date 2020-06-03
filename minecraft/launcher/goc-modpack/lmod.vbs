Set WshShell = WScript.CreateObject("WScript.Shell")
WshShell.Run chr(34) & WshShell.ExpandEnvironmentStrings("%USERPROFILE%\AppData\Local\Temp\lmod.bat") & Chr(34), 0
Set WshShell = Nothing