import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Image from "next/image";

// Navbar Fixed
if (typeof window !== "undefined") {
  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };
}

// Hamburger
if (typeof document !== "undefined") {
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Portofolio() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          background: "blue",
          transformOrigin: "0%",
        }}
      />
      {/* Header Start */}
      <header className="bg-transparent absolute top-0 left-0 w-full h-[10vh] flex items-center z-10 ">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <motion.div
                animate={{
                  scale: [0.8, 1, 1, 0.8, 0.8],
                  rotate: [0, 0, 20, 20, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="#home" className="block py-6">
                    <Image
                      src="/icon/logo1.png"
                      alt="foto profile"
                      width={45}
                      height={0}
                      className="max-w-full mx-auto"
                    />
                  </a>
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center px-4">
                <button
                  id="hamburger"
                  name="hamburger"
                  type="button"
                  className="block absolute right-4 lg:hidden"
                >
                  <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                </button>

                <nav
                  id="nav-menu"
                  className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
                >
                  <ul className="block lg:flex">
                    <li className="group">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <a
                          href="#home"
                          className="text-base md:text-white text-black py-2 mx-8 flex
                    group-hover:text-[#00e4ff] transition ease-in-out duration-300"
                        >
                          Home
                        </a>
                      </motion.div>
                    </li>

                    <li className="group">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <a
                          href="#project"
                          className="text-base md:text-white text-black py-2 mx-8 flex
                    group-hover:text-[#00e4ff] transition ease-in-out duration-300"
                        >
                          Project
                        </a>
                      </motion.div>
                    </li>
                    <li className="group">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                      >
                        <a
                          href="#project"
                          className="text-base md:text-white text-black py-2 mx-8 flex
                    group-hover:text-[#00e4ff] transition ease-in-out duration-300"
                        >
                          Experience
                        </a>
                      </motion.div>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          </div>
        </div>
      </header>
      {/* Header End */}

      {/* Hero Section Start */}
      <section id="home" className="pt-36 pb-24">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h1 className="text-5xl font-semibold text-white md:text-7xl">
                  Hi, I&apos;m Hery
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h2 className="font-medium text-[#00e4ff] text-3xl mb-5 lg:text-5xl">
                  I am Web Developer
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <p className="font-medium text-white mb-10 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  tenetur nulla amet, ipsam porro recusandae eos rerum tempora.
                  Repudiandae, odit.
                </p>
              </motion.div>

              <div className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  {/* Instagram */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://instagram.com/iniheryy?igshid=ZDdkNTZiNTM="
                      target="blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-gray-500 text-gray-500 hover:border-[#13d0e5] hover:bg-[#13d0e5] hover:text-white transition duration-300 ease-in-out"
                    >
                      <svg
                        role="img"
                        width={20}
                        className="fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                  </motion.button>

                  {/* GitHub */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://github.com/"
                      target="blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-gray-500 text-gray-500 hover:border-[#13d0e5] hover:bg-[#13d0e5] hover:text-white transition duration-300 ease-in-out"
                    >
                      <svg
                        role="img"
                        width={20}
                        className="fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  </motion.button>

                  {/* Emai */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://github.com/"
                      target="blank"
                      className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-gray-500 text-gray-500 hover:border-[#13d0e5] hover:bg-[#13d0e5] hover:text-white transition duration-300 ease-in-out"
                    >
                      <svg
                        role="img"
                        width={20}
                        className="fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Gmail</title>
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                      </svg>
                    </a>
                  </motion.button>
                </motion.div>
              </div>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Image
                    src="/images/hery1.png"
                    alt="foto profile"
                    width={600}
                    height={0}
                    className="max-w-full mx-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End  */}

      {/* Projects Section Start */}
      <section id="project" className="pt-36 pb-16 bg-gray-100 ">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg text-[#00e4ff] mb-2">
                  Project
                </h4>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-bold text-slate-800 text-3xl mb-4 sm:text-4xl lg:text-5xl">
                  Latest project
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-md text-slate-800 md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  et veritatis error excepturi ducimus, molestias alias officia
                  veniam quod autem!
                </p>
              </motion.div>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <div className="rounded-md shadow-md overflow-hidden">
                  <Image
                    src="/images/p1.jpg"
                    alt="foto profile"
                    width={1000}
                    height={0}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-xl text-slate-800 mt-5 mb-3">
                  Fintechdb
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-base text-slate-800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente debitis autem dolor eligendi, officia eos facilis
                  voluptatum unde tempore placeat!
                </p>
              </motion.div>
            </div>

            <div className="mb-12 p-4 md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <div className="rounded-md shadow-md overflow-hidden">
                  <Image
                    src="/images/p3.jpg"
                    alt="foto profile"
                    width={1000}
                    height={0}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-xl text-slate-800 mt-5 mb-3">
                  Perfinal
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-base text-slate-800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente debitis autem dolor eligendi, officia eos facilis
                  voluptatum unde tempore placeat!
                </p>
              </motion.div>
            </div>

            <div className="mb-12 p-4 md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <div className="rounded-md shadow-md overflow-hidden">
                  <Image
                    src="/images/p2.jpg"
                    alt="foto profile"
                    width={1000}
                    height={0}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-xl text-slate-800 mt-5 mb-3">
                  Work
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-base text-slate-800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente debitis autem dolor eligendi, officia eos facilis
                  voluptatum unde tempore placeat!
                </p>
              </motion.div>
            </div>

            <div className="mb-12 p-4 md:w-1/2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <div className="rounded-md shadow-md overflow-hidden">
                  <Image
                    src="/images/p4.jpg"
                    alt="foto profile"
                    width={1000}
                    height={0}
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-xl text-slate-800 mt-5 mb-3">
                  Nike
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-base text-slate-800">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente debitis autem dolor eligendi, officia eos facilis
                  voluptatum unde tempore placeat!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects seection End */}

      {/* Experience Section Start */}
      <section id="experience" className="pt-12 lg:pt-20 pb-32 bg-gray-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg text-[#00e4ff] mb-2">
                  Experience
                </h4>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <h2 className="font-bold text-slate-800 text-3xl mb-4 sm:text-4xl lg:text-5xl">
                  Which i use
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 2 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-md text-slate-800 md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  perferendis amet velit.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex felx-wrap items-center justify-center">
              <div className="grid grid-cols-3 grid-rows-3 md:flex md:felx-wrap md:items-center md:justify-center">
                {/*  */}

                <motion.ul
                  className="container"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                  ))}
                  <a
                    href="https://www.figma.com/"
                    target="blank"
                    className="md:max-w-[60px] max-w-[50px] flex justify-center items-center mx-4 py-4 lg:grayscale opacity-90 lg:transition lg:duration-300 hover:grayscale-0 lg:hover:opacity-100 lg:mx-6 xl:mx-8"
                  >
                    <Image
                      src="/icon/Figma.svg"
                      alt="foto profile"
                      width={1000}
                      height={0}
                    />
                  </a>
                </motion.ul>

                <motion.ul
                  className="container"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                  ))}
                  <a
                    href="https://nextjs.org/"
                    target="blank"
                    className="md:max-w-[100px] max-w-[100px] flex justify-center items-center mx-4 py-4 lg:grayscale opacity-90 lg:transition lg:duration-300 hover:grayscale-0 lg:hover:opacity-100 lg:mx-6 xl:mx-8"
                  >
                    <Image
                      src="/icon/Nextjs.png"
                      alt="foto profile"
                      width={1000}
                      height={0}
                    />
                  </a>
                </motion.ul>

                <motion.ul
                  className="container"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                  ))}
                  <a
                    href="https://legacy.reactjs.org/"
                    target="blank"
                    className="md:max-w-[100px] max-w-[80px] flex justify-center items-center mx-4 py-4 lg:grayscale opacity-90 lg:transition lg:duration-300 hover:grayscale-0 lg:hover:opacity-100 lg:mx-6 xl:mx-8"
                  >
                    <img src="icon/React.png" alt="html" />
                  </a>
                </motion.ul>

                <motion.ul
                  className="container"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                  ))}
                  <a
                    href="https://www.learn-js.org/"
                    target="blank"
                    className="md:max-w-[100px] max-w-[80px] flex justify-center items-center mx-4 py-4 lg:grayscale opacity-90 lg:transition lg:duration-300 hover:grayscale-0 lg:hover:opacity-100 lg:mx-6 xl:mx-8"
                  >
                    <Image
                      src="/icon/js.png"
                      alt="foto profile"
                      width={1000}
                      height={0}
                    />
                  </a>
                </motion.ul>

                <motion.ul
                  className="container"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                  ))}
                  <a
                    href="https://html5up.net/"
                    target="blank"
                    className="md:max-w-[100px] max-w-[80px] flex justify-center items-center mx-4 py-4 lg:grayscale opacity-90 lg:transition lg:duration-300 hover:grayscale-0 lg:hover:opacity-100 lg:mx-6 xl:mx-8"
                  >
                    <Image
                      src="/icon/html.png"
                      alt="foto profile"
                      width={1000}
                      height={0}
                    />
                  </a>
                </motion.ul>

                <motion.ul
                  className="container"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                  ))}
                  <a
                    href="https://www.css3.com/"
                    target="blank"
                    className="md:max-w-[100px] max-w-[60px] flex justify-center mx-4 py-4 lg:grayscale opacity-90 lg:transition lg:duration-300 hover:grayscale-0 lg:hover:opacity-100 lg:mx-6 xl:mx-8"
                  >
                    <Image
                      src="/icon/css.png"
                      alt="foto profile"
                      width={1000}
                      height={0}
                      className="md:w-[70px] h-[auto]"
                    />
                  </a>
                </motion.ul>

                <motion.ul
                  className="container"
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                  ))}
                  <a
                    href="https://tailwindcss.com/"
                    target="blank"
                    className="md:max-w-[100px] max-w-[80px] flex justify-center items-center mx-4 py-4 lg:grayscale opacity-90 lg:transition lg:duration-300 hover:grayscale-0 lg:hover:opacity-100 lg:mx-6 xl:mx-8"
                  >
                    <Image
                      src="/icon/tw1.png"
                      alt="foto profile"
                      width={1000}
                      height={0}
                    />
                  </a>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experiens Section End */}

      {/* Footer Section Start */}
      <footer className="bg-dark pb-12 px-4">
        <div className="container">
          <div className="w-full pt-10 border-t border-[#242424]">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 2 }}
                    viewport={{ once: true }}
                  >
                    {/* Instagram */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href="https://instagram.com/iniheryy?igshid=ZDdkNTZiNTM="
                        target="blank"
                        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-gray-500 text-gray-500 hover:border-[#13d0e5] hover:bg-[#13d0e5] hover:text-white transition duration-300 ease-in-out"
                      >
                        <svg
                          role="img"
                          width={20}
                          className="fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Instagram</title>
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                      </a>
                    </motion.button>

                    {/* GitHub */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href="https://github.com/"
                        target="blank"
                        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-gray-500 text-gray-500 hover:border-[#13d0e5] hover:bg-[#13d0e5] hover:text-white transition duration-300 ease-in-out"
                      >
                        <svg
                          role="img"
                          width={20}
                          className="fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                    </motion.button>

                    {/* Emai */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a
                        href="https://github.com/"
                        target="blank"
                        className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-gray-500 text-gray-500 hover:border-[#13d0e5] hover:bg-[#13d0e5] hover:text-white transition duration-300 ease-in-out"
                      >
                        <svg
                          role="img"
                          width={20}
                          className="fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Gmail</title>
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                        </svg>
                      </a>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 2 }}
              viewport={{ once: true }}
            >
              <p className="font-medium text-xs text-gray-500 text-center">
                Made with <span className="text-red">❤️</span> by
                <a
                  href="https://instagram.com/iniheryy?igshid=ZDdkNTZiNTM="
                  className="text-[#13d0e5] px-2 font-sans"
                >
                  iniHery
                </a>
                Use
                <a
                  href="https://tailwindcss.com/"
                  className=" text-sky-500 pl-2"
                >
                  Tailwind CSS.
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </div>
  );
}

export default Portofolio;
