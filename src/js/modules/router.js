import Navigo from "navigo";
import "../modules/swiper";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { goods } from "../components/goods";
import { mainPage } from "../components/mainPage";
import { product } from "../components/product";
import { cart } from "../components/cart";
import { order } from "../components/order";


const router = new Navigo("/", { linksSelector: "a[href=" / "]" });

export const initRouter = () => {
  router
    .on("/", () => {
      document.body.append(
        header(),
        order(),
        //cart(),
        //product(),
        //mainPage(),
        footer()
      )
      console.log("HOME");
    })
    .on("/favorite", () => {
      document.body.append(
        header(),
        goods(),
        footer()
      );
      console.log("FAVORITE");
    })
    .notFound(() => {
      console.log("ERROR 404");
    });

  router.resolve();
};
