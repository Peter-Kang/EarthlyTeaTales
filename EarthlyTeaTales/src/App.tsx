import "./App.css";
import Navbar from "./Navbar/Navbar.tsx";
import TeaLoadOut from "./Page/TeaLoadOut/TeaLoadOut.tsx"

function App() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
        <TeaLoadOut></TeaLoadOut>
      </header>
    </main>
  );
}

export default App;
