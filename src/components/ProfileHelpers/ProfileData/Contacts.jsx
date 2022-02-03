import facebookIcon from '../../../assets/icons/facebook.png';
import githubIcon from '../../../assets/icons/github.png';
import instagramIcon from '../../../assets/icons/instagram.png';
import mainLinkIcon from '../../../assets/icons/mainLink.png';
import twitterIcon from '../../../assets/icons/twitter.png';
import vkIcon from '../../../assets/icons/vk.png';
import youtubeIcon from '../../../assets/icons/youtube.png';
import websiteIcon from '../../../assets/icons/website.png';

const Contacts = ({ contactTitle, contactValue }) => {
  const icons = {
    github: githubIcon,
    vk: vkIcon,
    facebook: facebookIcon,
    instagram: instagramIcon,
    twitter: twitterIcon,
    youtube: youtubeIcon,
    mainLink: mainLinkIcon,
    website: websiteIcon,
  };

  return (
    contactValue && (
      <a href={contactValue}>
        <img src={icons[contactTitle]} alt="icon" />
      </a>
    )
  );
};

export default Contacts;
