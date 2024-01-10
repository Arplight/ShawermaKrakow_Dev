import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const pathState = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathState]);
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;
