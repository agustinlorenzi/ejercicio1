for (let i = 0; i < 101; i++) {
    if (i % 2 !== 0) {
        let poner = document.getElementById("numeros");
        let content1 = document.createElement("div");
        content1.innerHTML = `<p>${i}</p>`;
        poner.append(content1);
        console.log(i)
    }
}