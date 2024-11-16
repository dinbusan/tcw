import { H as Head, T as Title } from "./components-B3jhR1xy.js";
import { withAsyncContext, withCtx, createTextVNode, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useFetch } from "./fetch-Sh-GxCP8.js";
import "@unhead/shared";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "ohash";
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("api/currency/GBP", "$c6wy8KmN8o")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`TCW | About`);
                } else {
                  return [
                    createTextVNode("TCW | About")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("TCW | About")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><h2>About</h2><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eveniet! Rem expedita optio at! Earum molestiae minima voluptate quaerat asperiores voluptates veniam deleniti tempore. Itaque sapiente quisquam ipsum fugiat obcaecati. </p><p class=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur neque harum nostrum nisi vitae est nam necessitatibus reprehenderit, assumenda ratione officiis architecto unde adipisci! Porro natus laborum quia in? </p><div>${ssrInterpolate(unref(data))}</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BeUQvdRU.js.map
