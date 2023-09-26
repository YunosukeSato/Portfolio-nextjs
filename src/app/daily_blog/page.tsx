import blogImg from "../../../public/assets/projects/DailyBlog.png";
import DetailPage from "../components/DetailPage/DetailPage";

const projectInfo = {
  img: blogImg,
  name: "Daily Blog",
  technologies: ["React JS", "Node", "MongoDB", "Tailwind"],
  description: `Blog page using React.js and tailwind for client-side and Node.js and MongoDB for server-side and database. This application allows users to write their own blog about the existing categories. Through the development of this application, I gained hands-on experience in connecting the client-side to a database using Node.js. Additionally, I honed my skills with MongoDB and deepened my understanding of React Router Dom.
  `,
  url: "https://daily-blog-client.vercel.app/",
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
