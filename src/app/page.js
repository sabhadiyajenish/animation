import BasicSpeedDial from "./components/materialCom/speedDial";
import DesingIcons from "./components/ui/DesingIcons";
import dynamic from "next/dynamic";
import QuetionsForm from "./components/materialCom/quetionsform";
import { GalleryWithTab } from "./components/materialCom/tabbar";
import { StepperWithContent } from "./components/materialCom/stepperCom";
import { ExpandableCardDemo } from "../app/components/materialCom/expandableCard";
import { ExpandablecolCardDemo } from "../app/components/materialCom/expandzablecolCard";
import { TracingBeam } from "./components/ui/tracing-beam";
export default function Home() {
  return (
    <>
      <div className="dark:bg-black bg-white min-h-screen h-auto">
        <TracingBeam className="">
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
            {/* <div className=" fixed z-40 mt-[-5rem]">
            <FloatingDockDemo />
          </div> */}
            <div>
              <QuetionsForm />
            </div>
          </div>
          <div className="mt-10 px-2  w-full dark:bg-black">
            <GalleryWithTab />
          </div>
          <div className="md:w-[720px] w-full mx-auto mt-20 md:pb-20 pb-10">
            <StepperWithContent />
          </div>

          <div className=" container mx-auto flex ">
            <ExpandableCardDemo />
            <ExpandablecolCardDemo />
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
