"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedDivProps {
    children?: React.ReactNode,
    className?: string,
    initial?: Object,
    transition?: Object,
    animate?: Object,
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
    className = '',
    children,
    initial = { opacity: 0, y: 100 },
    animate = { opacity: 1, y: 0 },
    transition = { duration: 0.9 }
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        // threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={inView ? animate : initial}
            transition={transition}
            className={`${className}`}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedDiv;
