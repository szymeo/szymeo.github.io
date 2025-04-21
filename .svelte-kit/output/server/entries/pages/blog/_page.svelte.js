import { h as head } from "../../../chunks/index.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>Simon Gracki | blog</title>";
    $$payload2.out += '<meta name="description" content="Simon Gracki\'s personal website">';
  });
  $$payload.out += "<!---->Maybe one day =)";
}
export {
  _page as default
};
