let review = [
  {
    id: 1,
    name: "Peter Jones",
    job: "INTERN",
    img: "./Images/person-1_rfzshl.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 2,
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    img: "./Images/person-2_np9x5l.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    img: "./Images/person-3_ipa0mj.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal..",
  },
  {
    id: 4,
    name: "Kendra",
    job: "THE BOSS",
    img: "./Images/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];
let img = document.querySelector("img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let content = document.getElementById("review");
let leftBtn = document.getElementById("left-arrow");
let rightBtn = document.getElementById("right-arrow");
let randomBtn = document.getElementById("random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  let item = review[currentItem];
  img.src = item.img;
  author.innerText = item.name;
  job.innerText = item.job;
  content.innerText = item.text;
}

// click event

rightBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
leftBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson();
});

// click random btn
randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * review.length);
  showPerson();
});
