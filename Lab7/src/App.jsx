import './index.css'
import Navigation from './components/Navigation'
import Footer from './components/footer'
import Header from './components/header'
import PlantList from './components/PlantList'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
      <PlantList />
      </main>
      <Footer />
    </>
  )
}

export default App