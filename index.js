function getWord (){
    location.href = "word.html"
};

const wordList = [
    "apple", "argument", "avarice", "anger", "art", "atonement", "axolotl", 
    "believe", "brilliant", "beauty", "boring", "blast", "best", "blue", "beard",
    "coparent", "cooperate", "copper", "colourful", "cloudy", "candles", "cute", "chimney",
    "door", "defuse", "dapper", "dinner", "desperate", "deliver", "dj",
    "extracate", "emperor", "envelope", "effervece", "elated", "excitement",
    "fly", "flower", "friend", "find", "fear", "forthright",
    "glower", "garage", "gourd", "giblets", "great", "give", "green",
    "house", "hands", "horns", "hinder", "hold", "hot", "hippopotamus", "hapiness",
    "interferance", "indigo", "irritate", "imbibe", "illustrious", "ivy",
    "joy", "jealous", "jaguar", "justify", "juicy", "jambalaya", "jam", "join",
    "kombucha", "key", "kindness", "knight", "knot", "kinship", "kingdom", "king",
    "live", "laugh", "love", "lotus", "lunch", "locust", "locomotive", "lend",
    "mother", "motor", "millions", "mechanical", "mentor", "mean", "morbid", 
    "Nickleback", "never", "negotiate", "nonplussed", "noodles", "nest", "no",
    "organized", "one", "oblivious", "obfuscation", "orange", "old", "otherness",
    "purple", "people", "poppy", "plump", "peacock", "Poe", "posession", "pennance", "proliferate",
    "question", "quench", "queen", "query", "quintessential", "quilt", "quill",
    "river", "reality", "rise", "reverberate", "ramifications", "red", "rocky",
    "spring", "slight", "swim", "sovereign", "string", "sombre", "stay", "stray", "silver",
    "try", "tender", "tears", "timber", "today", "thunder", "think", "touch", "tinker",
    "unprepared", "undulate", "unhappy", "umbrella", "undertaker", "underdog", "universal",
    "victory", "vicious", "voracious", "valiant", "vice", "violet", "vanguard", "viper",
    "wistful", "woeful", "weary", "weasle", "werewolf", "wolf", "waste", "wise",
    "yellow", "yonder", "yesterday", "yes", "yodelling", "yourself", "young", "youthful",
    "zealous", "zestful", "zephyr" 
    ];

function getRandomWord() {    
    const word = wordList[Math.floor((Math.random() * wordList.length))];
    document.getElementById("random-word").innerHTML = word;
}


