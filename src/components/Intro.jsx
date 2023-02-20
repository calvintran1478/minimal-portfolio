import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <img
        src="../../assets/profile_picture.jpg"
        alt="profile picture"
        className="w-250 h-250 mb-6 md:h-48 rounded object-cover"
      />
      <h1 className="text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">Calvin Tran</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Computer Science Student and Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        This is my entire bio.{' '}
        <a
          href="https://github.com/calvintran1478"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-cyan-600"
          rel="noreferrer noopener"
        >
          github
        </a>{' '}
        More information.
      </p>
      Intro
    </div>
  );
}

export default Intro;
