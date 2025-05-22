import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import ShinyButton from "./ShinyButton";

Modal.setAppElement("#__next");

type BookCallModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const BookCallModal: React.FC<BookCallModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const preferredDate = `${formData.date} at ${formData.time}`;

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          preferredDate,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", date: "", time: "" });

        // Optional: Close modal after 2 seconds
        setTimeout(() => {
          setSuccess(false);
          onRequestClose();
        }, 2000);
      } else {
        alert("Failed to book the call. Try again.");
      }
    } catch (err) {
      alert({ err });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg border border-orange-500"
      >
        <h2 className="text-2xl font-bold text-white mb-5">Book a Call 🔥</h2>
        {success ? (
          <p className="text-green-400 text-lg mb-4">
            Call booked successfully!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600"
            />
            <div className="mt-4">
              <ShinyButton label={submitting ? "Booking..." : "Book Now"} />
            </div>
          </form>
        )}
      </motion.div>
    </Modal>
  );
};

export default BookCallModal;
