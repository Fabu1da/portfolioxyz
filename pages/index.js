import NavBar from "./widget/navBar";
// import Footer from "./widget/footer";
import Project from "./components/project/project";
import Contact from "./widget/contact";
import Technology from "./components/technology/technology";
import About from "./components/aboutme/about";
import Achievement from "./components/achivement/achievement";
import Feature from "./components/feature/feature";
// const cv_url = "https://localhost:3000/pdf/Fabien_Kavuganyi_cv.pdf";

export default function Home() {
  const handleDownload = () => {
    const filename = "Fabien_Kavuganyi_cv.pdf";
    const a = document.createElement("a");
    a.href =
      "https://drive.google.com/file/d/1lTguyb2nFA7sTgpjvLKg7hwTXx7g4m7I/view?usp=share_link";
    a.setAttribute("download", filename);
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  return (
    <>
      <NavBar />
      <div className="main__bg font-bold pt-28 pb-8  " id="home">
        {/* containt */}
        <Feature handleDownload={handleDownload} />
        <div className="md:ml-20 ml-5 h-[5px] w-[60px] bg-orange-600 mt-20  rounded-r-3xl" />
        <h1 className="headtext__base text-orange-600 md:ml-20 ml-5 my-3 text-semibold  text-[48px]">
          Project
        </h1>

        <Project />
      </div>
      <Technology />
      <About />
      <Achievement />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
