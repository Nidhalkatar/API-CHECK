import Users from "./Users"


const UserList = ({userlist}) => {
    return (
        <div className='N1'>
        <h1>THIS IS OUR USERS LIST  </h1>
        <div className='N2'>
            {userlist.map((el,i)=> <Users users={el} key={i}/>)}
        </div>
        </div>
    )
}
export default UserList