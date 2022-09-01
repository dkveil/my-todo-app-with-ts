import { motion } from 'framer-motion'

const AboutPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            aboutPage
        </motion.div>
    );
}

export default AboutPage;