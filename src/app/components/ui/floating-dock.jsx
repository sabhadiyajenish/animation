import { cn } from "../../lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
    </>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  const [activeIndex, setActiveIndex] = useState(null); // Track active icon index

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      // onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 gap-4 items-end justify-center w-full rounded-t-3xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item, index) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
          index={index}
          isActive={index === activeIndex} // Check if the current icon is active
          onClick={() => setActiveIndex(index)} // Set the active icon on click
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  index,
  isActive,
  onClick,
}) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-100, 0, 100], [40, 70, 40]);
  let heightTransform = useTransform(distance, [-100, 0, 100], [40, 70, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 35, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(isActive ? 70 : widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(isActive ? 70 : heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(isActive ? 35 : widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(isActive ? 40 : heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <div onClick={onClick}>
      {" "}
      {/* Set the icon as active on click */}
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </div>
  );
}
