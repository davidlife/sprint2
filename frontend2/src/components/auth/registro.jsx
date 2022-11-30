import { Route, NavLink, Link } from "react-router-dom"

const Registro = () =>{
   return(

    <>
    <main>
    <div class="container">

      <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt="" />
                  <span class="d-none d-lg-block">InstaYA</span>
                </a>
              </div>

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Crea tu cuenta</h5>
                  </div>

                  <form class="row g-3 needs-validation" novalidate>
                    <div class="col-12">
                      <label for="yourName" class="form-label">Nombre completo</label>
                      <input type="text" name="name" class="form-control" id="yourName" required />
                      <div class="invalid-feedback">Por favor, ingresa tu nombre completo!</div>
                    </div>


                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Correo</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" class="form-control" id="yourUsername" required />
                        <div class="invalid-feedback">Por favor ingresa tu correo!</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Contraseña</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required />
                      <div class="invalid-feedback">¡Por favor ingrese su contraseña!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Confirmar Contraseña</label>
                      <input type="password" name="password" class="form-control" id="yourPassword" required />
                      <div class="invalid-feedback">¡Por favor confimar su contraseña!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required />
                        <label class="form-check-label" for="acceptTerms">Acepto los <a href="#">terminos y condiciones.</a></label>
                        <div class="invalid-feedback">Debes aceptar terminos y condiciones.</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Crear cuenta</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">¿Ya tienes una cuenta? 
                        <NavLink to="/"> Ingresa.</NavLink>
                      </p>
                    </div>
                  </form>

                </div>
              </div>

              <div class="credits">
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

export default Registro;