import { refs } from "./refferense";
import { getItemsTemplate } from "./template";

export function render(items) {
const markup =items.map(getItemsTemplate).join('');
return refs.gallery.insertAdjacentHTML('beforeend',markup);
}