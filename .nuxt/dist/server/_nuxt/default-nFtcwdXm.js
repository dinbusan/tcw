import { _ as __nuxt_component_2 } from "./nuxt-link-DrmAF-Gi.js";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-ecd40f05><header class="shadow-sm bg-white" data-v-ecd40f05><nav class="container mx-auto p-4 flex justify-between" data-v-ecd40f05>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "font-bold",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tom Cleerdin Works`);
      } else {
        return [
          createTextVNode("Tom Cleerdin Works")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul class="flex gap-4" data-v-ecd40f05><li data-v-ecd40f05>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ecd40f05>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ecd40f05>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "",
    to: "/products"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Products`);
      } else {
        return [
          createTextVNode("Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ecd40f05>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "btn",
    to: "/contact"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-ecd40f05>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "btn",
    to: "/products/lkhasdfjsd"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`oops`);
      } else {
        return [
          createTextVNode("oops")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></header><div class="container mx-auto p-4" data-v-ecd40f05>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ecd40f05"]]);
export {
  _default as default
};
//# sourceMappingURL=default-nFtcwdXm.js.map
