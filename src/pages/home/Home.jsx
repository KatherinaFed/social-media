import './home.css';
import { Feed } from '../../components/Feed/Feed';
import { Header } from '../../components/Header/Header';
import { Rightbar } from '../../components/Rightbar/Rightbar';
import { Navbar } from '../../components/Navbar/Navbar';

export const Home = () => {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Navbar />
        {/* <Feed />
        <Rightbar /> */}
      </div>
    </>
  )
};
