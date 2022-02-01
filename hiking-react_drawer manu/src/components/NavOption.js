const NavOption = (props) => {
  let clActive = '';
  if (props.active === true) {
    clActive = ' active';
  }

  return (
    <div
      className={"option" + (clActive)}
      onClick={props.handleClick}
    >
      <div className="bg"><span className="title">{props.title}</span></div>
    </div>
  )
};

export default NavOption;