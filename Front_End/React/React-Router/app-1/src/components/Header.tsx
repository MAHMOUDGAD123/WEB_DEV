import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import reactRouterLogo from "/react-router.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <img
        src={reactRouterLogo}
        className="logo react-router"
        alt="React Router"
      />
    </div>
  );
};

export default Header;
