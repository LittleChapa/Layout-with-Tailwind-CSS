const LatestWorkItem = ({ title, descr, photo }) => {
  return (
    <div className="flex flex-col gap-3">
      <img
        className="block h-40 w-full object-cover lg:max-3xl:h-32 lg:max-xl:h-28 max-sm:h-32"
        src={photo}
        alt={title + " photo"}
      />
      <div className="flex flex-col gap-1">
        <h4 className="text-[.625rem] font-semibold text-primary-black max-3xl:text-[.75rem] max-2xl:text-[.875rem] lg:max-xl:text-[.75rem] max-md:text-base/tight">
          {title}
        </h4>
        <p className="text-[0.525rem] font-normal text-primary-black max-3xl:text-[0.625rem] max-2xl:text-[.75rem] max-md:text-sm/tight">
          {descr}
        </p>
      </div>
    </div>
  );
};

export default LatestWorkItem;
