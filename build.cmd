@echo off
@setlocal
set ERROR_CODE=0

cd src\Nash.Web\
dotnet build -c Debug %*
goto end

:end
cd ..\..\
exit /B %ERROR_CODE%

