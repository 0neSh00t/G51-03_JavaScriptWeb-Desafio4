import propiedadesVenta from "./data/propiedades_venta.js";
import propiedadesArriendo from "./data/propiedades_alquiler.js";

const mostrarPropiedades = (casas, contenedorId, tipoCarga) => {
  const contenedor = document.getElementById(contenedorId);
  let dividePropiedades = casas;

  if (tipoCarga !== "cargaFull") {
    dividePropiedades = casas.slice(0, 3);
  }

  dividePropiedades.forEach((casa) => {
    const cardPropiedades = document.createElement("div");
    cardPropiedades.className = "col-md-4 mb-4";

    const contenido = `
                        <div class="card">
                          <img
                            src="${casa.src}"
                            class="card-img-top"
                            alt="Imagen de propiedad"
                          />
                          <div class="card-body">
                            <h5 class="card-title">${casa.nombre}</h5>
                            <p class="card-text">${casa.descripcion}</p>
                            <p>
                              <i class="fas fa-map-marker-alt"></i> ${
                                casa.ubicacion
                              }
                            </p>
                            <p>
                              <i class="fas fa-bed"></i> ${casa.habitaciones} |
                              <i class="fas fa-bath"></i> ${casa.banios}
                            </p>
                            <p>
                              <i class="fas fa-dollar-sign"></i>${casa.costo}
                            </p>
                            
                            <p class=${
                              casa.smoke ? "text-success" : "text-danger"
                            }>
                              <i class="${
                                casa.smoke
                                  ? "fas fa-smoking"
                                  : "fas fa-smoking-ban"
                              }  "></i> 
                              ${
                                casa.smoke
                                  ? "Permitido fumar"
                                  : "No se permite fumar"
                              }
                            </p>
                            
                            <p class=${
                              casa.pets ? "text-success" : "text-danger"
                            }>
                            <i class="${
                              casa.pets ? "fas fa-paw" : "fa-solid fa-ban"
                            }"></i> 
                            ${
                              casa.pets
                                ? "Mascotas permitidas"
                                : "No se permiten mascotas"
                            }</p>
                          </div>
                        </div>
                      `;

    cardPropiedades.innerHTML = contenido;
    if (contenedor !== null) {
      contenedor.appendChild(cardPropiedades);
    }
  });
};

if (document.getElementById("fullWeb") !== null) {
  if (document.getElementById("fullWeb").id === "fullWeb") {
    mostrarPropiedades(propiedadesVenta, "divPropiedadesVenta", "cargaFull");
    mostrarPropiedades(
      propiedadesArriendo,
      "divPropiedadesArriendo",
      "cargaFull"
    );
  }
} else {
  mostrarPropiedades(propiedadesVenta, "divPropiedadesVenta", "");
  mostrarPropiedades(propiedadesArriendo, "divPropiedadesArriendo", "");
}
