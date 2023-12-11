import Button from "../Common/Button"

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
                    <Button buttonValue='Add User'  size="btn-large" color="btn-outline-primary" styles={buttonStyles}/>
                </div>
            </div>
        </div>
    )
}

export default Header