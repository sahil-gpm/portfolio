import Home from "./Modules/Landingpage/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Fullstack from "./Modules/Projects/Fullstack";
import Apibased from "./Modules/Projects/Apibased";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {


  useEffect(()=>{
    toast.success("Welcome to my personal portfolio")
  })

  return (
   <div>
     <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                color: "#050a1f",
                fontWeight : 500,
              },
              iconTheme: {
                primary: '#aceb44',
              },
            },

            error: {
              style: {
                color: "#050a1f",
                fontWeight : 500,
              },
              iconTheme: {
                primary: '#aceb44',
              },
            },
          }}
        />
      <BrowserRouter>
          <Routes>
              <Route path="/" Component={Home}/>
              <Route path="/sahil-full-stack-apps" Component={Fullstack}/>
              <Route path="/sahil-newsfeed-api-based-app" Component={Apibased}/>
          </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
