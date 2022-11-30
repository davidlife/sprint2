import { Route, NavLink, Link } from "react-router-dom"

const ordenes = () =>{
    return (

        <>
        <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                
                <NavLink className="logo d-flex align-items-center" to="/ordenes"> 
                <img src="src/assets/img/logo.png" alt=""/>
                <span className="d-none d-lg-block">InstaYA</span>
                
                </NavLink>
                
                </div>

                <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">


                    <li className="  pe-3">

                    <a className="nav-link nav-profile d-flex align-items-center pe-0">
                        <img src="src/assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
                        <span className="d-none d-md-block ps-2">David. Life</span>
                    </a>

                    
                    </li>

                </ul>
                </nav>

        </header>

        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

              


                <li className="nav-heading">Páginas</li>

                <li className="nav-item">
                    <NavLink className="nav-link " to="/ordenes"> 
                    <i className="bi bi-card-list"></i>
                    <span>Ordenes</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/registrar">
                         <i className="bi bi-card-list"></i>
                        <span>Registrar orden</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/"> 
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Salir</span>
                    </NavLink>
                </li>

            </ul>

        </aside>

        <main id="main" className="main">

    <div className="pagetitle">
      <h1> Ordenes</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/ordenes">Home</a></li>
          <li className="breadcrumb-item active">Ordenes</li>
        </ol>
      </nav>
    </div>

    <section className="section dashboard">
      <div className="row">

       
        <div className="col-lg-12">
          <div className="row">

            <div className="col-xxl-12 col-xl-12">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Listado de ordenes</h5>
    
                  
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#Servicio</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ciudad entrega</th>
                        <th scope="col">Direcccion</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Editar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>01/11/2022</td>
                        <td>Medellin</td>
                        <td>Calle 32 c 86 - 16</td>
                        <td>guardado</td>
                        <td><Link className="btn btn-primary" to="/ordenes/1">Editar</Link></td>

                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>18/11/2022</td>
                        <td>Bogota</td>
                        <td>Transversal c sur 32 - 43</td>
                        <td>cumplido</td>
                        <td><Link className="btn btn-primary" to="/ordenes/2">Editar</Link></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>10/11/2022</td>
                        <td>Cartagena</td>
                        <td>Cr 84# 32 - 33</td>
                        <td>cancelado</td>
                        <td><Link className="btn btn-primary" to="/ordenes/3">Editar</Link></td>
                      </tr>
                      
                      
                    </tbody>
                  </table>
                  
                </div>
              </div>
          
            </div>
           
          </div>
        </div>



      </div>
    </section>

  </main>

        <footer id="footer" className="footer">
    <div className="copyright">
      &copy; Copyright Grupo1. All Rights Reserved
    </div>
    <div className="credits">
     
      Designed by DavidLife
    </div>
  </footer>

        </>  
    )
}

export default ordenes;