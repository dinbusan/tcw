import { d as defineEventHandler, u as useRuntimeConfig } from '../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';

const _code_ = defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;
  const { data } = await $fetch(uri);
  return data;
});

export { _code_ as default };
//# sourceMappingURL=_code_.mjs.map
