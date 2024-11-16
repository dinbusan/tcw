import { H as Head, T as Title, M as Meta } from "./components-B3jhR1xy.js";
import { mergeProps, useSSRContext, withAsyncContext, withCtx, unref, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useRoute, c as createError } from "../server.mjs";
import { u as useFetch } from "./fetch-Sh-GxCP8.js";
import "hookable";
import "@unhead/shared";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "ohash";
const _sfc_main$1 = {
  __name: "ProductDetails",
  __ssrInlineRender: true,
  props: ["product"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-5662bfba><div class="grid grid-cols-2 gap-10" data-v-5662bfba><div class="p-7" data-v-5662bfba><img${ssrRenderAttr("src", __props.product.image)} alt="product img" class="mx-auto my-7" data-v-5662bfba></div><div class="p-7" data-v-5662bfba><h2 class="text-4xl my-7" data-v-5662bfba>${ssrInterpolate(__props.product.title)}</h2><p class="text-xl my-7" data-v-5662bfba>Price - €${ssrInterpolate(__props.product.price)}</p><h3 class="font-bold border-b-2 mb-4 pb-2" data-v-5662bfba>Product description:</h3><p class="mb-7" data-v-5662bfba>${ssrInterpolate(__props.product.description)}</p><button class="btn flex" data-v-5662bfba><i class="material-icons mr-2" data-v-5662bfba>add_shopping_cart</i><span data-v-5662bfba>Add to cart</span></button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5662bfba"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { id } = useRoute().params;
    const uri = "https://fakestoreapi.com/products/" + id;
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => useFetch(uri, { key: id }, "$H3OxYP9tuC")), __temp = await __temp, __restore(), __temp);
    if (!product.value) {
      throw createError({
        statusCode: 404,
        statusMessage: "Product not found",
        fatal: true
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Meta = Meta;
      const _component_ProductDetails = __nuxt_component_3;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`TCW | ${ssrInterpolate(unref(product).title)}`);
                } else {
                  return [
                    createTextVNode("TCW | " + toDisplayString(unref(product).title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: unref(product).description
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Title, null, {
                default: withCtx(() => [
                  createTextVNode("TCW | " + toDisplayString(unref(product).title), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: unref(product).description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_ProductDetails, { product: unref(product) }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-C2oNwXKm.js.map
