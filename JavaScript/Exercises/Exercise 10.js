let removeHTMLTags = (txt) => {
  return txt.replace(/<[^>]*>/g, "");
};

const result = removeHTMLTags(
  "<div><span>lorem</span> <strong>ipsum</strong></div>"
);
console.log(result);
