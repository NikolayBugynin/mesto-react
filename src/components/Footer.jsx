export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {currentYear} Mesto Russia by Nikolay Bugynin
      </p>
      
    </footer>
  );
}

