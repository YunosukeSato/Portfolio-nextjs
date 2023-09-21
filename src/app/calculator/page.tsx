import calculatorImg from "../../../public/assets/projects/Calculator.png";
import DetailPage from "../components/DetailPage/DetailPage";

const projectInfo = {
  img: calculatorImg,
  name: "Simple Calculator",
  technologies: ["React JS", "JavaScript", "Tailwind"],
  description: `Simple calculator with React.js. I created this app as my first web application with React.js. It works as a generic
  calculator, which can do addition, subtraction, multiplication, and division. This project taught me how to use
  react hooks and modify the state effectively.
  `,
  url: "https://react-calculator-xi-peach.vercel.app/",
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
