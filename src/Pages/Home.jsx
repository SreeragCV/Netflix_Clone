import { Originals, Action, Comedy, Horror } from "../urls";
import NavBar from "../Components/NavBar/NavBar";
import Banner from "../Components/Banner/Banner";
import RowPost from "../Components/RowPost/RowPost";

function Home() {
    return (
      <div className="app">
       <NavBar/>
       <Banner/>
       <RowPost url={Originals} title={'Trending'} />
       <RowPost url={Action} title={'Action'} isSmall />
       <RowPost url={Horror} title={'Horror'} isSmall />
       <RowPost url={Comedy} title={'Comedy'} isSmall />
      </div>
    );
  }
  
export default Home;
  