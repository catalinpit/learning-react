const Footer = () => {
    const footerStyle = {
        color: 'blue',
        fontStyle: 'italic',
        fontSize: '25px'
    }

    return (
        <div style={footerStyle}>
            <br />
            <em>A footer with inline styles</em>
        </div>
    )
};

export default Footer;