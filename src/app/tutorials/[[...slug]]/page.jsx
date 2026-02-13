import Titel from "@/components/Titel";
import React from "react";

const TutorialsPage = async({ params }) => {
  const { slug } = await params;  
  const [technology, topic, , page_no, subject] = slug || [];

  console.log(slug);

  return (
    <div>
      <Titel>{technology} tutorials</Titel>
      <h2>{topic}</h2>
      <hr />
      <div className="flex justify-between">
        <h3 className="font-bold">{subject}</h3>
        <p>Page no: {page_no}</p>
      </div>
    </div>
  );
};

export default TutorialsPage;

