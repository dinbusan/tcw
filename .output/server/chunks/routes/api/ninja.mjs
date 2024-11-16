import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';

const ninja = defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_22H5AG1SRtwQEXZyQd9LGUTK0A3p6IGcqzqfMiFh"
  );
  return data;
});

export { ninja as default };
//# sourceMappingURL=ninja.mjs.map
