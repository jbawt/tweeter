$(document).ready(() => {

  // keeps track of character count and turns counter red if count is over the limit.
  $(".new-tweet").on("keyup", function() {
    const counter = $(this.children[1][2]);
    let counterValue = 140;
    let characterLength = this.children[1][0].value.length;
    this.children[1][2].value = (counterValue - characterLength);
    if (this.children[1][2].value < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', 'white');
    }
  });
});