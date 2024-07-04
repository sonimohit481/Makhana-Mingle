// import { useState } from "react";
// import DATA from "../../dummy.json";

// interface MakhanaVariety {
//   name: string;
//   size: string;
//   price_per_kg: number;
//   popularity: number;
//   common_uses: string[];
//   image_url: string;
// }

// interface MakhanaType {
//   type: string;
//   varieties: MakhanaVariety[];
// }

const MakhanaList = () => {
  //   const [makhanaData, setMakhanaData] = useState<MakhanaType[]>(DATA);

  //   useEffect(() => {
  //     fetch("/path/to/makhana_data.json")
  //       .then((response) => response.json())
  //       .then((data) => setMakhanaData(data));
  //   }, []);

  return (
    <div>
      {/* {DATA.map((type) => (
        <div key={type.type}>
          <h2>{type.type}</h2>
          {type.varieties.map((variety) => (
            <div key={variety.name}>
              <h3>{variety.name}</h3>
              <img src={variety.image_url} alt={variety.name} />
              <p>Size: {variety.size}</p>
              <p>Price per kg: ₹{variety.price_per_kg}</p>
              <p>Popularity: {variety.popularity}/10</p>
              <p>Common Uses: {variety.common_uses.join(", ")}</p>
            </div>
          ))}
        </div>
      ))} */}
    </div>
  );
};

export default MakhanaList;
