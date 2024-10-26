import { Mask } from "../../components/utils/Mask/Mask";
import { Header } from "../../components/Header/Header"
import { Brands } from "../../components/brands/Brands"

import "./Website.scss";
import { Cars } from "../../components/Cars/Cars";

export const WebSite = () => {

  return (
    <div className="website">
      <Mask className="website__mask" />
      <Header />
      <Brands />
      <Cars />
    </div>
  );
};
