const Button = ( { buttonValue, color='', size='', styles, dataToggle, dataTarget } ) => {
    return (
        <div>
            <button 
                type="button"
                className={'btn' + ' ' + color + ' ' + size}
                style={styles}
                data-bs-toggle={dataToggle}
                data-bs-target={'#'+dataTarget}
                >
                    {buttonValue}
            </button>
        </div>
    )
}

export default Button