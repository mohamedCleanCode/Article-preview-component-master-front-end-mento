let shareBtn = document.querySelector(".share-icon"),
  toolTip = document.querySelector(".info-person-share-tooltip");

const toggleBtn = (e) => {
  console.log(e.target);
  e.target.classList.toggle("clicked");
  toolTip.classList.toggle("open");
};

shareBtn.addEventListener("click", toggleBtn);
