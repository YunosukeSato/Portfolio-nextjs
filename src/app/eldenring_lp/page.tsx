import lpImg from "../../../public/assets/projects/EldenRing.png";
import DetailPage from "../components/DetailPage/DetailPage";

const projectInfo = {
  img: lpImg,
  name: "Elden Ring LP",
  technologies: ["HTML", "SCSS", "JavaScript", "CSS"],
  description: `Landing page with Sass and jQuery. This landing page is for learning how to use SCSS. Using SCSS, I could write
  and manage the codes easier than with vanilla CSS.`,
  url: "https://elden-ring-blond.vercel.app/",
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
