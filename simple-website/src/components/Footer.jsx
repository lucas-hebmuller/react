function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container">
                <p>&copy; {currentYear} Simple Website</p>
            </div>
        </footer>
    );
}

export default Footer;