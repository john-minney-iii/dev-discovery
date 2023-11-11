import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="flex flex-col gap-y-5 max-w-5xl">
        <p className="text-cyan">Hi, my name is</p>
        <h1 className="text-7xl">John Minney III</h1>
        <h2 className="text-3xl">I build things for the web</h2>
        <p>
          I&apos;m a software engineer with expertise in crafting outstanding digital experiences, blending my skills in development and design.
          My enthusiasm lies in creating accessible and high-performing web applications that cater to a diverse audience. Leveraging my proficiency in
          frameworks like Next.js and Remix, I collaborate with companies to enhance their online presence, ensuring a seamless blend of SEO, accessibility,
          and responsiveness.
        </p>
      </div>
    </div>
  );
}

export default Home;
