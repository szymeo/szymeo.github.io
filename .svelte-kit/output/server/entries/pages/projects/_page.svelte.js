import { e as ensure_array_like, h as head, c as pop, p as push } from "../../../chunks/index.js";
import { a as attr, c as clsx } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
var ProjectStatus = /* @__PURE__ */ ((ProjectStatus2) => {
  ProjectStatus2["SUCCESSFUL"] = "SUCCESSFUL";
  ProjectStatus2["ONGOING"] = "ONGOING";
  ProjectStatus2["FAILED"] = "FAILED";
  return ProjectStatus2;
})(ProjectStatus || {});
const projects_json = [
  {
    name: "Lollo",
    description: "Your after hours League Of Legends gamer hub.",
    status: ProjectStatus.ONGOING,
    link: "https://lollo.vercel.app"
  },
  {
    name: "Glixy",
    description: "Performant PixiJS apps in Svelte without a struggle ✨",
    status: ProjectStatus.ONGOING,
    link: "https://glixy.dev"
  },
  {
    name: "Core",
    description: "Cognitive workspace for hyper-productive teams.",
    status: ProjectStatus.ONGOING,
    link: "https://getcore.app"
  },
  {
    name: "Szpaj",
    description: "Game of spies with balanced randomness.",
    status: ProjectStatus.SUCCESSFUL,
    link: "https://szpaj.vercel.app"
  },
  {
    name: "Spendingo",
    description: "Insights for your spending. Secure and free.",
    status: ProjectStatus.SUCCESSFUL,
    link: "https://spendingo.com"
  },
  {
    name: "h4ck9ine",
    description: "1st place hackathon entry. Area IQ visualization.",
    status: ProjectStatus.SUCCESSFUL,
    link: "https://h4ck9ine.web.app/"
  },
  {
    name: "universal-di",
    description: "Universal Dependency Injection for Typescript with Angular-like API.",
    status: ProjectStatus.SUCCESSFUL,
    link: "https://github.com/universal-di"
  },
  {
    name: "Ships",
    description: "Offline ships game, with your own strategy algorithm.",
    status: ProjectStatus.FAILED,
    link: "https://ships.vercel.app"
  },
  {
    name: "Bluestudio",
    description: "Movie editing desktop app built with Svelte and Tauri.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/bluestudio"
  },
  {
    name: "comenaskme",
    description: "Marketplace for talking to experts online.",
    status: ProjectStatus.FAILED,
    link: "https://comenaskme.online"
  },
  {
    name: "Awesome Hooks",
    description: "Awesome React hooks collection.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/awesome-hooks"
  },
  {
    name: "Cards-Against-Humanity",
    description: "[Educational] Popular game implementation using Angular and Colyseus.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/Cards-Against-Humanity"
  },
  {
    name: "Bundly",
    description: "Facebook groups on steroids.",
    status: ProjectStatus.FAILED,
    link: "https://bundly.com"
  },
  {
    name: "smegsmeg",
    description: "VR Showroom for an online sales platform.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/TeamDoubleBrackets/smegsmeg"
  },
  {
    name: "QlikViewer",
    description: "VR Qlik Dashboard viewer.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/QlikViewer"
  },
  {
    name: "Hooku",
    description: "Gamizcated city sightseeing, with AI engine detecting buildings in Warsaw by photo and interface in Facebook Messenger - as a bot.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/hooku"
  },
  {
    name: "yacanar",
    description: "Lost hackathon entry, spot ticket checkers before they spot you.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/yacanar"
  },
  {
    name: "scrollgod",
    description: "🕶 Light javascript library based on wheel event.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/scrollgod"
  },
  {
    name: "taskBoard",
    description: "Dapulse style taskboard, easy to implement to your website as external module.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/taskBoard"
  },
  {
    name: "hcboy",
    description: "Lost hackathon entry, find nearby doctors.",
    status: ProjectStatus.FAILED,
    link: "https://github.com/szymeo/hcboy"
  }
];
function ExternalIcon($$payload, $$props) {
  const { class: className = "" } = $$props;
  $$payload.out += "<svg".concat(attr("class", clsx(className)), ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14" class="stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>');
}
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(projects_json);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>Simon Gracki | projects</title>";
    $$payload2.out += '<meta name="description" content="Simon Gracki\'s personal website">';
  });
  $$payload.out += '<div class="space-y-2"><!--[-->';
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let project = each_array[i];
    $$payload.out += '<div class="leading-5"><a'.concat(attr("href", "".concat(project.link, "?ref=szymeo.github.io")), ' rel="noopener noreferrer" target="_blank" class="text-primary flex w-fit cursor-pointer items-center gap-1 hover:underline">').concat(escape_html(project.name), " - open ");
    ExternalIcon($$payload, { class: "h-4 w-4" });
    $$payload.out += '<!----></a> <p class="text-secondary truncate md:whitespace-pre-wrap">'.concat(escape_html(project.description), "</p> <span").concat(attr("class", clsx([
      "block text-xs leading-5 font-semibold capitalize",
      {
        "text-green-500": project.status === ProjectStatus.SUCCESSFUL,
        "text-purple-500": project.status === ProjectStatus.ONGOING,
        "text-red-500": project.status === ProjectStatus.FAILED
      }
    ])), ">").concat(escape_html(project.status), "</span></div>");
  }
  $$payload.out += "<!--]--></div>";
  pop();
}
export {
  _page as default
};
