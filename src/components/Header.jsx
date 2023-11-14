'use client'
import { aws , mongo } from "@/assets/skills" 
import Image from "next/image"
import { netflix } from "@/assets/projects"
import { navLogo } from "@/assets/other assets"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  return (
    <header className="top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:item-center sticky">
        <motion.div initial={{x: -500,opacity:0,scale:0.5,}} animate={{x:0,opacity:1,scale:1,}} transition={{duration:1.5,}}
        className="flex flex-row items-center">
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100093620785621"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/isultanjaved"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/sultan-idrisi-834881261/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/Si-sultan"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.reddit.com/user/DevSultan__"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
           url="https://devsultan.tumblr.com/"
           fgColor="gray"
           bgColor="transparent"
          />
        </motion.div>
        <motion.div initial={{x: 500,opacity:0,scale:0.5,}} animate={{x:0,opacity:1,scale:1,}} transition={{duration:1,}}>
          <SocialIcon
           network="email"
           fgColor="gray"
           bgColor="transparent"
           className="cursor-pointer"
          />
          <a href="#contact">
          <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
          </a>
        </motion.div>

    </header>
    
  )
}

export default Header