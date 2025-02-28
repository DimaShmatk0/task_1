document.querySelectorAll(".Heading6").forEach((question) => {
  question.addEventListener("click", function () {
    let answer = this.nextElementSibling;
    let plusIcon = this.querySelector("img:last-child");
    answer.classList.toggle("active");

    if (answer.classList.contains("active")) {
      plusIcon.src = "assets/image/pricing/FAQ/++.svg";
    } else {
      plusIcon.src = "assets/image/pricing/FAQ/+.svg";
    }
  });
});
