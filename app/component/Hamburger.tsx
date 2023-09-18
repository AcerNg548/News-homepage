import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function Hamburger() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="sticky top-0 inset-x-0 p-6 bg-none">
      <nav className="container mx-auto">
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 6,
              },
            }}
            className="w-6 bg-Black h-[2px] block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-6 bg-Black h-[2px] block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -6,
              },
            }}
            className="w-6 bg-Black h-[2px] block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "30%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0  bg-OffWhite shadow-VeryDarkBlue shadow-2xl  text-VeryDarkBlue p-6 flex flex-col justify-center space-y-10 "
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6   my-auto mobileBig:mb-[350px]"
                >
                  <li>
                    <a
                      href="#"
                      className="text-[20px] font-semibold hover:text-SoftRed "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[20px] font-semibold hover:text-SoftRed "
                    >
                      New
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[20px] font-semibold hover:text-SoftRed "
                    >
                      Popular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[20px] font-semibold hover:text-SoftRed "
                    >
                      Trending
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[20px] font-semibold hover:text-SoftRed "
                    >
                      Categories
                    </a>
                  </li>
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
