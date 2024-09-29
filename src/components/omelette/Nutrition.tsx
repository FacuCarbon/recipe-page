const Nutrition = () => {
  const Item = ({ item, value }: { item: string; value: string }) => (
    <div className="flex justify-between w-4/5 mb-2 mt-2 md:w-full md:justify-start md:pl-12">
      <p className="text-stone-600  font-semibold text-base min-w-28 md:min-w-96">
        {item}
      </p>
      <p className="text-amber-800  font-bold text-base min-w-16">{value}</p>
    </div>
  );

  return (
    <section className="p-5 md:p-0 md:mt-6">
      <h2 className="text-amber-800 text-3xl font-bold">Nutrición</h2>
      <p className="text-stone-600  font-semibold text-base mt-4">
        La tabla siguiente muestra los valores nutricionales por porción sin los
        rellenos adicionales.
      </p>

      <div className="mt-4 flex flex-col md:justify-start">
        <Item item="Calorias" value="277kcal" />
        <hr />
        <Item item="Carbohidratos" value="0g" />
        <hr />
        <Item item="Proteína" value="20g" />
        <hr />
        <Item item="Grasa" value="22g" />
      </div>
    </section>
  );
};

export default Nutrition;
