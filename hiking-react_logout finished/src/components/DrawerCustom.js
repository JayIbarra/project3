import { useDispatch, useSelector } from 'react-redux';
import { actionAuthGetMyUserData, actionAuthLogout, actionDrawerClose, actionRouteSet } from '../redux/actions';
import NavOption from "./NavOption";

const DrawerCustom = (props) => {
  const dispatch = useDispatch();
  const route = useSelector(state => state.route);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const handleClickClose = (e) => {
    dispatch(actionDrawerClose());
  };

  const handleLogout = (e) => {
    console.log('click logout');
    dispatch(actionAuthLogout());
  };

  const handleCheck = () => {
    console.log('click check');
    dispatch(actionAuthGetMyUserData());
  };


  let jsx = null;
  if (isLoggedIn) {
    // if logged in
    jsx = (
      <NavOption
        key={'LOGOUT'}
        active={'LOGOUT' === route}
        handleClick={handleLogout}
        title={'LOGOUT'}
      />
    );
  } else {
    // if not logged in
    jsx = (
      <>
        <NavOption
          key={'LOGIN'}
          active={'LOGIN' === route}
          handleClick={(e) => { dispatch(actionRouteSet('LOGIN')) }}
          title={'LOGIN'}
        />
        <NavOption
          key={'REGISTER'}
          active={'REGISTER' === route}
          handleClick={(e) => { dispatch(actionRouteSet('REGISTER')) }}
          title={'REGISTER'}
        />
      </>
    );
  }

  return (
    <div className="drawer text-nowrap">
      <div className="drawer-close" onClick={handleClickClose}>×</div>
      <div className="pad">
        <nav>
          <NavOption
            key={'HOME'}
            active={'HOME' === route}
            handleClick={(e) => { dispatch(actionRouteSet('HOME')) }}
            title={'HOME'}
          />
          {jsx}
        </nav>
      </div>
    </div>
  );
};

export default DrawerCustom;