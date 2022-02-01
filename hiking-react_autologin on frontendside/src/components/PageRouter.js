import { useSelector } from "react-redux";
import PageHome from "./PageHome";


const PageRouter = (props) => {
  const route = useSelector((state) => state.route);

  let jsxRoute = null;
  if (route === 'HOME') {
    jsxRoute = (
      <PageHome />
    );
  } else if (route === 'CART') {
    jsxRoute = (
      <PageHome />
    );
  } else {
    jsxRoute = (
      <div>Route not found!</div>
    );
  }

  return (
    <>
      {jsxRoute}
    </>
  );
}

export default PageRouter;