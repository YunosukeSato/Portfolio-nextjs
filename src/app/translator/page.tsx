import translatorImg from "../../../public/assets/projects/Translator.png";
import DetailPage from "../components/DetailPage/DetailPage";

const projectInfo = {
  img: translatorImg,
  name: "ChatGPT Translator",
  technologies: ["React JS", "Tailwind", "ChatGPT API", "JavaScript"],
  description: `Translation website with Chat GPT. This website allows us to
  translate a sentence and other translation websites. In addition,
  the user can choose the mode which determines how to solve a
  sentence and see the explanation of the sentence. Because of the
  financial problem, I probably wouldn&apos;t deploy this app for many
  users but ask a few people to use this app and give me some feedback
  to improve the application.`,
  url: "https://react-translator-five.vercel.app/",
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
