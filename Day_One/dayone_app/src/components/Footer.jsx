import './componentStyles/footer.css'
function Footer() {
    return (
        <footer className='footer'>
            <p>&copy;{ new Date().getFullYear} My App</p>
        </footer>
    )
}
export default Footer