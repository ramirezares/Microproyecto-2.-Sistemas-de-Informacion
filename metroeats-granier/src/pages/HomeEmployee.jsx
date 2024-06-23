
import "./HomeEmployee.style.css";
import ChangingButton from "../components/ChangingButton"
import ChangingFooter from "../components/ChangingFooter"
import React from "react"

const HomeEmployee = () => { 
  return(
    <>
    <div>
      <div className="navBar">
        <div className="logo">
          <img src="../../public/MetroEats.png"/>
        </div>

        <div className="logoGranier">
            <img src="../../public/Granieradministradorlogo-remove.png"/>
        </div>

        <div>
          <ChangingButton text="Menu" style="customStyleButtons" link="" />
        </div>

        <div>
          <ChangingButton text="Pedidos" style="customStyleButtons" link="" />
        </div>
        <div>
          <ChangingButton text="Cerrar sesion" style="customStyleButtons" link="" />
        </div>
        
      </div>
      <div className="imageBar">
        <img src="../../public/Bakeryproducts.png" alt="First Image" class="topImage"/>
        <img src="../../public/Granieradministradorlogo-remove.png" alt="Second Image" class="bottomImage"/>
        <div class="overlayText">Pan de Verdad,Cada día</div>
      </div>
      
      <div className="interactionBar">
        <div className="interactionBar_buttons">
          <ChangingButton text="Ir al Menú" link="" style="customStyleButtons2"></ChangingButton>
          <ChangingButton text="Agregar producto o promoción" link="" style="customStyleButtons2"></ChangingButton>
          <ChangingButton text="Gestionar pedidos" link="" style="customStyleButtons2"></ChangingButton>
          <ChangingButton text="Ver Reseña" link="" style="customStyleButtons2"></ChangingButton>
        </div>
        <div className="interactionBar_img">
          <img src="../../public/Chicacafe.jpg"/>
        </div>
      </div>

      <div className="rightsBar">
        <p className="prove"><a href="http://graniervenezuela.com/"><u>@ GRANIER VENEZUELA</u></a> | Derechos reservados</p>
      </div>

      <ChangingFooter className="unimet"footerstate="unimet" />
    </div>
    </>
  )
}

export default HomeEmployee;

