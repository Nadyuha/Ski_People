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
        addFavorite(goods);
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
        paginationData(goods, 12)
        header();
        breadcrumb('', main(), [
          {'text': 'Главная', 'href':'/'},
          {'text': 'Лыжи', 'href':'/ski'},
          {'text': 'Горные лыжи', 'href':'/mountain_skies'},
        ]);
        productList('Избранное', localStorageLoad('ski-people-favorite'), main());
        paginationHTML('', main(), paginationData(goods, 12));
        paginationCount(goods);
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
        catalog('', main(), goods);
        productList('Список товаров', goods, main());
        footer();
        addFavorite(goods);
        console.log("SEARCH");
        router.updatePageLinks();
    },{
      leave(done) {
        catalog('remove');
        productList('remove', main());
        done();
      },
    })
    .on('/product', () => {
      header();
      breadcrumb('', main(), [
        {'text': 'Главная', 'href':'/'},
        {'text': 'Лыжи', 'href':'/ski'},
        {'text': 'Горные лыжи', 'href':'/mountain_skies'},
      ]);
      slider();
      product('', main());
      footer();
      console.log('product');
      router.updatePageLinks();
    },{
      leave(done) {
        product('remove');
        breadcrumb('remove');
        done();
      },
    })
    .notFound(() => {
      console.log("ERROR 404");
    });
  router.resolve();
};
