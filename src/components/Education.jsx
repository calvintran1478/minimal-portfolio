import React from "react";
import Title from "./Title";

function Education() {
    return (
        <div className="flex flex-col justify-center my-20">
            <Title>Education</Title>
            <img
                src="../../assets/uoft_logo.png"
                alt="University of Toronto logo"
                className="w-1/3 h-1/3 my-8 object-cover"
            />
            <p className="text-xl mb-6 font-bold">
                PEY Co-op student specializing in computer science, majoring in physics, and minoring in mathematics.
                I'm in my third year and expecting to graduate in May 2026.
            </p>
            <p className="text-xl mb-6 font-bold">CGPA: 3.73 / 4.0</p>
            <p className="text-xl mb-6 font-medium">
                <div className="font-bold">Some of my favourite courses taken at UofT:</div>
                Software Design, Software Tools and Systems Programming, Principles of Programming Languages, Introduction to Mathematical Logic,
                Mathematical and Computational Physics.
            </p>
        </div>
    );
}

export default Education;