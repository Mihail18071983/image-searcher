import { searchParams } from "./searchParans";
import { refs } from "./refferense";
export default class ImageAPI {
  constructor() {
    this.query='';
    this.page=1;
    this.per_page=40;
    this._searchParams=searchParams;
    this._items=items;
  }

  async fetchImage() {
    const { data } = await axios.get(
      `${BASE_URL}?key=${KEY_SUCSESS}&q=${this.query}&page=${this.page}&per_page=${this.per_page}`,
      this.searchParams
    );
    const totalPage = data.totalHits / this.per_page;
    this.items = [...data.hits];
    if (this.items.length === 0) {
      Notify.info(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    if (this.page > totalPage) {
      Notify.info("We're sorry, but you've reached the end of search results.");
      refs.loadMoreBtn.disabled = true;
      return;
    }
    console.log(items);
    return items;
  }

  render() {
      const markup = this.items.map(getItemsTemplate).join('');
      console.log(markup)
      return refs.gallery.insertAdjacentHTML('beforeend',markup);
      }
}
