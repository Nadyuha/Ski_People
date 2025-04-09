import Navigo from "navigo";
import "../modules/swiper.js";
import { main } from "../components/mainSection.js";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { goods } from "../components/goods";
import { mainPage } from "../components/mainPage";
import { product } from "../components/product";
import { cart } from "../components/cart";
import { order } from "../components/order";
import { productList } from "../components/productList.js";
import { getData } from "./api.js";
import { catalog } from "../components/catalog.js";


const router = new Navigo("/", { linksSelector: "a[href=" / "]" });

export const initRouter = () => {
  router
    .on("/", async() => {
      const goods = await getData();
        header(),
        catalog(main(), goods),
        productList('Список товаров', goods, main())
        footer()
      console.log("HOME");
    })
    .on("/favorite", () => {
      // document.body.append(
      //   header(),
      //   goods(),
      //   footer()
      // );
      console.log("FAVORITE");
    })
    .notFound(() => {
      console.log("ERROR 404");
    });

  router.resolve();
};
