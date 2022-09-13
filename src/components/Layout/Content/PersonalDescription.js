import React, { useEffect, useState } from "react";

const PersonalDescription = () => {
  const [age, setAge] = useState();
  useEffect(() => {
    let date1 = new Date();
    let d2 = new Date(1996, 9, 23).getTime();
    let date2 = new Date(d2);
    let years = date1.getFullYear() - date2.getFullYear();
    setAge(years);
  }, []);

  return (
    <article className="leading-10">
      <hr className="my-6 opacity-20" />
      Dear visitor, welcome to my personal portofolio.
      <br />
      Here, you can find all the information you need to know about me , along
      with all the projects I have worked on. <br />My name is{" "}
      <strong>Klevest Palucaj</strong> and I was born in Albania
      <img
        src="assets/images/albanian_flag.png"
        alt="albanian-flag"
        className="inline mx-2"
        width={25}
      />
      on <strong>23/09/1996</strong>. Currently, I am {age} years old.
      <br />
      I have been living my whole life in Greece
      <img
        src="assets/images/greece_flag.png"
        alt="greece-flag"
        className="inline mx-2"
        width={25}
      />
      and on August 2020 I graduated from the{" "}
      <strong>
        University of Western Macedonia, Department of Computer Engineering and
        Telecommunications
      </strong>
      <a href="https://ece.uowm.gr/" target="_blank" rel="noreferrer">
        <img
          src="assets/images/uowm.png"
          alt="greece-flag"
          className="inline mx-2"
          width={25}
        />
      </a>
      .
      <br />
    </article>
  );
};

export default PersonalDescription;
