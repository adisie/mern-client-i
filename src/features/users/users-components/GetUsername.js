import {useSelector} from 'react-redux'

// actions from slices
// users slice
import {
    selectAllUsers,
} from '../usersSlice'

const GetUsername = ({userId}) => {
    // states from slices
    const allUsers = useSelector(selectAllUsers)
    let author = allUsers.find(user=>user._id === userId)
  return (
    <span>{author?.username}</span>
  )
}

export default GetUsername