#!/bin/bash

set -e 
cd src/Nash.Web/
dotnet build -c "Debug" $*
cd ../../