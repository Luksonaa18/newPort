"use client";
import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Basic validation
        if (!name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }
        // Basic email regex validation
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }

        setError(null);

        // Build mailto URL
        const subject = encodeURIComponent(`Message from ${name} via portfolio`);
        const body = encodeURIComponent(message + `\n\nFrom: ${name}\nEmail: ${email}`);
        const mailtoUrl = `mailto:lukazhozhadze53@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoUrl;

        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="lg:w-full max-w-md mx-auto p-6 bg-gray-900 rounded-lg text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && <p className="text-green-400 mb-2">Thanks for your message!</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="p-3 rounded bg-gray-800 border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded font-semibold"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
