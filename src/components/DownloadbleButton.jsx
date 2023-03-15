import { HiDownload } from "react-icons/hi";
const DownloadbleButton = ({ text, assetSrc }) => {
  return (
    <a
      className="inline-flex items-center gap-2 px-4 py-2 font-medium tracking-wider transition-colors duration-500 ease-out bg-gray-800 border border-gray-800 rounded-md outline-none cursor-pointer hover:font-semibold focus:font-semibold hover:bg-transparent focus:bg-transparent text-neutral-100 hover:text-gray-800 focus:text-gray-800 hover:border-gray-800 focus:border-gray-800 dark:bg-neutral-100 dark:hover:bg-transparent dark:focus:bg-transparent dark:border-neutral-100 dark:text-gray-800 dark:font-semibold dark:hover:text-neutral-100 dark:focus:text-neutral-100"
      href={assetSrc}
      download
    >
      <p className="">{text} </p>
      <HiDownload />
    </a>
  );
};

export default DownloadbleButton;
