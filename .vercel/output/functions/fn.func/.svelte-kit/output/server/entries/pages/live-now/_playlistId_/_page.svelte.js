import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-rg5zb1{width:900px;margin:0 auto;background:#111;padding:1em;padding-top:0;color:#ccc;position:relative;border:3px solid #333;border-top:0px;border-bottom:0px}.back.svelte-rg5zb1{padding:0.5em;cursor:pointer;background:#555;border:none}.title.svelte-rg5zb1{margin:0}.published.svelte-rg5zb1,.description.svelte-rg5zb1{margin:0;color:#777}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container svelte-rg5zb1"><a href="/" target="_self" data-svelte-h="svelte-nd6k75"><button class="back svelte-rg5zb1">MAIN CHANNEL</button></a> <a href="/live-now" target="_self" data-svelte-h="svelte-kv7nle"><button class="back svelte-rg5zb1">LIVE NOW</button></a> <br> <br> ${``} <iframe width="100%" height="500" src="https://www.youtube.com/embed/TLwhqmf4Td4?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-svelte-h="svelte-12gzfn8"></iframe> </div>`;
});
export {
  Page as default
};
