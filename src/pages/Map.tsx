import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useRef, useState, useEffect } from "react";
import { TabBarInspector } from "../components/containers/";
import { useAppDispatch, useAppSelector } from "../utils/hooks/useStore";
import { getCoordinates } from "../store/slices/case";
import { setActiveInspectorTabBar } from "../store/slices/general";
import { COORDINATES_BERLIN } from "../utils/constants";

export const Map: React.FC = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.userSlice.userId);
  const coordinates: any = useAppSelector(
    (state) => state.caseSlice.coordinates
  );
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [zoom] = useState(9);

  const renderCurrentMap = () => {
    if (mapContainer.current !== null)
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets/style.json?key=${
          import.meta.env.VITE_MAPTILER_API_KEY
        }`,
        center: coordinates.length ? [coordinates[0].lng, coordinates[0].lat] : COORDINATES_BERLIN,
        zoom,
      });
    map.current.addControl(new maplibregl.NavigationControl({}), "top-right");

    coordinates.map((el: any, index: number) => {
      return new maplibregl.Marker({ color: "#FF0000" })
        .setLngLat([el.lng, el.lat])
        .setPopup(new maplibregl.Popup().setHTML(`<h2>${el.address}<h2>`))
        .addTo(map.current);
    });
  };

  useEffect(() => {
    if(userId) dispatch(getCoordinates(userId));
    dispatch(setActiveInspectorTabBar("map"))
  }, []);

  useEffect(() => {
    if (map.current) return;
    renderCurrentMap();
  }, [coordinates]);

  return (
    <>
      <TabBarInspector />
        { coordinates.lat !== 0 && coordinates.lng !== 0 && (
          <div
            className="MapWindow"
            ref={mapContainer}
            style={{
              width: "100vw",
              height: "100vh",
            }}
          />
        )}
    </>
  );
};
