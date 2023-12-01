import Home from "./Modules/Landingpage/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Fullstack from "./Modules/Projects/Fullstack";
import Apibased from "./Modules/Projects/Apibased";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Chatrooms from "./Modules/Projects/Chatrooms";
import Oncode from "./Modules/Projects/Oncode";
import Tailwind from "./Modules/Projects/Tailwind";
import About from "./Modules/Landingpage/About";

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
              <Route path="/about-me" Component={About}/>
              <Route path="/sahil-full-stack-apps" Component={Fullstack}/>
              <Route path="/sahil-newsfeed-api-based-app" Component={Apibased}/>
              <Route path="/sahil-chatrooms-app" Component={Chatrooms}/>
              <Route path="/sahil-oncode-app" Component={Oncode}/>
              <Route path="/sahil-tailwind-static-templates" Component={Tailwind}/>
          </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
