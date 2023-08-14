const Footer = () => {
  return (
    <footer className="h-72 bg-gray-900 text-gray-400">
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full block"/>
      <div className="w-full text-center h-full flex items-center justify-center">
        <p>
          <strong>Basic Blog copyright &copy;</strong> by{" "}
          <a
            target="_blank"
            href="https://github.com/MarisaCodes/basic-blog-react"
            className="text-blue-600"
          >
            MarisaCodes
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
