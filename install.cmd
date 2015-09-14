REM https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement

call npm install webpack --global
call npm install webpack --save-dev
call npm update
call npm install babel-loader --save-dev


npm install webpack-dev-server --global
npm install webpack-dev-server --save-dev
npm install react-hot-loader --save-dev


REM Run up http://localhost:8080
webpack-dev-server 

webpack -w
