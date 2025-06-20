import MobileTabTopMenuBar from "./MobileTabTopMenuBar";
import LaptopTopMenuBar from "./LaptopTopMenuBar";

export default function TopBar() {
  return (
    <>
      <div className="lg:hidden">
        <MobileTabTopMenuBar />
      </div>
      <div className="hidden lg:block">
        <LaptopTopMenuBar />
      </div>
      
    </>
  );
}
