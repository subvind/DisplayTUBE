import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
const header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-ufs3d3.svelte-ufs3d3{width:900px;margin:0 auto;background:#111;padding:1em;padding-bottom:0;color:#ccc;position:relative;border:3px solid #333;border-bottom:0px;overflow:hidden}h1.svelte-ufs3d3.svelte-ufs3d3{margin:0}p.svelte-ufs3d3.svelte-ufs3d3{margin:0.5em 0;color:#888}.avatar.svelte-ufs3d3.svelte-ufs3d3{float:left;width:150px;border:3px solid #333;border-radius:10em;margin-right:1em;margin-bottom:1em}.banner.svelte-ufs3d3.svelte-ufs3d3{width:100%;height:400px;min-width:938px;overflow:hidden;display:flex;align-items:center;margin-bottom:-7em}.banner.svelte-ufs3d3 img.svelte-ufs3d3{width:100%}.navigation.svelte-ufs3d3.svelte-ufs3d3{float:right;padding:0.75em;cursor:pointer;margin-left:0.5em}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="banner svelte-ufs3d3">${``}</div> <div class="container svelte-ufs3d3">${``} </div>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-nkt1wx{width:900px;margin:0 auto;background:#111;padding:1em;color:#ccc;position:relative;border:3px solid #333;border-top:0px}hr.svelte-nkt1wx{border:1px solid #333}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date = /* @__PURE__ */ new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  setInterval(
    () => {
      date = /* @__PURE__ */ new Date();
    },
    1e3
  );
  $$result.css.add(css);
  return `<div class="container svelte-nkt1wx"><hr class="svelte-nkt1wx"> <br> <span style="float: right;">${escape(date.toLocaleString("en-IN", options))}</span>
  flowtube.subvind.com © ${escape((/* @__PURE__ */ new Date()).getFullYear())}.<br>
  powered by <a href="https://subvind.com" data-svelte-h="svelte-1dvl2ng">subvind</a> <br> <br></div> <br> <br> <br> <br> <br> <br> <br> <br>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
