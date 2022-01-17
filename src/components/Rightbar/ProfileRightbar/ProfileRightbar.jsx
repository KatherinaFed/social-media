import './profileRightbar.css';

export const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Berlin</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Moscow</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">merried</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/user4.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Elizabeth S.</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/user5.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Elizabeth S.</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/user6.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Elizabeth S.</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/user7.jpeg" alt="" className="rightbarFollowingImg"/>
          <span className="rightbarFollowingName">Elizabeth S.</span>
        </div>
      </div>
    </>
  )
};
