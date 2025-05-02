import Navigo from "navigo";
import "../modules/swiper.js";
import { main } from "../components/mainSection.js";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { product }from "../components/product";
import { cart } from "../components/cart";
import { order } from "../components/order";
import { productList } from "../components/productList.js";
import { getData } from "./api.js";
import { catalog } from "../components/catalog.js";
import { localStorageLoad } from "./localstorage.js";
import { addFavorite } from "./addFavorite.js";
import { breadcrumb } from "../components/breadcrumb.js";
import { slider } from "../modules/swiper.js";
import { search } from "./search.js";
import { paginationHTML } from "../components/paginationHTML.js";
import { paginationCount } from "../components/paginationCount.js";
import { paginationData } from "../components/paginationData.js";
import { addCart } from "./addCart.js";
import { cartCount } from "./cartCount.js";

export const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('/', async() => {
      const goods = await getData();
        paginationData(goods, 12);
        header();
        search();
        catalog('', main(), goods[0]);
        productList('Список товаров', goods[0], main());
        paginationHTML('', main(), goods);
        paginationCount(goods);
        footer();
        addFavorite(goods[0]);
        addCart(goods[0]);
        console.log("HOME");
        router.updatePageLinks();
    },{
      leave(done) {
        catalog('remove');
        productList('remove');
        paginationHTML('remove');
        done();
      },
    })
    .on('/favorite', async() => {
      const goods = await getData();
      let arr = [];
      arr.push(localStorageLoad('ski-people-favorite'));
        paginationData(arr, 12)
        header();
        breadcrumb('', main(), [
          {'text': 'Главная', 'href':'/'},
          {'text': 'Избранное', 'href':'/favorite'},
        ]);
        productList('Избранное', localStorageLoad('ski-people-favorite'), main());
        paginationHTML('', main(), localStorageLoad('ski-people-favorite'));
        paginationCount(arr);
        search();
        footer();
        addFavorite(goods);
        console.log("FAVORITE");
        router.updatePageLinks();
      },{
        leave(done) {
          breadcrumb('remove');
          productList('remove');
          paginationHTML('remove');
          done();
        },
    })
    .on('/search', async (query) => {
      const goods = await getData(query.params.query);
        header();
        catalog('', main(), goods[0]);
        productList('Список товаров', goods[0], main());
        search();
        catalog('remove');
        catalog('', main(), goods[0]);
        productList('remove', main());
        productList('Список товаров', goods[0], main());
        footer();
        addFavorite(goods[0]);
        console.log("SEARCH");
        router.updatePageLinks();
    },{
      leave(done) {
        catalog('remove');
        productList('remove', main());
        done();
      },
    })
    .on('/product', async (id) => {
      const goods = await getData();
      const obj = goods.flat(Infinity).find(item => item.id === Number(id.params.id));
      header();
      breadcrumb('', main(), [
        {'text': 'Главная', 'href':'/'},
        {'text': obj.type, 'href':`/search?query=${obj.type}`},
        {'text': obj.name, 'href': '#'},
      ]);
      slider();
      product('', main(), goods, id.params.id);
      footer();
      console.log("PRODUCT");
      router.updatePageLinks();
    },{
      leave(done) {
        breadcrumb('remove');
        product('remove');
        done();
      },
    })
    .on('/cart', async() => {
      const goods = await getData();
      header();
      cart('Корзина', main(), localStorageLoad('ski-people-cart'));
      search();
      cartCount();
      footer();
      console.log("CART");
      router.updatePageLinks();
    }, {
      leave(done) {
        cart('remove')
        done();
      },
    })
    .notFound(() => {
      console.log("ERROR 404");
    });
  router.resolve();
};
