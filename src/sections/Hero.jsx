import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:[72px] max-sm:leading:-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality, comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-4xl font-palanquin font-bold">
                  {item.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40">
        <img
          src={bigShoe1}
          alt="Shoe Collection"
          width={500}
          height={650}
          className="object-contain relative z-10"
        />
      </div>
     
    </section>
  );
};

export default Hero;
