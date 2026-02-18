import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import SuccessCases from './components/SuccessCases';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="content">
        <div className="main-container">
          <WhatWeDo />
          <WhoWeAre />
          <SuccessCases />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
