const Button = ( { buttonValue, color='', size='', styles } ) => {
    return (
        <div>
            <button type="button" className={'btn' + ' ' + color + ' ' + size} style={styles}>{buttonValue}</button>
        </div>
    )
}

export default Button