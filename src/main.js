import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import anchorScroll from "./scripts/anchorScroll";
anchorScroll();

import parallax from "./scripts/parallax";
parallax();

import headerFixation from "./scripts/headerFixation";
headerFixation();

import sendForm from "./scripts/sendForm"
const form = new sendForm()
form.init({
  form: document.querySelector(".js-form"),
});


