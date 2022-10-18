import { Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />


    </div>
  )

}
export default App
