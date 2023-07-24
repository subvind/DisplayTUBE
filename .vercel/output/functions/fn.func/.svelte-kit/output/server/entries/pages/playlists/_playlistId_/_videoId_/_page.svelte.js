import { c as create_ssr_component, e as escape, f as add_attribute } from "../../../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-kws3wk{width:900px;margin:0 auto;background:#111;padding:1em;padding-top:0;color:#ccc;position:relative;border:3px solid #333;border-top:0px;border-bottom:0px}.auto-play.svelte-kws3wk,.back.svelte-kws3wk{padding:0.5em;cursor:pointer;background:#555;border:none}.auto-play.svelte-kws3wk{float:right}.title.svelte-kws3wk{margin:0}.published.svelte-kws3wk,.description.svelte-kws3wk{margin:0;color:#777}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log("data.videoId", data.videoId);
  data.videoId;
  let secondsRemaining = null;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container svelte-kws3wk"><a href="#" target="_self"><button class="auto-play svelte-kws3wk">AUTO PLAY (${escape(secondsRemaining)})</button></a> <a href="/" target="_self" data-svelte-h="svelte-nd6k75"><button class="back svelte-kws3wk">MAIN CHANNEL</button></a> <a${add_attribute("href", `/playlists/${data.playlistId}`, 0)} target="_self"><button class="back svelte-kws3wk" data-svelte-h="svelte-1yinnci">PLAYLIST</button></a> <br> <br> <iframe width="900" height="500"${add_attribute("src", `https://www.youtube.com/embed/${data.videoId}?autoplay=1`, 0)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> <br> <br> ${``} ${``} </div>`;
});
export {
  Page as default
};
