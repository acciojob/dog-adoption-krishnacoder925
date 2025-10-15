// Dog breed data
const dogs = [
  {
    name: "Golden Retriever",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Golden_Retriever_Carlos_%28105709963%29.jpeg",
    link: "https://en.wikipedia.org/wiki/Golden_Retriever"
  },
  {
    name: "Poodle",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/White_Miniature_Poodle.jpg",
    link: "https://en.wikipedia.org/wiki/Poodle"
  }
];

// Reference to the unordered list in HTML
const dogList = document.getElementById("dog-list");

// Loop through each dog and add to the list
dogs.forEach(dog => {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.href = dog.link;
  a.target = "_blank";

  const img = document.createElement("img");
  img.src = dog.image;
  img.alt = dog.name;

  a.appendChild(img);
  li.appendChild(a);
  dogList.appendChild(li);
});
