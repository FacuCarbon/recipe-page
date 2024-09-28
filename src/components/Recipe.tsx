import React from "react";
import Omelette from "./../assets/images/image-omelette.jpeg";

const Recipe = () => {
  return (
    <main className="">
      <figure>
        <img src={Omelette} alt="image omelette" />
      </figure>

      <section>
        <h1 className="text-xl font-bold">Receta Omelette</h1>

        <p>
          Un plato fácil y rápido, perfecto para cualquier comida. Esta tortilla
          clásica combina huevos batidos y cocidos a la perfección.
          opcionalmente rellenos de queso, verduras o carne a elegir.
        </p>
      </section>

      <section>
        <h3>Tiempo de preparación</h3>

        <ul>
          <li>hola</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </section>
    </main>
  );
};

export default Recipe;
