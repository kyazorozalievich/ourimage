'use client'
import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { usePathname } from "next/navigation";

interface ILayoutSite {
  children: ReactNode;
}

const LayoutSite: FC<ILayoutSite> = ({ children }) => {
  const pathname = usePathname()
  return (
    <div className={scss.layoutSite}>
      {
        pathname === '/main' ? 
        <Header /> : null
      }
      <main>{children}</main>
      {
        pathname === '/main' ? 
        <Footer /> : null
      }
    </div>
  );
};

export default LayoutSite;
