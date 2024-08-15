import photo from "../../assets/images/visual-designer.png";
import Button from "../ui/button/Button";

const VisualDesigner = () => {
  return (
    <div className="group flex items-center justify-between bg-white px-[4.5rem] py-[1.625rem] outline outline-4 outline-transparent transition-all duration-500 ease-in-out hover:outline-primary-black max-3xl:px-8 max-2xl:px-12 max-sm:flex-col-reverse max-sm:gap-4 max-sm:px-4">
      <div className="flex max-w-[13.25rem] flex-col items-start gap-[30.23px] max-xl:gap-5 max-sm:max-w-full">
        <div className="flex flex-col gap-[15.11px] max-xl:gap-[.625rem] max-sm:items-center">
          <h3 className="text-[.75rem]/[1.125rem] font-semibold text-primary-black max-2xl:text-[.875rem]/[1.25] max-md:text-[1rem]">
            Branding | Image making
          </h3>
          <h3 className="max-xl:text-x-[2rem]/[1.25] text-[2.625rem]/none font-semibold text-primary-black max-3xl:text-[2rem] md:max-2xl:text-[2.625rem] lg:max-xl:text-[2rem] max-sm:text-2xl/tight">
            Visual Designer
          </h3>
          <p className="text-[0.625rem]/[1rem] font-normal text-primary-black max-3xl:text-[0.75rem]/[1.25] max-2xl:text-[.875rem] lg:max-xl:text-[.75rem] max-sm:text-center">
            This is a template Figma file, turned into code using Anima. <br />{" "}
            Learn more at AnimaApp.com
          </p>
        </div>
        <Button>Contact</Button>
      </div>
      <img
        src={photo}
        alt=""
        className="h-[227px] transition-transform duration-500 ease-in-out group-hover:scale-105 lg:max-xl:h-[190px]"
      />
    </div>
  );
};

export default VisualDesigner;
