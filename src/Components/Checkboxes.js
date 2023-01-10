import React from 'react'
import { useState } from 'react'
import Table from './Table';

function Checkboxes() {
  const [userData, setUserData] = useState([
    {
      name: 'Suresh',
      email: 'suresh@gmail.com',
      label: 'option1'
    },
    {
      name: 'Ayesha',
      email: 'ayesha@gmail.com',
      label: 'option2'
    },
    {
      name: 'Aishu',
      email: 'aishu@gmail.com',
      label: 'option3'
    }
  ]);
  const [isOption1Checked, setIsOption1Checked] = useState(false);
  const [isOption2Checked, setIsOption2Checked] = useState(false);
  const [isOption3Checked, setIsOption3Checked] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === 'option1') {
      if (e.target.checked) {
        setIsOption1Checked(true)
      } else {
        setIsOption1Checked(false)
      }
    }

    if (e.target.id === 'option2') {
      if (e.target.checked) {
        setIsOption2Checked(true)
      } else {
        setIsOption2Checked(false)
      }
    }

    if (e.target.id === 'option3') {
      if (e.target.checked) {
        setIsOption3Checked(true)
      } else {
        setIsOption3Checked(false)
      }
    }
  }
  return (
    <div>
      <form>
        {
          userData.map((user, index) => {
            return <div className='form-check'>
              <label className='form-check-label' key={index}>
                <input type="checkbox" id={user.label} className='form-check-input' 
                onChange={handleChange}></input>
                {user.label}
              </label>
            </div>
          })
        }
      </form>
      {
        isOption1Checked ?
          <Table user={userData[0]} /> :
          ""
      }
      {
        isOption2Checked ?
          <Table user={userData[1]} /> :
          ""
      }
      {
        isOption3Checked ?
          <Table user={userData[2]} /> :
          ""
      }
    </div>
  )
}
export default Checkboxes
