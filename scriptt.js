function censorText() {
    const bannedWords = ["stupid", "foolish",'fuck',"shit"];
    let inputText = document.getElementById("inputText").value;
    let words = inputText.split(/\b/); // Split by word boundaries

    for (let i = 0; i < words.length; i++) {
        if (bannedWords.includes(words[i].toLowerCase())) {
            words[i] = "*".repeat(words[i].length);
        }
    }

    let censoredText = words.join("");
    document.getElementById("censoredText").innerText = censoredText;
}