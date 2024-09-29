const Ingredients = () => {
  const Item = ({ text }: { text: string }) => (
    <li className="text-stone-600 mt-2 font-semibold text-base">{text}</li>
  );
  return (
    <section className="p-5 md:p-0 md:mt-6 md:mb-6">
      <h2 className="text-amber-800 text-3xl font-bold">Ingredientes</h2>

      <ul className="list-disc pt-3 pb-3 pl-7">
        <Item text="2-3 huevos grandes" />
        <Item text="Sal al gusto" />
        <Item text="Pimienta, al gusto" />
        <Item text="1 cucharada de manteca o aceite" />
        <Item
          text=" Rellenos opcionales: queso, verduras en dados, carnes cocidas, hierbas
          aromáticas"
        />
      </ul>
    </section>
  );
};

export default Ingredients;
