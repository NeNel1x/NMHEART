document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("Chuchelo.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    let isPlaying = false;

    let button = document.createElement("button");
    button.innerHTML = "🔇"; // Початковий стан - звук увімкнений
    button.style.position = "absolute";
    button.style.top = "20px";
    button.style.left = "20px";
    button.style.padding = "10px";
    button.style.fontSize = "20px";
    button.style.cursor = "pointer";
    button.style.border = "none";
    button.style.borderRadius = "50%";
    button.style.background = "rgba(0, 0, 0, 0.5)";
    button.style.color = "white";
    document.body.appendChild(button);

    let playAudio = () => {
        audio.play().then(() => {
            isPlaying = true;
        }).catch(e => console.log("Автовідтворення заблоковано браузером", e));
        document.removeEventListener("click", playAudio);
    };

    playAudio(); // Спробувати відразу відтворити звук
    document.addEventListener("click", playAudio); // Якщо браузер блокує - запустити при кліку

    button.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            button.innerHTML = "🔊"; // Змінюємо іконку
        } else {
            audio.play().catch(e => console.log("Помилка відтворення: ", e));
            button.innerHTML = "🔇"; // Змінюємо іконку
        }
        isPlaying = !isPlaying;
    });
});
