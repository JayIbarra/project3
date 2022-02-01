import { useEffect } from "react";
import { init } from "../utils/init";
import Website from "./Website";

const App = () => {
  useEffect(() => {
    // when App mount

    // INIT
    init()
      .then(() => {
        /*
        // after succesful initialization
        
        */
      })

  });
  return (
    <div className="App" >
      <Website />
    </div >
  );
}

export default App;