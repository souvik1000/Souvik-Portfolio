import HorizontalTimeline from "../../../../utils/HorizontalTimeline";
import ProjectDescription from "./components/ProjectDescription";

const Projects = () => {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <HorizontalTimeline
        style={{ display: "flex", height: "70vh", alignItems: "center" }}
        options={[
          {
            itemName: "Bonsai Market",
            renderedElement: (
              <ProjectDescription
                projectName="Bonsai Market"
                started="Dec 10, 2021"
                ended="Dec 13, 2021"
                techstackList={["Python", "Flask", "JSX", "MySQL"]}
                desciption="It is a Bonsai (plant) shopping website. On this site, users can select their multiple bonsai into their carts and finally before their purchase, they can modify their carts by deleting items from the cart. And after order compilation, it will also be visible in their order history whereas the cart will be empty after purchase."
                project={{
                  url: "https://github.com/souvik1000/Bonsai-WebApp-Flask",
                  site: "GITHUB",
                }}
              />
            ),
          },
          {
            itemName: "Docsy, A Health App",
            renderedElement: (
              <ProjectDescription
                projectName="Docsy, A Health App"
                started="Jan 12, 2022"
                ended="Jan 24, 2022"
                techstackList={[
                  "Python",
                  "Django",
                  "JSX",
                  "CSS",
                  "SqlLite",
                  "Selenium",
                  "AWS",
                ]}
                desciption="Docsy is a health-related web application done by a group of 6 members of Innovaccer. The main purpose of this application is to maintain the history data of patients based on EHR & HIPPA guidelines. But we have also added the OPD appointment feature and are able to download lab reports from the patient & the doctor's portal, uploaded by the lab physician."
                project={{
                  url: "https://github.com/souvik1000/Docsy_Hackfest",
                  site: "GITHUB",
                }}
              />
            ),
          },
          {
            itemName: "Trello Clone",
            renderedElement: (
              <ProjectDescription
                projectName="Trello Clone Application"
                started="Mar 12, 2022"
                ended="Mar 17, 2022"
                techstackList={[
                  "ReactJS",
                  "Redux",
                  "Javascript",
                  "Masala Design System(MDS)",
                ]}
                project={{
                  url: "https://github.com/souvik1000/Trello-clone-application",
                  site: "GITHUB",
                }}
                desciption="t's a replica of the Trello todo application, where users can create and manage their
                TODOs on multiple boards."
                hosted={{
                  url: "https://8huu7s.csb.app/",
                }}
              />
            ),
          },
          {
            itemName: "Weather Component",
            renderedElement: (
              <ProjectDescription
                projectName="Weather Component"
                started="Dec 29, 2022"
                ended="Present"
                techstackList={[
                  "ReactJs",
                  "Redux",
                  "Axios",
                  "TypeScript",
                  "semantic-ui (deprecate)",
                ]}
                desciption="A generic component that helps users to get the weather update of their current location. Also, they can search based on specific locations by city and by pin code. In addition to this, the user can get forecast reports of the upcoming 15 days of data."
                // Todo(Souvik): Have to add video with audio link
                hosted={{
                  url: "https://drive.google.com/file/d/136PNetLNQFGYS_CZzb7cj8d2NOw0K2PK/view?usp=sharing",
                }}
              />
            ),
          },
          {
            itemName: "My Portfolio",
            renderedElement: (
              <ProjectDescription
                projectName="My Portfolio"
                started="Jan 31, 2023"
                ended="Feb 4, 2023"
                techstackList={[
                  "ReactJs",
                  "Redux",
                  "TypeScript",
                  "Formik",
                  "EmailJs",
                ]}
                desciption={`It's a portfolio website, which will express my experience of more than 1 year and my passion side-by-side with my work. This portfolio is based on my profile and users are able to download my resume, contact me directly through email or LinkedIn, and also be able to contribute their valuable feedback at the end regarding my portfolios from this website itself.`}
                project={{
                  url: "#",
                  site: "GITHUB",
                }}
                hosted={{
                  url: "#",
                }}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default Projects;
