import { RiRadioButtonFill } from "react-icons/ri";

type PropType = {
  name: string;
};

function Technologies({ name }: PropType) {
  return (
    <p className="text-gray-600 py-2 flex items-center">
      <RiRadioButtonFill className="pr-1" /> {name}
    </p>
  );
}

export default Technologies;
