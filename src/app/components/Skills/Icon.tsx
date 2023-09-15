import Image from "next/image";

type PropType = {
  imgSrc: string;
  title: string;
};

function Icon({ imgSrc, title }: PropType) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imgSrc} width={64} height={64} alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Icon;
