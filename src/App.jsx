import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import LearningTimeline from './components/LearningTimeline'
import SubHeader from './components/SubHeader'

function App() {
  return (
    <div className="font-sans rtl" dir="rtl">
      {/* Header with fixed positioning */}
      <Header />
      
      {/* Spacer matching header height (prevents content from being hidden) */}
      <div className="h-16 md:h-20"></div>
      
      {/* SubHeader and other content */}
      <SubHeader />
      <AboutMe />
     <LearningTimeline />
     <Footer />
     
      
    </div>
  )
}

export default App