import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import anchorScroll from "./scripts/anchorScroll";
anchorScroll();

import parallax from "./scripts/parallax";
parallax();
