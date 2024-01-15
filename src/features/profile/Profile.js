
// sub - profile components
import ProfileHeaderLinks from "./sub-profiles/ProfileHeaderLinks"
import ProfileContainer from "./sub-profiles/ProfileContainer"

const Profile = () => {
  return (
    <div className="flex-grow flex">
      <div className="m-1 flex-grow flex flex-col">
        {/* profile container */}
        <ProfileContainer />

        {/* header */}
        <ProfileHeaderLinks />

        {/* contents */}
        <div className="bg-opacity-[.1] flex-grow">
          content
        </div>
      </div>
    </div>
  )
}

export default Profile