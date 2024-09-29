import OmeletteImage from "../../assets/images/image-omelette.jpeg";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";
import TimePreparation from "./Time-preparation";

const Omelette = () => {
  return (
    <div className="md:pt-5 md:pb-7 md:pl-14 md:pr-14">
      <figure className="flex justify-center ">
        <img
          className="w-full md:rounded-2xl aspect-auto"
          src={OmeletteImage}
          alt="image omelette"
        />
      </figure>

      <section className="p-5 md:p-0 md:mt-6">
        <h1 className="text-4xl font-bold text-stone-900">Receta Omelette</h1>

        <p className="text-stone-600 mt-2 font-semibold text-base md:w-11/12 md:mt-4">
          Un plato fácil y rápido, perfecto para cualquier comida. Esta tortilla
          clásica combina huevos batidos y cocidos a la perfección.
          opcionalmente rellenos de queso, verduras o carne a elegir.
        </p>
      </section>

      <TimePreparation />

      <Ingredients />
      <hr />

      <Instructions />

      <hr />
      <Nutrition />
    </div>
  );
};

export default Omelette;
