import "./styles/App.css";
import VisualDesigner from "./components/visualDesigner/VisualDesigner";
import LatestWork from "./components/latestWork/LatestWork";

import productDesignIcon from "./assets/icons/skills-card-icon-1.svg";
import visualDesignIcon from "./assets/icons/skills-card-icon-2.svg";
import artDirectionBigIcon from "./assets/icons/skills-card-icon-5.svg";
import artDirectionSmallerIcon from "./assets/icons/skills-card-icon-3.svg";
import uiUxIcon from "./assets/icons/skills-card-icon-4.svg";
import Skills from "./components/skills/Skills";

const App = () => {
  const skills = [
    {
      id: 1,
      title: "Product Design",
      descr:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      photo: productDesignIcon,
    },
    {
      id: 2,
      title: "Visual Design",
      descr:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      photo: visualDesignIcon,
    },
    {
      id: 3,
      title: "Art Direction",
      descr:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      photo: artDirectionBigIcon,
    },
  ];

  const otherSkills = [
    {
      id: 1,
      title: "Product Design",
      descr:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      photo: productDesignIcon,
    },
    {
      id: 2,
      title: "Visual Design",
      descr:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      photo: visualDesignIcon,
    },
    {
      id: 3,
      title: "Art Direction",
      descr:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      photo: artDirectionSmallerIcon,
    },
    {
      id: 4,
      title: "UI/UX",
      descr:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      photo: uiUxIcon,
    },
  ];

  return (
    <div className="max-xs:gap-4 flex min-h-screen justify-between gap-24 bg-dark pb-8 pl-20 pr-[15px] pt-[5.5rem] max-4xl:gap-20 max-4xl:pl-14 max-3xl:gap-12 max-3xl:pl-[15px] max-2xl:flex-col max-2xl:justify-normal max-2xl:gap-10 max-xl:gap-6 max-xl:pt-10">
      <div className="flex w-full max-w-[27.875rem] flex-col content-start max-2xl:max-w-none max-2xl:items-center">
        <h1 className="max-xs:text-[1.75rem] max-xs:text-center max-xs:mb-[.625rem] mb-[3.125rem] text-[5.7rem]/[6.5rem] font-semibold text-white max-3xl:mb-8 max-3xl:text-[3.75rem]/[1.25] max-2xl:text-[4rem] max-xl:mb-4 max-xl:text-5xl/[1.25] max-md:text-[2rem]">
          Portfolio Template
        </h1>
        <hr className="max-xs:mb-[.625rem] mb-[4.5rem] h-[1px] w-full max-w-[421.72px] border-none bg-white max-3xl:mb-8 max-xl:mb-4" />
        <h2 className="max-xs:text-center max-xs:mb-[.625rem] mb-[8.5rem] text-[3.375rem]/[4.5rem] font-medium text-white max-3xl:mb-12 max-3xl:text-[2.5rem]/[1.25] max-xl:mb-4 max-xl:text-2xl/[1.25] max-md:text-[1.25rem] max-sm:text-[1.125rem]">
          Export your designs to HTML code
        </h2>
        <div className="flex items-center gap-[32.14px]">
          <svg
            className="block transition-transform duration-500 ease-in-out hover:scale-105 max-xl:h-12 max-xl:w-auto"
            width="69"
            height="61"
            viewBox="0 0 69 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.3951 30.6395C68.3951 26.1566 62.7811 21.9082 54.174 19.2737C56.1603 10.5011 55.2775 3.52161 51.3878 1.28708C50.4912 0.762929 49.4429 0.514648 48.298 0.514648V3.59058C48.9325 3.59058 49.4429 3.71472 49.8705 3.94921C51.7464 5.02509 52.5602 9.12174 51.9257 14.3908C51.774 15.6874 51.5257 17.053 51.2223 18.4461C48.5187 17.784 45.567 17.2736 42.4634 16.9426C40.6013 14.3908 38.6702 12.0735 36.7254 10.0459C41.222 5.86649 45.4428 3.57679 48.3118 3.57679V0.500854C44.5187 0.500854 39.553 3.20436 34.5322 7.89413C29.5114 3.23195 24.5458 0.556028 20.7526 0.556028V3.63196C23.6078 3.63196 27.8424 5.90787 32.3391 10.0597C30.408 12.0873 28.4769 14.3908 26.6424 16.9426C23.5251 17.2736 20.5733 17.784 17.8698 18.4599C17.5525 17.0805 17.3181 15.7426 17.1525 14.4598C16.5042 9.19071 17.3043 5.09406 19.1664 4.00438C19.5802 3.7561 20.1181 3.64575 20.7526 3.64575V0.569822C19.594 0.569822 18.5457 0.818103 17.6353 1.34225C13.7594 3.57679 12.8904 10.5425 14.8904 19.2875C6.31091 21.9358 0.724579 26.1704 0.724579 30.6395C0.724579 35.1223 6.3385 39.3707 14.9456 42.0052C12.9593 50.7779 13.8421 57.7573 17.7319 59.9919C18.6284 60.516 19.6767 60.7643 20.8354 60.7643C24.6286 60.7643 29.5942 58.0608 34.615 53.371C39.6358 58.0332 44.6014 60.7091 48.3946 60.7091C49.5532 60.7091 50.6016 60.4608 51.5119 59.9367C55.3879 57.7021 56.2568 50.7365 54.2568 41.9914C62.8087 39.3569 68.3951 35.1085 68.3951 30.6395ZM50.436 21.4393C49.9257 23.2186 49.2912 25.0531 48.5739 26.8877C48.0084 25.7842 47.4153 24.6807 46.767 23.5772C46.1325 22.4738 45.4566 21.3979 44.7807 20.3496C46.7394 20.6392 48.6291 20.9979 50.436 21.4393ZM44.1186 36.1292C43.0428 37.9914 41.9393 39.7569 40.7944 41.3983C38.7392 41.5776 36.6564 41.6742 34.5598 41.6742C32.477 41.6742 30.3942 41.5776 28.3528 41.4121C27.2079 39.7707 26.0907 38.0189 25.0148 36.1706C23.9665 34.3637 23.0147 32.5292 22.1457 30.6808C23.0009 28.8325 23.9665 26.9842 25.001 25.1773C26.0769 23.3152 27.1803 21.5496 28.3252 19.9082C30.3804 19.7289 32.4632 19.6323 34.5598 19.6323C36.6426 19.6323 38.7254 19.7289 40.7668 19.8944C41.9117 21.5358 43.029 23.2876 44.1049 25.1359C45.1532 26.9428 46.1049 28.7774 46.9739 30.6257C46.1049 32.474 45.1531 34.3223 44.1186 36.1292ZM48.5739 34.3361C49.3188 36.1844 49.9533 38.0327 50.4774 39.8259C48.6705 40.2673 46.767 40.6397 44.7945 40.9294C45.4704 39.8673 46.1463 38.7776 46.7808 37.6603C47.4153 36.5568 48.0084 35.4396 48.5739 34.3361ZM34.5874 49.0537C33.3046 47.7295 32.0218 46.2536 30.7528 44.6398C31.9942 44.695 33.2632 44.7363 34.546 44.7363C35.8426 44.7363 37.1254 44.7087 38.3806 44.6398C37.1392 46.2536 35.8564 47.7295 34.5874 49.0537ZM24.3251 40.9294C22.3664 40.6397 20.4767 40.2811 18.6698 39.8397C19.1802 38.0603 19.8147 36.2258 20.5319 34.3913C21.0974 35.4948 21.6906 36.5982 22.3389 37.7017C22.9871 38.8052 23.6492 39.8811 24.3251 40.9294ZM34.5184 12.2253C35.8012 13.5494 37.084 15.0253 38.353 16.6392C37.1116 16.584 35.8426 16.5426 34.5598 16.5426C33.2632 16.5426 31.9804 16.5702 30.7252 16.6392C31.9667 15.0253 33.2494 13.5494 34.5184 12.2253ZM24.3113 20.3496C23.6354 21.4117 22.9596 22.5014 22.3251 23.6186C21.6906 24.7221 21.0974 25.8256 20.5319 26.929C19.7871 25.0807 19.1526 23.2324 18.6284 21.4393C20.4354 21.0117 22.3389 20.6392 24.3113 20.3496ZM11.8283 37.6189C6.94541 35.5361 3.78672 32.805 3.78672 30.6395C3.78672 28.4739 6.94541 25.729 11.8283 23.66C13.0145 23.1496 14.3111 22.6945 15.649 22.2669C16.4353 24.9704 17.4698 27.7842 18.7526 30.6671C17.4836 33.5361 16.4629 36.3361 15.6904 39.0259C14.3249 38.5983 13.0283 38.1293 11.8283 37.6189ZM19.2491 57.3297C17.3732 56.2538 16.5594 52.1572 17.1939 46.8881C17.3456 45.5915 17.5939 44.226 17.8974 42.8328C20.6009 43.4949 23.5527 44.0053 26.6562 44.3363C28.5183 46.8881 30.4494 49.2054 32.3942 51.233C27.8976 55.4124 23.6768 57.7021 20.8078 57.7021C20.1871 57.6884 19.6629 57.5642 19.2491 57.3297ZM51.9671 46.8191C52.6154 52.0882 51.8154 56.1849 49.9533 57.2746C49.5395 57.5228 49.0015 57.6332 48.367 57.6332C45.5118 57.6332 41.2772 55.3573 36.7806 51.2054C38.7116 49.1778 40.6427 46.8743 42.4772 44.3225C45.5945 43.9915 48.5463 43.4811 51.2498 42.8053C51.5671 44.1984 51.8154 45.5364 51.9671 46.8191ZM57.2776 37.6189C56.0913 38.1293 54.7947 38.5845 53.4568 39.0121C52.6706 36.3086 51.6361 33.4947 50.3533 30.6119C51.6223 27.7428 52.643 24.9428 53.4154 22.2531C54.781 22.6807 56.0775 23.1496 57.2914 23.66C62.1742 25.7428 65.3329 28.4739 65.3329 30.6395C65.3191 32.805 62.1604 35.5499 57.2776 37.6189Z"
              fill="#61DAFB"
            />
            <path
              d="M34.5472 36.9428C38.0286 36.9428 40.8508 34.1206 40.8508 30.6392C40.8508 27.1578 38.0286 24.3356 34.5472 24.3356C31.0658 24.3356 28.2436 27.1578 28.2436 30.6392C28.2436 34.1206 31.0658 36.9428 34.5472 36.9428Z"
              fill="#61DAFB"
            />
          </svg>
          <svg
            className="block transition-transform duration-500 ease-in-out hover:scale-105 max-xl:h-12 max-xl:w-auto"
            width="71"
            height="61"
            viewBox="0 0 71 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.4338 0.500854H70.4084L35.4717 60.7643L0.535034 0.500854H14.3374H27.2592L35.4717 14.4755L43.512 0.500854H56.4338Z"
              fill="#41B883"
            />
            <path
              d="M0.535034 0.500854L35.4717 60.7643L70.4084 0.500854H56.4338L35.4717 36.6627L14.3374 0.500854H0.535034Z"
              fill="#41B883"
            />
            <path
              d="M14.3236 0.500732L35.4579 36.8349L56.4199 0.500732H43.4981L35.4579 14.4754L27.2454 0.500732H14.3236Z"
              fill="#35495E"
            />
          </svg>
          <svg
            className="block transition-transform duration-500 ease-in-out hover:scale-105 max-xl:h-14 max-xl:w-auto"
            width="73"
            height="74"
            viewBox="0 0 73 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_701_737)">
              <path
                d="M15.854 0.877075H19.1026V4.0974H22.0969V0.877075H25.3455V10.6228H22.0969V7.37423H19.1308V10.6228H15.854V0.877075ZM29.6393 4.12565H26.7721V0.877075H35.7692V4.12565H32.8879V10.6228H29.6393V4.12565ZM37.1958 0.877075H40.5997L42.6901 4.30927L44.7805 0.877075H48.1844V10.6228H44.9358V5.79231L42.6618 9.29512L40.3878 5.79231V10.6228H37.1958V0.877075ZM49.7946 0.877075H53.0432V7.40248H57.6477V10.6228H49.7946"
                fill="white"
              />
              <path
                d="M15.7517 67.4022L11.0907 15.0861H62.3335L57.6725 67.374L36.6697 73.1931"
                fill="#E44D26"
              />
              <path
                d="M36.6947 68.743V19.3788H57.6409L53.6438 64.0114"
                fill="#F16529"
              />
              <path
                d="M20.6059 25.7777H36.7075V32.1901H27.6397L28.233 38.7579H36.7075V45.1562H22.3573L20.6059 25.7777ZM22.6398 48.3765H29.0804L29.5324 53.5036L36.7075 55.4245V62.1194L23.5437 58.4471"
                fill="#EBEBEB"
              />
              <path
                d="M52.7333 25.7777H36.6599V32.1901H52.1401L52.7333 25.7777ZM51.561 38.7579H36.6599V45.1703H44.5695L43.8209 53.5036L36.6599 55.4245V62.0911L49.7954 58.4471"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_701_737">
                <rect
                  width="72.3161"
                  height="72.3161"
                  fill="white"
                  transform="translate(0.55072 0.876709)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex gap-[1.875rem] max-2xl:mx-auto max-2xl:max-w-screen-xl max-xl:max-w-screen-lg max-xl:gap-[0.875rem] max-lg:flex-col">
        <div className="flex w-full max-w-[38.5rem] flex-col gap-[1.875rem] max-xl:gap-[0.875rem]">
          <VisualDesigner />
          <LatestWork isPadding />
        </div>
        <div className="flex w-full max-w-[38.5rem] flex-col gap-[1.875rem] max-xl:gap-[0.875rem]">
          <Skills skills={skills} />
          <Skills skills={otherSkills} />
          <LatestWork />
        </div>
      </div>
    </div>
  );
};

export default App;
