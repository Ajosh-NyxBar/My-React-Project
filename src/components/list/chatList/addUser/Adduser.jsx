import './adduser.css'
const Adduser = () => {
  return (
    <div className='adduser'>
        <form>
            <input type="text" name="username" id="" placeholder='Username' />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Akbar Josh</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  );
}

export default Adduser