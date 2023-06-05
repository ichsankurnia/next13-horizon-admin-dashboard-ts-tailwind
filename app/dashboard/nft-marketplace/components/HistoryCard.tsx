import Card from "@/components/card";
import { FaEthereum } from "react-icons/fa";

const HistoryCard = () => {
  const HistoryData = [
    {
      image: "/img/nfts/Nft1.png",
      title: "Colorful Heaven",
      owner: "Mark Benjamin",
      price: 0.4,
      time: "30s",
    },
    {
      image: "/img/nfts/Nft2.png",
      title: "Abstract Colors",
      owner: "Esthera Jackson",
      price: 2.4,
      time: "50m",
    },
    {
      image: "/img/nfts/Nft3.png",
      title: "ETH AI Brain",
      owner: "Nick Wilson",
      price: 0.3,
      time: "20s",
    },
    {
      image: "/img/nfts/Nft4.png",
      title: "Swipe Circles",
      owner: " Peter Will",
      price: 0.4,
      time: "4h",
    },
    {
      image: "/img/nfts/Nft5.png",
      title: "Mesh Gradients",
      owner: "Will Smith",
      price: 0.4,
      time: "30s",
    },
    {
      image: "/img/nfts/Nft6.png",
      title: "3D Cubes Art",
      owner: " Manny Gates",
      price: 0.4,
      time: "2m",
    },
  ];

  return (
    <Card className={"mt-3 !z-5 overflow-hidden "}>
      {/* HistoryCard Header */}
      <div className="flex items-center justify-between rounded-t-3xl p-3">
        <div className="text-lg font-bold text-navy-700 dark:text-white">
          History
        </div>
        <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
          See all
        </button>
      </div>

      {/* History CardData */}
      {HistoryData.map((data, index) => (
        <div className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700" key={index}>
          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center">
              <img
                className="h-full w-full rounded-xl"
                src={data.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-base font-bold text-navy-700 dark:text-white">
                {" "}
                {data.title}
              </h5>
              <p className="mt-1 text-sm font-normal text-gray-600">
                {" "}
                {data.owner}{" "}
              </p>
            </div>
          </div>

          <div className="mt-1 flex items-center justify-center text-navy-700 dark:text-white">
            <div>
              <FaEthereum />
            </div>
            <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
              <p> { } </p>
              {data.price} <p className="ml-1">ETH</p>
            </div>
            <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
              <p>{data.time}</p>
              <p className="ml-1">ago</p>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default HistoryCard;
