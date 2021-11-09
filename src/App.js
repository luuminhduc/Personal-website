import React, { useState } from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';
import MySkills from './components/MySkills';
import MyWork from './components/MyWork';




const App = () => {
  const [isLight,setIsLight] = useState(true);
  return (
    <BrowserRouter>
    <Header isLight={isLight} setIsLight={setIsLight}/>
    <div className={`min-h-screen transition-all ${isLight?"bg-gray-100 text-gray-900":"bg-gray-900 text-white"}`}>
<div className="px-3 mx-auto w-full lg:max-w-6xl pb-10 md:max-w-3xl">
    <Routes>
     
   <Route  path="/Home" element={<Banner isLight={isLight}/>}/>
   <Route path="/" element={<Navigate replace to="/Home"/>}/>
   <Route  path="/Projects" element={<MyWork isLight={isLight}/>}/>
   <Route  path="/Skills" element={<MySkills isLight={isLight}/>}/>
   

    </Routes>

</div>
</div>
    </BrowserRouter>

  );
}
 
export default App;