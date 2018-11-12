This project requires node js installed on your laptop

1.	Open command prompt at the root folder 
2.	Run: npm install 
3.  Run: npm run update-webdriver
4.	Run: npm run teste2e     , when you want to run in chrome browser and view the automation
5.  Run: npm run teste2eheadless   , when we run it on jenkins or CI

===============================
Result from run on Chrome
===============================
DevTools listening on ws://127.0.0.1:62001/devtools/browser/4faaae0f-dc71-4a52-b7bd-34a80a03c521
Started
Jasmine started
[7352:9408:1112/144108.995:ERROR:shader_disk_cache.cc(257)] Failed to create shader cache entry: -2
.
  UI Testcases
    √ should verify City Name Box is Present
.    √ should verify Search Button is Present
.    √ should verify currentLocation is Present
.    √ should verify supportinCity is Present
.    √ should verify weatherinCity is Present
.    √ should verify signIn is Present
.    √ should verify signUp is Present
.    √ should verify Farenheit is Present
.    √ should verify Celcius is Present
.    √ should verify Invalid City Name results in NOT FOUND
.    √ should verify Valid City Name results




11 specs, 0 failures
Finished in 54.876 seconds

Executed 11 of 11 specs SUCCESS in 55 secs.
[14:42:00] I/launcher - 0 instance(s) of WebDriver still running
[14:42:00] I/launcher - chrome #01 passed

================================
Results from headless run:
================================
DevTools listening on ws://127.0.0.1:61864/devtools/browser/9689f4a4-dd9e-475c-9190-9ab686cbf233
Started
Jasmine started
.
  UI Testcases
    √ should verify City Name Box is Present
.    √ should verify Search Button is Present
.    √ should verify currentLocation is Present
.    √ should verify supportinCity is Present
.    √ should verify weatherinCity is Present
.    √ should verify signIn is Present
.    √ should verify signUp is Present
.    √ should verify Farenheit is Present
.    √ should verify Celcius is Present
.    √ should verify Invalid City Name results in NOT FOUND
[1112/143106.519:INFO:CONSOLE(0)] "Mixed Content: The page at 'https://openweathermap.org/find?q=' was loaded over HTTPS, but requested an
insecure image 'http://openweathermap.org/img/w/50d.png'. This content should also be served over HTTPS.", source: https://openweathermap.org/find?q= (0)
[1112/143106.531:INFO:CONSOLE(0)] "Mixed Content: The page at 'https://openweathermap.org/find?q=' was loaded over HTTPS, but requested an
insecure image 'http://openweathermap.org/images/flags/in.png'. This content should also be served over HTTPS.", source: https://openweathermap.org/find?q= (0)
.    √ should verify Valid City Name results




11 specs, 0 failures
Finished in 51.212 seconds

Executed 11 of 11 specs SUCCESS in 51 secs.
[14:31:18] I/launcher - 0 instance(s) of WebDriver still running
[14:31:18] I/launcher - chrome #01 passed
PS C:\repo2018>