import LatestWorkItem from "../latestWorkItem/LatestWorkItem";

import image1 from "../../assets/images/latest-work-1.jpg";
import image2 from "../../assets/images/latest-work-2.jpg";
import image3 from "../../assets/images/latest-work-3.jpg";
import image4 from "../../assets/images/latest-work-4.jpg";
import image5 from "../../assets/images/latest-work-5.jpg";
import image6 from "../../assets/images/latest-work-6.jpg";

const LatestWork = ({ isPadding }) => {
  const workItems = [
    { id: 1, title: "Project title", descr: "UI, Art drection", photo: image1 },
    { id: 2, title: "Project title", descr: "UI, Art drection", photo: image2 },
    { id: 3, title: "Project title", descr: "UI, Art drection", photo: image3 },
    { id: 4, title: "Project title", descr: "UI, Art drection", photo: image4 },
    { id: 5, title: "Project title", descr: "UI, Art drection", photo: image5 },
    { id: 6, title: "Project title", descr: "UI, Art drection", photo: image6 },
  ];

  return (
    <div
      className={`trasition-all bg-white py-5 outline outline-4 outline-transparent duration-500 ease-in-out hover:outline-primary-black ${isPadding ? "px-12 max-3xl:px-8 max-sm:px-4" : "px-3 max-sm:px-3"}`}
    >
      <h3
        className={`text-center text-[15.5px] font-semibold text-primary-black ${isPadding ? "mb-6 max-xl:mb-4 max-md:mb-3" : "mb-5 max-xl:mb-4 max-md:mb-3"} max-2xl:text-[1rem] lg:max-xl:text-[.875rem] max-md:mb-3 max-md:text-xl/tight max-sm:text-lg/tight`}
      >
        Latest work
      </h3>
      <div
        className={`grid grid-cols-3 ${isPadding ? "gap-x-5 gap-y-7 max-sm:gap-x-4 max-sm:gap-y-5" : "gap-x-3 gap-y-6 max-sm:gap-y-5"} max-sm:grid-cols-2`}
      >
        {workItems.map(({ id, title, descr, photo }) => {
          return (
            <LatestWorkItem
              key={id}
              title={title}
              descr={descr}
              photo={photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestWork;
