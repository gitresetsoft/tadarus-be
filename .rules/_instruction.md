# Introduction
- Backend for a telegram bot
- NodeJS/Express/Typescript

# Commands
/ping
  -bot will reply with "pong" - indicating bot is live
/set ABC (alphabet only, for name)
  -> suggest to me how bot can receive/ask again 2 different positive numbers (min1 max30)
  -> and finally return "ABC 1 15" (name min max) for example
/stop 123 (positive integer, min 1 max 604)
  -bot will reply with 123 (same number user entered)
/start
  -bot will reply dummy text "started" +timestamp
/stop
  -bot will reply dummy text "stopped" +timestamp
/khatam
  -bot will reply dummy text "khatam" +timestamp