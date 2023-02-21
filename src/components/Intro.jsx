import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <img
        src="../../assets/profile_picture.jpg"
        alt="profile picture"
        className="w-250 h-250 mb-6 md:h-48 rounded object-cover"
      />
      <h1 className="text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">Calvin Tran</h1>
      <p className="text-base md:text-xl mb-3 font-semibold">Computer Science Student and Software Engineer</p>
      <p className="text-base max-w-4xl mb-6 font-medium">
        Hey I'm Calvin! I'm passionate about all things STEM and combining my knowledge in computer science, physics, and math to solve
        real world problems. Here you will find some of my personal projects in learning new languages and technologies as well as exploring
        ideas that interest me.
      </p>
    </div>
  );
}

export default Intro;
