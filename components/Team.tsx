import TeamCard from "./TeamCard";

function Team() {
  return (
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl">
            Meet our team
          </h2>
          <p className="text-xl leading-7 text-gray-300">
            Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet
            lectus sit pretium egestas vel mattis neque.
          </p>
        </div>
        <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:gap-12">
          <TeamCard
            name="Anne Köpcke"
            title=""
            imageSrc="/img/taco.png"
            twitter="https://twitter.com/annekoep"
          />
          <TeamCard
            name="Johannes Köpcke"
            title=""
            imageSrc=""
            linkedin="https://de.linkedin.com/in/johannes-koepcke-48b595147"
          />
        </ul>
      </div>
    </div>
  );
}

export default Team;
