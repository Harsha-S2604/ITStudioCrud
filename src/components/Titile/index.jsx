import './title.css'
const Title = ({ title }) => {
    return (
        <div className='titleBody'>
            <h1 className="text-center title">{ title }</h1>
        </div>
    )
}

export default Title