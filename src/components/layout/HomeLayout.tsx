import { FC} from "react";
import { MainView } from "./MainView";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const HomeLayout: FC = () => {
 

  return (
    <div className="h-full overflow-hidden">
      <Navbar />
      <div className="jwa-main-layout">
        <Sidebar />
        <MainView />
      </div>
    </div>
  );
};
