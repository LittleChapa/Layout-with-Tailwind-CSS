const Skills = ({ skills }) => {
  return (
    <div
      className={`group grid gap-x-3 bg-white px-3 py-5 max-3xl:py-4 ${
        skills.length > 3
          ? "grid-cols-2 gap-y-5 max-3xl:gap-y-3 max-sm:grid-cols-1"
          : "grid-cols-3 max-sm:grid-cols-1"
      } outline outline-4 outline-transparent transition-all duration-500 ease-in-out hover:outline-primary-black max-xl:px-4 max-sm:gap-y-5`}
    >
      {skills.map(({ id, photo, title, descr }) => {
        return (
          <div
            key={id}
            className={`flex gap-5 px-5 py-8 max-4xl:px-4 max-4xl:py-6 lg:max-3xl:py-3 max-2xl:px-5 lg:max-xl:px-1 ${skills.length < 4 && "flex-col items-center"} max-md:px-0 max-md:py-4 max-sm:gap-3 max-sm:py-0`}
          >
            <img
              className={`${skills.length > 3 ? "size-8 xl:max-2xl:size-10 max-lg:size-10" : "size-[3.75rem] xl:max-2xl:size-16 max-lg:size-16"} transition-transform duration-500 ease-in-out group-hover:scale-105`}
              src={photo}
              alt={title + " photo"}
            />
            <div
              className={`flex flex-col gap-[0.35rem] ${skills.length < 4 && "items-center"}`}
            >
              <h3
                className={`text-[0.815rem]/[1.25rem] font-semibold text-primary-black max-2xl:text-[.875rem]/[1.25] lg:max-xl:text-[.75rem] max-md:text-base/tight`}
              >
                {title}
              </h3>
              <p
                className={`text-[0.515rem]/[0.815rem] text-primary-black max-3xl:text-[0.625rem]/[1.25] ${skills.length < 4 && "text-center"} max-2xl:text-[0.75rem] lg:max-xl:text-[.625rem] max-md:text-sm/tight`}
              >
                {descr}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
