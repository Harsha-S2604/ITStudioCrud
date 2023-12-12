import Button from "../Common/Button"
import Form from "../Form"

const Header = ({ heading = '' }) => {

    const buttonStyles = {
        width: '200px',
        float: 'right'
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h2>{ heading }</h2>
                </div>
                <div className="col">
                    <Button
                        dataToggle="modal"
                        dataTarget="formModalCenter"
                        buttonValue='Add User' 
                        size="btn-large"
                        color="btn-outline-primary"
                        styles={buttonStyles}
                    />
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Header