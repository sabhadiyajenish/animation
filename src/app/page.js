import BasicSpeedDial from "./components/materialCom/speedDial";
import DesingIcons from "./components/ui/DesingIcons";
import dynamic from "next/dynamic";
import QuetionsForm from "./components/materialCom/quetionsform";
export default function Home() {
  return (
    <>
      <div className="dark:bg-black bg-white min-h-screen h-[1900px]">
        <div className=" container mx-auto">
          {/* <div> */}

          {/* <LazyRadialGradient
            opacity={"opacity-40"}
            scale="scale-y-100"
            position="-top-24"
          /> */}
          <DesingIcons />
          <BasicSpeedDial />
          {/* </div> */}
          <div>
            <QuetionsForm />
          </div>
        </div>
      </div>
    </>
  );
}
