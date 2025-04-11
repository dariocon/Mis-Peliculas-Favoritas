import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
 <div>
  
      <nav style={{display: "flex",justifyContent: "space-between",gap: "10px",position: "fixed",top: "0",left: "0",paddingBottom: "20px",width: "100%",backgroundColor: "#fff" 
      }}>
        <Link to="/index">Home</Link>
        <Link to="/peliculas">pag1</Link>
        <Link to="/addpelicula">Añadir película</Link>
        <Link to="/about">about</Link>
      </nav>


      <div style={{ padding: "20px" }}>
              <Outlet /> 
      </div>
  
  
  
  
  
  </div>   


    </>
  );
};
export default Layout;