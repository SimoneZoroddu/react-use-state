import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import languages from './assets/languages'


function App() {


  return (
    <>
      <AppHeader/>
      <AppMain languages={languages}/>
    </>
  )
}

export default App
