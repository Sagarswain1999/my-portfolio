
import IconCloud from "./ui/icon-cloud";

const slugs = [
   // GIS & Mapping
  "qgis",
  "arcgis",
  "esri",
  "openstreetmap",
  "mapbox",
  "googleearth",
  "postgis",
  "postgresql",
  "gdal",

  // Geospatial & Data
  "geojson",
  "python",
  "jupyter",
  "numpy",
  "pandas",

  // Web Mapping
  "leaflet",
  "maplibre",
  "javascript",
  "html5",
  "css3",

  // Development Tools
  "github",
  "git",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
