import { useDispatch, useSelector } from 'react-redux';
import { actionAuthGetMyUserData, actionAuthLogout, actionDrawerClose, actionRouteSet } from '../redux/actions';
import NavOption from "./NavOption";

const DrawerCustom = (props) => {
  const dispatch = useDispatch();
  const route = useSelector(state => state.route);

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
          <NavOption
            key={'LOGOUT'}
            active={'LOGOUT' === route}
            handleClick={handleLogout}
            title={'LOGOUT'}
          />
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
          <NavOption
            key={'CHECK'}
            handleClick={handleCheck}
            title={'CHECK is logged in'}
          />
        </nav>
      </div>
    </div>
  );
};

export default DrawerCustom;