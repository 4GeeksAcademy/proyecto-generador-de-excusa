/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  //  let random_number_who = Math.floor(Math.random() * who.length);
  let random_who = Math.floor(Math.random() * who.length);
  let random_action = Math.floor(Math.random() * action.length);
  let random_what = Math.floor(Math.random() * what.length);
  let random_when = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    who[random_who] +
    " " +
    action[random_action] +
    " " +
    what[random_what] +
    " " +
    when[random_when];
};
