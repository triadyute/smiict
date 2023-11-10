import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}></Route>
      <Route
        path='/privacy-policy'
        element={<PrivacyPolicy />}></Route>
      <Route
        path='/terms-of-service'
        element={<TermsOfUse />}></Route>
    </Routes>
  );
}

export default App;
