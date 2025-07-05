const Footer = () => {
    const today = new Date();

  return (
    <footer>
        <h1 className="footerText">
            Copyright &copy; {today.getFullYear()}
        </h1>
    </footer>
  )
}

export default Footer
