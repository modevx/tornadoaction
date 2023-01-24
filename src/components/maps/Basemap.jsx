import React from "react";
import { geoAlbers, geoPath } from "d3-geo";
import * as topojson from "topojson-client";
import AlbersBasemap from "constants/albers-topojson-map";
import { LinearGradient } from "./LinearGradient";

const projection = geoAlbers();
const pathGen = geoPath(projection);

export const Basemap = ({ children }) => {
  const [basemap, setBasemap] = React.useState();
  const aspectRatio = 1.6;
  const svgW = 975;
  const svgH = svgW / aspectRatio;

  React.useEffect(() => {
    const albersMapWithStateLines = topojson.feature(AlbersBasemap, "states");

    setBasemap(albersMapWithStateLines);
  }, []);

  return (
    <div className="bg-slate-500 rounded-md my-4 hover:bg-slate-500/80 cursor-pointer md:mx-4">
      <svg
        viewBox={`0 -60 ${svgW} ${svgH}`}
        xmlns="http://www.w3.org/2000/svg"
        className="my-auto"
      >
        {basemap &&
          basemap.features.map((feature) => {
            return (
              <path
                key={feature.properties.name}
                d={pathGen(feature)}
                stroke="white"
              />
            );
          })}
        {children}
      </svg>
    </div>
  );
};
