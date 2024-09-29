const TimePreparation = () => {
  const Item = ({ title, paragraph }: { title: string; paragraph: string }) => (
    <li className="text-stone-600 mt-2 font-semibold text-base">
      <span className="font-bold">{title}:</span> {paragraph}
    </li>
  );

  return (
    <section className="p-5 bg-rose-50 rounded-lg flex flex-col w-5/6 md:mt-6 md:w-full md:p-7">
      <h3 className="text-rose-800 text-xl font-bold">Tiempo de preparación</h3>

      <ul className="list-disc pt-3 pb-3 pl-7">
        <Item title="Total" paragraph="Aproximadamente 10 minutos" />

        <Item title="Preparación" paragraph="5 minutos" />

        <Item title="Cocinar" paragraph="5 minutos" />
      </ul>
    </section>
  );
};

export default TimePreparation;
