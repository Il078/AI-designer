import React from 'react';
import { motion } from 'framer-motion';
import { FaTshirt, FaRobot, FaCloudUploadAlt } from 'react-icons/fa';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
        <div className="text-primary-600 text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const Features: React.FC = () => {
    const features = [
        {
            icon: <FaCloudUploadAlt size={24} />,
            title: "Easy Upload",
            description: "Simply take photos of your clothes and upload them to your virtual wardrobe.",
            delay: 0.2,
        },
        {
            icon: <FaRobot size={24} />,
            title: "AI Styling",
            description: "Our AI analyzes your clothes and suggests perfect outfit combinations.",
            delay: 0.4,
        },
        {
            icon: <FaTshirt size={24} />,
            title: "Smart Wardrobe",
            description: "Organize and manage your clothes digitally, making outfit planning a breeze.",
            delay: 0.6,
        },
    ];

    return (
        <section id="features" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    Features
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features; 