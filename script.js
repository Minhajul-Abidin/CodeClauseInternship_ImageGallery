// Get element from DOM
const btns = document.querySelectorAll(".buttons button");

const cards = document.querySelectorAll(".cards .main-card");

// Add click event to all buttons
for (let i = 1; i < btns.length; i++) {
  btns[i].addEventListener("click", filterCard);
}

// Set active button on click
function setActiveBtn(e) {
  // Remove active class from all buttons
  btns.forEach((btn) => {
    btn.classList.remove("btn-active");
  });

  //   Add active class to clicked button
  e.target.classList.add("btn-active");
}

// Filter card
function filterCard(e) {
  // Run the active button function
  setActiveBtn(e);

  // Loop through all cards
  cards.forEach((card) => {
    // Expand all images
    card.classList.remove("hide");
    card.classList.add("show");

    // Get data from data attributes
    // Get card type data
    const cardType = parseInt(card.dataset.card);

    // Get button type data
    const btnType = parseInt(e.target.dataset.btn);

    // If the image type and the type fo the clicked button are NOT same
    if (cardType !== btnType) {
      card.classList.remove("show");
      card.classList.add("hide");
    }
  });
}

// Set click event for the 'All' button
btns[0].addEventListener("click", (e) => {
  // Run the active button function
  setActiveBtn(e);

  //   Loop through all cards
  cards.forEach((card) => {
    // Show all cards
    card.classList.remove("hide");
    card.classList.add("show");
  });
});
