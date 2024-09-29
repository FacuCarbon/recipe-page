const Instructions = () => {
  const Item = ({ title, paragraph }: { title: string; paragraph: string }) => (
    <li className="text-stone-600 mt-2 ">
      {" "}
      {title}: <span className="text-base font-semibold">{paragraph}</span>
    </li>
  );

  return (
    <section className="p-5 md:p-0 md:mt-6 md:mb-6">
      <h2 className="text-amber-800 text-3xl font-bold">Instrucciones</h2>

      <ul className="list-decimal pt-3 pb-3 pl-6 font-bold">
        <Item
          title="Batir los huevos"
          paragraph="En un bol, bate los huevos con una pizca de sal y pimienta hasta que
            estén bien mezclados. Puedes añadir una cucharada de agua o leche
            para obtener una textura más esponjosa."
        />

        <Item
          title="Calentar la sartén"
          paragraph="Poner una sartén antiadherente a fuego medio y añadir manteca o
            aceite."
        />

        <Item
          title="Cocer la tortilla"
          paragraph=" Cuando la manteca esté derretida y burbujeante, vierte los huevos.
            Incline la sartén para los huevos cubran uniformemente la
            superficie."
        />

        <Item
          title="Añadir los rellenos (opcional)"
          paragraph=" Cuando los huevos empiecen a cuajar en los bordes, pero aún estén
            ligeramente líquidas en el centro, espolvoree los rellenos de su
            elección sobre una de las mitades de el omelette. en el centro,
            esparza el relleno que desee sobre una mitad de el omelette."
        />

        <Item
          title="Doblar y servir"
          paragraph=" Mientras la tortilla sigue cociéndose, levante con cuidado un borde
            y dóblelo sobre el relleno. relleno. Déjela cocer un minuto más y
            deslícela sobre un plato."
        />

        <Item
          title=" Disfrutar"
          paragraph="Servir caliente, con sal y pimienta adicionales si es necesario."
        />
      </ul>
    </section>
  );
};

export default Instructions;
