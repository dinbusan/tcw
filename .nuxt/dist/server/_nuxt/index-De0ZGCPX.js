import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2>Home</h2><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci dolores ipsam voluptatum blanditiis laborum reprehenderit id earum omnis ut optio quas officia et fuga, quibusdam perspiciatis aut porro voluptate. </p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam architecto blanditiis eius sunt consequuntur voluptatibus sapiente vel placeat hic. Aspernatur quibusdam ratione iusto eius sequi? Alias sunt praesentium minus. </p><h1 class="text-4xl font-bold">This is a heading 1</h1><h2 class="text-3xl font-semibold">This is a heading 2</h2><h3 class="text-2xl font-medium">This is a heading 3</h3><p class="text-base">This is a paragraph.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-De0ZGCPX.js.map
