import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const EducationDescription = () => {
  const programming_languages = [
    "C",
    "C++",
    "Java",
    "HTML/CSS/JS",
    "PHP",
    "Matlab",
  ];

  const languages = programming_languages.map((lang, i) => {
    return (
      <div key={i}>
        <CheckBoxIcon sx={{ color: "teal", marginRight: 2, fontSize: 20 }} />
        <li className="inline">
          <strong>{lang}</strong>
        </li>
      </div>
    );
  });

  return (
    <article className="leading-10">
      <hr className="my-6 opacity-20" />
      <p>
        On 2014, I started my studies at the University of Western Macedonia, at
        the city of Kozani.
      </p>
      <p>
        During my student years, I learned and practiced a variety of
        programming languages such as:
      </p>
      <ul className="leading-6 pl-2">{languages}</ul>
      <hr className="my-6 opacity-60 text-teal-600" />
      <h2 className="text-xl text-teal-600 uppercase">Thesis</h2>
      My thesis title was:
      <p>
        <strong className="text-lg">
          Implementation and comparative study of clustering algorithms on
          provisioning anonymity in the internet of things
        </strong>
      </p>
      <p className="leading-normal">
        By utilizing Matlab, this diploma dissertation focuses on privacy and
        security issues regarding the Internet of Things (IoT) paradigm and
        evaluates the performance of four clustering algorithms towards
        achieving data anonymization.
        <a
          href="https://dspace.uowm.gr/xmlui/handle/123456789/2351"
          target="_blank"
          rel="noreferrer"
          className="no-underline block mt-2 w-max"
        >
          <Button variant="outlined" endIcon={<OpenInNewIcon />}>
            <strong>Find it here</strong>
          </Button>
        </a>
      </p>
      <hr className="my-6 opacity-60 text-teal-600" />
      <p>
        On 2020, I graduated from the university with my final grade being{" "}
        <strong>7,5</strong>.
      </p>
    </article>
  );
};

export default EducationDescription;
