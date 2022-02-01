import { useDispatch, useSelector } from "react-redux";
import { actionAuthLogout, actionAuthGetMyUserData, actionDrawerOpen } from "../redux/actions";
import PageRouter from "./PageRouter";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import FormReview from "./FormReview";
import FormTour from "./FormTour";
import Drawer from "./DrawerCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Website = (props) => {
  const dispatch = useDispatch();
  const drawerOpened = useSelector(state => state.drawerOpened);

  const handleClickHamburger = () => {
    dispatch(actionDrawerOpen());
  };

  return (
    <>
      <div className={"wrapper" + (drawerOpened ? " drawer-opened" : "")}>
        <Drawer />
        <header>
          <div className="menu-icon" onClick={handleClickHamburger}><FontAwesomeIcon icon={faBars} /></div>
          <div className="logo">American Hiking Club</div>
        </header>
        <div className="page-body">
          <PageRouter />
        </div>
        <h2>forms...</h2>
        <FormTour />
        <FormReview />
        <FormLogin />
        <FormRegister />
      </div>
    </>
  );
};

export default Website;