const getQuotes = async () => {
  const res = await fetch("https://type.fit/api/quotes").then((r) => r.json());
  console.log(res);
  if (res) {
    const quotes = res.map((quote) => {
      const obj = {
        text: quote.text,
        author: quote.author,
      };
      return obj;
    });
    return quotes;
  }
};

const button = document.querySelector("#the-button");
console.log(button);
button.addEventListener("click", async () => {
  const quotes = await getQuotes();
  const quote = quotes[0];
  alert(`${quote.text}, - ${quote.author}`);
});
