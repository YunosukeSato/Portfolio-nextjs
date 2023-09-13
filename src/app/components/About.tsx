import Image from "next/image";
import AboutImg from "../../../public/assets/about.jpg";
import Link from "next/link";

function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa
            aspernatur repudiandae aliquam esse laboriosam inventore mollitia
            quibusdam, vero accusamus et libero laborum cupiditate odio! Odio
            quas aliquid voluptas enim? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ex, fugit nam. Doloribus necessitatibus nostrum,
            amet quisquam sed assumenda numquam tenetur, impedit quo, maxime
            illo rerum pariatur quibusdam magnam obcaecati praesentium.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa
            aspernatur repudiandae aliquam esse laboriosam inventore mollitia
            quibusdam, vero accusamus et libero laborum cupiditate odio! Odio
            quas aliquid voluptas enim? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ex, fugit nam. Doloribus necessitatibus nostrum,
            amet quisquam sed assumenda numquam tenetur, impedit quo, maxime
            illo rerum pariatur quibusdam magnam obcaecati praesentium.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
