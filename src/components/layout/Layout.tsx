import { FC, PropsWithChildren } from "react";
import HeaderComponent from "@/ui/header/HeaderComponent";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default Layout;
