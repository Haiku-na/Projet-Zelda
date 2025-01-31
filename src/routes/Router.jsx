import { Routes, Route } from "react-router";

import FetchGames from "../components/FetchGames/FetchGames";
import Home from "../pages/Home"; 
import FetchCharacters from "../components/FetchCharacters/FetchCharacters"
import FetchMonsters from "../components/FetchMonsters/FetchMonsters";
import FetchBosses from "../components/FetchBosses/FetchBosses";
import Connect from "../components/Connect/Connect";
import NotFound from "../components/NotFound/NotFound";
import Contact from "../components/Contact/Contact";
import { PrivateRoute } from "../auth/PrivateRoute";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<FetchGames />} />
      <Route path="/characters" element={<FetchCharacters />}/>
      <Route path="/monsters" element={<FetchMonsters />}/>
      <Route path="/bosses" element={<FetchBosses/>}/>
      <Route path="/connect" element={<Connect />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
    </Routes>
  );
}
