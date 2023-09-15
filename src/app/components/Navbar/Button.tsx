import Link from "next/link";

type PropType = {
  name: string;
  mode: string;
};

function Button({ name, mode }: PropType) {
  return mode === "pc" ? (
    <Link href={`/#${name}`}>
      <li className="ml-10 text-sm uppercase hover:border-b border-b-[#5651e5]">
        {name}
      </li>
    </Link>
  ) : (
    <Link href={`/#${name}`}>
      <li className="py-4 text-sm">{name}</li>
    </Link>
  );
}

export default Button;
