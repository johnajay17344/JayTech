"use client";
import { useState } from "react";
import styles from "./contact.module.css";

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error("Failed to submit");
      setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>

      {/* Name row */}
      <div className={styles.nameRow}>
        <div className={styles.field}>
          <label className={styles.label}>
            First Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="firstname"
            placeholder="john"
            value={formData.firstname}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            Last Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="lastname"
            placeholder="Doe"
            value={formData.lastname}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className={styles.field}>
        <label className={styles.label}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>

      {/* Subject */}
      <div className={styles.field}>
        <label className={styles.label}>
          Subject <span className={styles.required}>*</span>
        </label>
        <div className={styles.selectWrapper}>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${styles.input} ${styles.select} ${!formData.subject ? styles.placeholderSelect : ""}`}
            required
          >
            <option value="" disabled>Select a Subject</option>
            <option value="project_enquiry">Project Enquiry</option>
            <option value="job_opportunity">Job Opportunity</option>
            <option value="collaboration">Collaboration</option>
            <option value="general_message">General Message</option>
          </select>
          <span className={styles.chevron}>&#8964;</span>
        </div>
      </div>

      {/* Message */}
      <div className={styles.field}>
        <label className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          name="message"
          placeholder="Tell me about your project or how I can help you..."
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
          rows={5}
          required
        />
        <span className={styles.hint}>
          Write a meaningful message with at least 3 words and 10 characters. Avoid random characters to increase likelihood.
        </span>
      </div>

      <button type="submit" disabled={isSubmitting} className={styles.button}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}