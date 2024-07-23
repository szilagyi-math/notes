@echo off
REM Get TEXMFHOME directory
for /f "delims=" %%i in ('kpsewhich -var-value TEXMFHOME') do set texmf=%%i

set tex=%texmf%\tex\latex\local

REM Create the directory if it doesn't exist
if not exist "%tex%" mkdir "%tex%"

REM Loop through the files in latex-packages
for %%f in (.\latex-packages\*) do (
  set file=%%f
  setlocal enabledelayedexpansion
  for %%a in (!file!) do set "f=%%~nxa" & set "b=%%~na"

  REM Remove any existing directory
  if exist "%tex%\!b!" rmdir /s /q "%tex%\!b!"
  mkdir "%tex%\!b!"

  REM Try to create a hard link
  mklink /h "%tex%\!b!\!f!" "!file!" 2>nul
  if errorlevel 1 (
    REM If hard link fails, copy the file
    echo Cannot create hard link, copying file "!file!" into "%tex%\!b!" directory instead.
    copy "!file!" "%tex%\!b!\!f!"
  ) else (
    echo Hard link "!file!" => "%tex%\!b!\!f!" successfully created.
  )
  endlocal
)

REM Update the filename database
mktexlsr %texmf%
