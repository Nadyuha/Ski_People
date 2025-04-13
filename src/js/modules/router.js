import Navigo from "navigo";
import "../modules/swiper.js";
import { main } from "../components/mainSection.js";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { cart } from "../components/cart";
import { order } from "../components/order";
import { productList } from "../components/productList.js";
import { getData } from "./api.js";
import { catalog } from "../components/catalog.js";
import { localStorageLoad } from "./localstorage.js";
import { addFavorite } from "./addFavorite.js";
import { breadcrumb } from "../components/breadcrumb.js";


const router = new Navigo("/", { linksSelector: "a[href=" / "]" });

export const initRouter = () => {
  router
    .on("/", async() => {
      const goods = await getData();
        header();
        catalog(main(), goods);
        productList('Список товаров', goods, main());
        footer();
        addFavorite(goods)
      console.log("HOME");
    })
    .on("/favorite", async() => {
      const goods = await getData();
        header();
        breadcrumb();
        productList('Избранное', localStorageLoad('ski-people-favorite'), main());
        addFavorite(goods);
        footer();
      console.log("FAVORITE");
    })
    .notFound(() => {
      console.log("ERROR 404");
    });

  router.resolve();
};
