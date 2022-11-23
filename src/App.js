import './App.css';
import Reviews from './components/Reviews/Review';
import AverageRatings from './components/Average Ratings/AverageRatings';
import SentimentAnalysis from './components/Sentiment Analysis/SentimentAnalysis';
import Navigation from './components/Nav/Nav';
import WebsiteVisitors from './components/Website Visitors/WebsiteVisitors';


function App() {
  return (
    <main>
      <Navigation />
      <Reviews />
      <AverageRatings />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </main>
  );
}

export default App;
