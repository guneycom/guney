import { Sun } from "./Sun";
import { Mountains } from "./Mountains";
import { Town } from "./Town";
import { Boats } from "./Boats";
import { Waves } from "./Waves";
import { SeaBase } from "./SeaBase";

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <Sun />
      <Mountains />
      <Town />
      <Boats />
      <Waves />
      <SeaBase />
    </div>
  );
}

export { Sun, Mountains, Town, Boats, Waves, SeaBase };
