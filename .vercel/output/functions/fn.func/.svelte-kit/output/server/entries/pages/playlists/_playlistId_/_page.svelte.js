import { c as create_ssr_component, d as each, f as add_attribute } from "../../../../chunks/ssr.js";
import "lightgallery";
import "lightgallery/plugins/thumbnail/lg-thumbnail.es5.js";
import "lightgallery/plugins/zoom/lg-zoom.es5.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1y04rt.svelte-1y04rt{width:900px;margin:0 auto;background:#111;padding:1em;padding-top:0;color:#ccc;position:relative;border:3px solid #333;border-top:0px;border-bottom:0px}.back.svelte-1y04rt.svelte-1y04rt{padding:0.5em;cursor:pointer;background:#555;border:none}.title.svelte-1y04rt.svelte-1y04rt{margin:0}.published.svelte-1y04rt.svelte-1y04rt,.description.svelte-1y04rt.svelte-1y04rt{margin:0;color:#777}.thumbnails-gallery.svelte-1y04rt.svelte-1y04rt{display:flex;flex-wrap:wrap}.thumbnails-gallery.svelte-1y04rt a.svelte-1y04rt{width:calc(94% / 3);margin:0.5em;overflow:hidden}.thumbnails-gallery.svelte-1y04rt img.svelte-1y04rt{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let videos = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container svelte-1y04rt"><a href="/" target="_self" data-svelte-h="svelte-nd6k75"><button class="back svelte-1y04rt">MAIN CHANNEL</button></a> <br> <br> ${``} <div id="thumbnails-gallery" class="thumbnails-gallery svelte-1y04rt">${each(videos, (video) => {
    return `<a${add_attribute("href", video.image, 0)} data-lg-size="1024-800"${add_attribute(
      "data-sub-html",
      `<p style="font-size: 1em;">${video.snippet.title}</p>
        <br />
        <a href="/playlists/${video.snippet.playlistId}/${video.snippet.resourceId.videoId}" target="_self">
          <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">watch video</button>
        </a>
        <br />
        <br />`,
      0
    )} class="svelte-1y04rt"><img${add_attribute("alt", video.snippet.title, 0)}${add_attribute("src", video.image, 0)} class="svelte-1y04rt"> </a>`;
  })}</div> </div>`;
});
export {
  Page as default
};
