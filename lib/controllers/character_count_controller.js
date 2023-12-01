import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  updateCounter() {
    const numero = document.getElementById("texto").value;
    const respuesta = document.getElementById("respuesta");
    respuesta.innerText = `${numero.length} characters`;
  }
}
