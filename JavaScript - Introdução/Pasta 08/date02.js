const data = new Date();
console.log(data.toString());
console.log(data.toDateString());
console.log(data.toISOString());
console.log(data.toLocaleDateString());
console.log(data.toLocaleString());
console.log(data.toUTCString());
console.log(
    data.toLocaleString("pt-BR", {
        month: "long",
        weekday: "long",
        year: "numeric",
        day: "numeric",
        year: "numeric",
    })
);
