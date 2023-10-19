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
       <RowPost url={Action} title={'Action'} isSmall={true} />
       <RowPost url={Horror} title={'Horror'} isSmall={true} />
       <RowPost url={Comedy} title={'Comedy'} isSmall={true} />
      </div>
    );
  }
  
export default Home;
  