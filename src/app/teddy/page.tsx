import teddyImg from "../../../public/assets/projects/TeddyEC.png";
import DetailPage from "../components/DetailPage/DetailPage";

const projectInfo = {
  img: teddyImg,
  name: "Teddy EC",
  technologies: ["Next TS", "Tailwind", "Strapi"],
  description: `*Currently working to deploy*
  EC website using Next.js, TypeScript, Strapi, Stripe. This website is for a board a game company. It has a
  landing page to show the customers the story, rules, and characters. The company is also planning to sell
  character goods so there is a page for them and also payment system using Stripe which makes it easier to handle
  customer's personal informations and payment itself.`,
  url: "/#projects",
};

function page() {
  return (
    <DetailPage
      img={projectInfo.img}
      name={projectInfo.name}
      technologies={projectInfo.technologies}
      description={projectInfo.description}
      url={projectInfo.url}
    />
  );
}

export default page;
