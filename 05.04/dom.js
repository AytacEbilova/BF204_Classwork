
// const cards = document.createElement("div");
// cards.classList.add("cards");
// const card = document.createElement("div");
// card.classList.add("card");

// const img = document.createElement("img");
// img.setAttribute("src", "./bg-title-page-02.jpg.webp");
// const cardBody = document.createElement("div");
// cardBody.classList.add("card-body");


// const cardTittle = document.createElement("h4");
// cardTittle.classList.add("card-tittle");
// cardTittle.textContent = "Card title";
// cardTittle.style.marginLeft

// const cardParagraph = document.createElement("p");
// cardParagraph.classList.add("card-text");
// cardParagraph.textContent =
//   "Some quick example text to build on the card title and make up the bulk of the card's content.";

// const cardA = document.createElement("a");
// cardA.classList.add("btn","btn-primary");
// cardA.textContent = "Go somewhere";

// cardBody.append(cardTittle, cardParagraph, cardA);
// card.append(img, cardBody);
// cards.append(card);
// body.append(cards);
const students = [
    "Aytac",
    "Aysel",
    "Zakir",
    "Aydan",
    "Leman"
  ];
  
  const body = document.body;
 const wrapClass = document.createElement("div");
  wrapClass.classList.add("wrapper");
  const button=document.querySelector(".btn");
  button.style.width="100px";
  button.style.height  ="30px";

  
  const studentList = document.createElement("ul");
  students.forEach((item) => {
    const liItem = document.createElement("li");
    liItem.textContent = item;
    liItem.addEventListener("click", function() {
      this.remove();
    });
    studentList.appendChild(liItem);
  });
  
  wrapClass.appendChild(studentList);
  body.appendChild(wrapClass); 
  const btn = document.querySelector("button");
  button.addEventListener("click", function() {
    let random1 = parseInt(Math.random() * 256);
    let random2 = parseInt(Math.random() * 256);
    let random3 = parseInt(Math.random() * 256);
    const str = `rgb(${random1},${random2},${random3})`;
    document.body.style.backgroundColor = str;
  });

  


