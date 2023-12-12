import { useState } from 'react'
import './form.css'

const Form = ( ) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [hobbies, setHobbies] = useState([])


    const handleChange = (e) => {
        const id = e.target.id
        const value = e.target.value
        switch (id) {
            case "name":
                setName(value)
                break
            case "email":
                setEmail(value)
                break
            case "phone_number":
                setPhoneNumber(value)
                break
        }
    }

    const handleHobbies = (e) => {
        if (e.key == 'Enter') {
            const value = e.target.value
            const newHobbies = [...hobbies, value]
            setHobbies(newHobbies)
            e.target.value = ''
        }
    }

    const handleHobbiesDelete = (e, idx) => {
        const newHobbies = [...hobbies]
        newHobbies.splice(idx, 1)
        setHobbies(newHobbies)
    }

    return (
        <div className="modal fade" id="formModalCenter" tabIndex="-1" role="dialog" aria-labelledby="formModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="formModalTitle">User Form</h4>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name"><b>Name</b></label>
                            <input className="form-control" value={name} onChange={handleChange} id="name" placeholder="enter your name" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="phone number"><b>Phone Number</b></label>
                            <input className="form-control" id="phone_number" value={phoneNumber} onChange={handleChange} placeholder="enter your phone number" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="phone number"><b>Email</b></label>
                            <input type="email" onChange={handleChange} className="form-control" value={email} id="email" placeholder="enter your email" required/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="hobbies"><b>Hobbies</b></label>
                            <input type="text" id="hobbies" onKeyDown={handleHobbies} className="form-control" data-role="tagsinput" placeholder="Press Enter to add hobbies" />
                        </div>
                        <div className='form-group'>
                            {hobbies.map((hobby, index) => (
                                <span key={index} className="chip">
                                    {hobby}
                                    <button type="button" onClick={(e) => {
                                        handleHobbiesDelete(e, index)
                                    }}>X</button>
                                </span>
                            ))}
                        </div>
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Form