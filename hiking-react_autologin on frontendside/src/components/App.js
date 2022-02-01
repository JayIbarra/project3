import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionAuthGetMyUserData } from "../redux/actions";
import { init } from "../utils/init";
import Website from "./Website";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // when App mount

    // INIT
    init()
      .then(() => {
        // after succesful initialization
        dispatch(actionAuthGetMyUserData());
      })

  });
  return (
    <div className="App" >
      <Website />
    </div >
  );
}

export default App;