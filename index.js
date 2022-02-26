
function shout (string) {
    return string.toUpperCase();
}

console.log(shout ("Hello!"));

function whisper(string) {
    return string.toLowerCase();
}

whisper ("HELLO!");

function logShout (string) {
    return console.log(string.toUpperCase());
}

function logWhisper (string) {
    return console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate (string) {
    if (string === "hello") {
        return "I can\'t hear you!" ;
    }
    if (string === "HELLO")
        return "YES INDEED!" ;
    if (string === "Let\'s have dinner together!")
        return "I would love to!" ;
}








































/*

function shout(string) {
    return string.toUpperCase(); 
}

function whisper(string) {
    return string.toLowerCase(); 
}

function logShout(string) {
    return console.log(string.toUpperCase());  
}

function logWhisper(string) {
    return console.log(string.toLowerCase()); 
}

function sayHiToHeadphonedRoommate(string) {
    if (string === "hello") 
        {return "I can\'t hear you!"}
    if (string === "HELLO")
        {return "YES INDEED!"}
    if (string === "Let's have dinner together!")
        {return "I would love to!"}
}
*/

