import BasicSpeedDial from "./components/materialCom/speedDial";
import DesingIcons from "./components/ui/DesingIcons";
import dynamic from "next/dynamic";
import QuetionsForm from "./components/materialCom/quetionsform";
import { GalleryWithTab } from "./components/materialCom/tabbar";
import { StepperWithContent } from "./components/materialCom/stepperCom";
export default function Home() {
  return (
    <>
      <div className="dark:bg-black bg-white min-h-screen h-auto">
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
          <div className="md:w-[720px] w-full mx-auto mt-20 md:pb-20 pb-10">
            <StepperWithContent />
          </div>
          <div>
            <QuetionsForm />
          </div>
        </div>
        <div className="mt-10  w-full dark:bg-black">
          <GalleryWithTab />
        </div>
      </div>
    </>
  );
}
