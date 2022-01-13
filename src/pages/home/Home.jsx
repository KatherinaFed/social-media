import './home.css';
import { Feed } from '../../components/Feed/Feed';
import { Navbar } from '../../components/Navbar/Navbar';
import { Rightbar } from '../../components/Rightbar/Rightbar';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
};
