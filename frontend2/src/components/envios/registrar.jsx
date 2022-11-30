import { Route, NavLink, Link } from "react-router-dom"

const Registrar = () =>{
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
                    <NavLink className="nav-link collapsed" to="/ordenes"> 
                    <i className="bi bi-card-list"></i>
                    <span>Ordenes</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link " to="/registrar">
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

        <main id="main" class="main">

    <div class="pagetitle">
      <h1>Registrar Ordenes</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/ordenes">Home</a></li>
          <li class="breadcrumb-item active">Registrar</li>
        </ol>
      </nav>
    </div>

    <section class="section dashboard">
      <div class="row">

        
        <div class="col-lg-12">
          <div class="row">

            <div class="col-xxl-12 col-xl-12">

              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Registro de ordenes</h5>
    
                  
                  <form>
                    <div class="row mb-3">
                      <label for="inputDate" class="col-sm-2 col-form-label">Fecha</label>
                      <div class="col-sm-4">
                        <input type="date" class="form-control"/>
                      </div>

                      <label for="inputTime" class="col-sm-2 col-form-label">Hora</label>
                      <div class="col-sm-4">
                        <input type="time" class="form-control"/>
                      </div>
                    </div>

                    <div class="row mb-2">
                      <label for="inputNumber" class="col-sm-1 col-form-label">Largo</label>
                      <div class="col-sm-2">
                        <input type="number" class="form-control"/>
                      </div>
                      <label for="inputNumber" class="col-sm-1 col-form-label">Ancho</label>
                      <div class="col-sm-2">
                        <input type="number" class="form-control"/>
                      </div>
                      <label for="inputNumber" class="col-sm-1 col-form-label">Alto</label>
                      <div class="col-sm-2">
                        <input type="number" class="form-control"/>
                      </div>
                      <label for="inputNumber" class="col-sm-1 col-form-label">Peso</label>
                      <div class="col-sm-2">
                        <input type="number" class="form-control"/>
                      </div>
                    </div>


                    <div class="row mb-1">
                      <label for="inputText" class="col-sm-2 col-form-label">Direccion recogida</label>
                      <div class="col-sm-4">
                        <input type="text" class="form-control"/>
                      </div>
                      <label for="inputText" class="col-sm-2 col-form-label">Ciudad recogida</label>
                      <div class="col-sm-4">
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                    
                    <div class="row mb-2">
                      <label for="inputText" class="col-sm-3 col-form-label">Destinatario</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <label for="inputText" class="col-sm-3 col-form-label">Cedula/NIT destinatario</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputText" class="col-sm-2 col-form-label">Dirección entrega</label>
                      <div class="col-sm-4">
                        <input type="text" class="form-control"/>
                      </div>
                      <label for="inputText" class="col-sm-2 col-form-label">Ciudad de entrega</label>
                      <div class="col-sm-4">
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                    
    
                    <div class="row mb-3">
                      <label class="col-sm-2 col-form-label"></label>
                      <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary">Crear orden</button>
                      </div>
                    </div>
    
                  </form>
    
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

export default Registrar;