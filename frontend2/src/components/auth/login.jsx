import { Route, NavLink, Link } from "react-router-dom"
import { useForm } from "react-hook-form";

const Login = () =>{
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => { console.log('login data', data) }

    return (

        <>
        <main>
        <div className="container">
    
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
    
                  <div className="d-flex justify-content-center py-4">
                    <a href="index.html" className="logo d-flex align-items-center w-auto">
                      <img src="src/assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">InstaYA</span>
                    </a>
                  </div>
    
                  <div className="card mb-3">
    
                    <div className="card-body">
    
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Ingresa a tu cuenta</h5>
                       
                      </div>
    
                      <form method="POST" action="/dash" className="row g-3 needs-validation" novalidate>
    
                        <div className="col-12">
                          <label for="yourUsername" className="form-label">Correo</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" name="username" className="form-control" id="yourUsername" required />
                            <div className="invalid-feedback">¡Por favor ingresa tu correo!</div>
                          </div>
                        </div>
    
                        <div className="col-12">
                          <label for="yourPassword" className="form-label">Contraseña</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" required />
                          <div className="invalid-feedback">¡Por favor ingresa tu contraseña!</div>
                        </div>
    
                        
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Ingreso</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">¿No tienes una cuenta? 
                            <NavLink to="/registro"> Crea tu cuenta.</NavLink>
                          </p>
                          
                        </div>
                      </form>
    
                    </div>
                  </div>
    
                  <div className="credits">
                    Designed by DavidLife
                  </div>
    
                </div>
              </div>
            </div>
    
          </section>
    
        </div>
      </main>

      

      </>
    )
}

export default Login;