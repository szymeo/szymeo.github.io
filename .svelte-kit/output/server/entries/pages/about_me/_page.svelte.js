import { e as ensure_array_like, h as head, c as pop, p as push } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  const paragraphs = [
    "I'm the most passionate about programming, doing it ever since 2012.",
    "Except for dev, my areas of biggest interest includes entrepreneurship and psychology.",
    "I'm into gym, healthy food, embracing discomfort and learning."
  ];
  const each_array = ensure_array_like(paragraphs);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>Simon Gracki | about_me</title>";
    $$payload2.out += '<meta name="description" content="Simon Gracki\'s personal website">';
  });
  $$payload.out += '<div class="space-y-2"><!--[-->';
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let p = each_array[i];
    $$payload.out += "<div><h5>".concat(escape_html(p), "</h5></div>");
  }
  $$payload.out += "<!--]--></div>";
  pop();
}
export {
  _page as default
};
