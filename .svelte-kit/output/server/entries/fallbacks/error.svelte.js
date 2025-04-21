import { e as escape_html } from "../../chunks/escaping.js";
import { c as pop, p as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/index2.js";
function Error($$payload, $$props) {
  var _a;
  push();
  $$payload.out += "<h1>".concat(escape_html(page.status), "</h1> <p>").concat(escape_html((_a = page.error) == null ? void 0 : _a.message), "</p>");
  pop();
}
export {
  Error as default
};
