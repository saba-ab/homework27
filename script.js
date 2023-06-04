///1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე
//წაიშალოს თვითონ ეს ღილაკი ანუ რომ დავკლიკავ ღილაკზე გაქრეს  გამოიყენეთ ეს
//მეთოდი remove()  https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
const removeButton = document.getElementById("rmButton");
removeButton.addEventListener("click", () => {
  removeButton.remove();
});
// 2
//  ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:
//https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg
//სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში(ჯავასკრიპტით).
//გამოიყენეთ ეს მეთოდი setAttribute() https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

const image = document.createElement("img");
image.setAttribute(
  "src",
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg"
);
document.body.appendChild(image);

//3. დაამატეთ ერთი ინფუთი და ღილაკი , რა ინფორმაციასაც  შეიყვანთ ინფუთის ველში, ღილაკზე
//დაჭერისას ქვემოთ p ტეგში  გამოიტანეთ ინფუთის მნიშვნელობა, ყოველი ახალი დამატებული ელემენტი
//დაამატეთ მასივში.
//გამოიყენეთ ეს მეთოდი https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

const comment = document.getElementById("text");
const save = document.getElementById("save");
let paragraph = document.createElement("p");
let commentsArray = [];
save.addEventListener("click", () => {
  paragraph.textContent = comment.value;
  document.body.appendChild(paragraph);
  commentsArray.push(comment.value);
});
setInterval(() => {
  console.log(commentsArray);
}, 10000);

// 4.
//დავწეროთ ფუნქცია, რომელიც დაგვიბრუნებს არგუმენტად მიღებული ხარჯების ჯამს.
//ფუნქციას არგუმენტად გადაეცით  მასივი - productData და დათვალეთ გადაცემული მასივში amount ის ჯამი
//const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }]
//დაბრუნებული ჯამის მნიშნელობა გამოიტანეთ p ტეგის მნიშნელობაში

const productData = [
  { product_id: 1, amount: 200 },
  { product_id: 2, amount: 300 },
  { product_id: 3, amount: 500 },
];
let sum = [];
function getSum(array) {
  for (let i = 0; i < array.length; i++) {
    let productAmount = array[i].amount;
    sum = productAmount += productAmount;
  }
}
getSum(productData);
let amountSum = document.createElement("p");
amountSum.textContent = `sum of amounts is ${sum}`;
document.body.appendChild(amountSum);
