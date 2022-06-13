import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import { getImages } from "../../firebase";

export default function Gallery({ kidId }) {
  const [craftworks, setCraftworks] = useState();

  useEffect(() => {
    console.log(kidId);
    fetch(`https://deploy-kidsy-api-fb.web.app/craftworks/${kidId}`)
      .then((response) => response.json())
      .then((data) => setCraftworks(data.data))
      .catch(console.error);
  }, [kidId]);

  useEffect(() => {
    console.log(craftworks);
  }, [craftworks]);

  return (
    <section style={{ margin: "60px" }}>
      {!craftworks ? (
        <h2>Loading...</h2>
      ) : (
        craftworks.map((craftwork) => (
          // console.log(craftwork)
          <img src={craftwork.image} key={craftwork.id} />
        ))
      )}
    </section>
  );
}

// https://deploy-kidsy-api-fb.web.app//craftworks/${kidId}
