"use strict";

function generate(){
    const quotes ={
        "Les Brown":'“Life has no limitations except the ones you make.”'
    }
    let text = Object.values(quotes);
    let author = Object.keys(quotes);
    document.getElementById("text").innerHTML = text;
    document.getElementById("author").innerHTML= "-" + author;
}