export const containerVariants = (delay = 0) => ({
    "offscreen": {
        opacity: 0,
        y: 30,
        filter: "brightness(0.5)"
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        filter: "brightness(1)",
        transition: {
            type: "spring",
            duration: 2,
            delay,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
})

export const tagVariants = {
    "offscreen": {
        opacity: 0,
        y: 10,
        scale: 0.9,
        filter: "brightness(0.7)"
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "brightness(1)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
}

export const titleVariants = {
    "offscreen": {
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: "brightness(0.7)"
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "brightness(1)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 1.5
        }
    }
}

export const fadeInVariants = {
    "offscreen": {
        opacity: 0,
        y: 20,
        filter: "brightness(0.5)"
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        filter: "brightness(1)",
        transition: {
            type: "spring",
            duration: 1.5,
            ease: "easeOut"
        }
    }
}

export const scaleVariants = {
    "offscreen": {
        scale: 0.85,
        opacity: 0
    },
    "onscreen": {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
}

export const slideInVariants = (direction = "left", delay = 0) => ({
    "offscreen": {
        x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        opacity: 0
    },
    "onscreen": {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay
        }
    }
})

export const glowVariants = {
    "offscreen": {
        opacity: 0,
        scale: 0.9,
        filter: "brightness(0.5) blur(10px)"
    },
    "onscreen": {
        opacity: 1,
        scale: 1,
        filter: "brightness(1) blur(0px)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1.5
        }
    }
}

export const cardVariants = {
    "offscreen": {
        y: 50,
        opacity: 0,
        scale: 0.95,
        filter: "brightness(0.5)"
    },
    "onscreen": {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "brightness(1)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1
        }
    }
}

export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren
        }
    }
})

export const footerVariants = {
    "hidden": {
        opacity: 0,
        y: 50,
        filter: "brightness(0.5)"
    },
    "show": {
        opacity: 1,
        y: 0,
        filter: "brightness(1)",
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5
        }
    }
}

export const navbarVariants = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
}

export const projectCardVariants = {
    "offscreen": {
        y: 50,
        opacity: 0,
        scale: 0.9,
        filter: "brightness(0.5) blur(5px)"
    },
    "onscreen": {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "brightness(1) blur(0px)",
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1
        }
    },
    "hover": {
        y: -10,
        scale: 1.02,
        filter: "brightness(1.1)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    }
}




// utils/animation.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const fadeInFromTop = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.3 },
  },
};

export const staggerContainer1 = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
