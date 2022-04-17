const $ = (selector) => document.querySelector(selector);
const recipies = [
  {
    name: "Name Of Food",
    ingredients: [
      "1 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image:
      "./Assets/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
  {
    name: "Name Of two",
    ingredients: [
      "2 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image: "./Assets/casey-lee-awj7sRviVXo-unsplash.jpg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
  {
    name: "Name Of two",
    ingredients: [
      "2 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image: "./Assets/chad-montano-eeqbbemH9-c-unsplash.jpg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
  {
    name: "Name Of two",
    ingredients: [
      "2 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image: "./Assets/chad-montano-MqT0asuoIcU-unsplash.jpg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
  {
    name: "Name Of two",
    ingredients: [
      "2 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image: "./Assets/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
  {
    name: "Name Of two",
    ingredients: [
      "2 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image: "./Assets/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
  {
    name: "Name Of two",
    ingredients: [
      "2 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image: "./Assets/davide-cantelli-jpkfc5_d-DI-unsplash.jpeg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
  {
    name: "Name Of two",
    ingredients: [
      "2 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image: "./Assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpeg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
  {
    name: "Name Of two",
    ingredients: [
      "2 teaspoon of slat",
      "2pound beef",
      "1 cup of flour",
      "3 cans of baked beans",
      "cheese",
    ],
    image: "./Assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpeg",
    instructions:
      "Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sumpuaywl Lorem ipsum doloret lareut lorem owjr skfld djon lorem ipsum sum puaywl Lorem ipsum doloret lareut lorem owjr skflddjon lorem ipsum sum puaywl ",
  },
];

window.addEventListener("load", () => {
  $("#one").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[0].image;
    $("#overlayname").text = recipies[0].name;
    for (let i of recipies[0].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[0].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#two").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[1].image;
    $("#overlayname").text = recipies[1].name;
    for (let i of recipies[1].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[1].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#three").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[2].image;
    $("#overlayname").text = recipies[2].name;
    for (let i of recipies[2].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[2].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#four").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[3].image;
    $("#overlayname").text = recipies[3].name;
    for (let i of recipies[3].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[3].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#five").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[4].image;
    $("#overlayname").text = recipies[4].name;
    for (let i of recipies[4].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[4].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#six").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[5].image;
    $("#overlayname").text = recipies[5].name;
    for (let i of recipies[5].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[5].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#seven").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[6].image;
    $("#overlayname").text = recipies[6].name;
    for (let i of recipies[6].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[6].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#eight").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[7].image;
    $("#overlayname").text = recipies[7].name;
    for (let i of recipies[7].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[7].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#nine").addEventListener("click", () => {
    $("#overlayIngredient").innerHTML = "";
    $("#overlayImg").src = recipies[8].image;
    $("#overlayname").text = recipies[8].name;
    for (let i of recipies[8].ingredients) {
      const list = document.createElement("li");
      list.innerText = i;
      $("#overlayIngredient").appendChild(list);
    }
    $("#overlayDescription").innerText = recipies[8].instructions;
    $("#overlay").style.display = "flex";
  });
  $("#overlay").addEventListener("click", () => {
    $("#overlay").style.display = "none";
  });

  $(".menu").addEventListener("click", () => {
    if ($("#mobile").style.display === "none" || null) {
      $("#mobile").style.display = "block";
    } else {
      $("#mobile").style.display = "none";
    }
  });
});
