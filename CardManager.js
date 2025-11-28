const textValues = {
  character: {
    title: "char",
    color: "rgb(167, 255, 104)",
    description: "A data type that contains one character/char",
    examples: [
      "A",
      "g",
      "%",
      "2",
      "/"
    ]
  },
  string: {
    title: "string",
    color: "rgb(81, 255, 104)",
    description: "A data type that contains a collection of characters/chars",
    examples: [
      "Hello",
      "no",
      "cans",
      "53434"
    ]
  },
}

function createCard()
{
  const card = document.createElement("div")
  card.classList.add("card")

  const heading = document.createElement("h1")
  heading.innerText = textValues.string.title
  
  card.appendChild(heading)
  
  document.body.appendChild(card);
}

//  createCard()
