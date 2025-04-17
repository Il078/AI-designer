import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Waitlist: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [error, setError] = useState('');

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setStatus('submitting');
        setError('');

        try {
            // Here you would typically make an API call to your backend
            // For now, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setEmail('');
        } catch (err) {
            setStatus('error');
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="waitlist" className="py-16 bg-primary-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Waitlist</h2>
                    <p className="text-gray-600 mb-8">
                        Be among the first to experience the future of AI-powered fashion styling.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                disabled={status === 'submitting'}
                            />
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full bg-primary-600 text-white py-2 px-6 rounded-lg font-medium
                ${status === 'submitting' ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700'}
                transition duration-300`}
                        >
                            {status === 'submitting' ? 'Joining...' : 'Join Now'}
                        </motion.button>
                    </form>

                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-green-600 mt-4"
                        >
                            Thanks for joining! We'll keep you updated.
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Waitlist; 