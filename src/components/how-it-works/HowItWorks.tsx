import React from 'react';
import { motion } from 'framer-motion';

interface Step {
    number: number;
    title: string;
    description: string;
}

const StepCard: React.FC<Step & { delay: number }> = ({ number, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex items-start space-x-4"
    >
        <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                {number}
            </div>
        </div>
        <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </motion.div>
);

const HowItWorks: React.FC = () => {
    const steps: Step[] = [
        {
            number: 1,
            title: "Upload Your Clothes",
            description: "Take photos of your clothing items or upload existing pictures to create your digital wardrobe.",
        },
        {
            number: 2,
            title: "Let AI Analyze",
            description: "Our AI system analyzes your clothes, identifying styles, colors, and patterns to understand your wardrobe.",
        },
        {
            number: 3,
            title: "Get Personalized Suggestions",
            description: "Receive AI-powered outfit suggestions based on your style, the occasion, and weather conditions.",
        },
        {
            number: 4,
            title: "Mix and Match",
            description: "Experiment with different combinations and save your favorite outfits for quick access.",
        },
    ];

    return (
        <section id="how-it-works" className="py-16">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    How It Works
                </motion.h2>
                <div className="max-w-3xl mx-auto space-y-8">
                    {steps.map((step, index) => (
                        <StepCard key={index} {...step} delay={0.2 * (index + 1)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks; 