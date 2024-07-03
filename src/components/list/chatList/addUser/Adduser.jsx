import './adduser.css'
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';
const Adduser = () => {

  const [users, setUsers] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    console.log(username);

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setUsers(querySnapshot.docs.map((doc) => doc.data()));
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='adduser'>
      <form onSubmit={handleSearch}>
        <input type="text" name="username" placeholder='Username' />
        <button>Search</button>
      </form>
      {users && users.map((user) => (
        <div className="user" key={user.id}>
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="" />
            <span>{user.username}</span>
          </div>
          <button>Add User</button>
        </div>
      ))}
    </div>
  );
}

export default Adduser