"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(t("contact.formSubmitted"));
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("contact.getInTouch")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Office Address */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#0A1931] text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-government-blue mb-2 text-lg">
                    {t("contact.address")}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Gram Panchayat Office
                    <br />
                    Village Name, Taluka Name
                    <br />
                    District Name, Maharashtra
                    <br />
                    PIN: 123456
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-government-green text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-xl rotate-90" />
                </div>
                <div>
                  <h3 className="font-bold text-government-blue mb-2 text-lg">
                    {t("contact.phone")}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Office: +91 1234 567 890
                    <br />
                    Sarpanch: +91 7066141001
                    <br />
                    Helpline: 1800-XXX-XXXX
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-government-orange text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-government-blue mb-2 text-lg">
                    {t("contact.email")}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base break-all">
                    kole9527@gmail.com
                    <br />
                    sarpanch@grampanchayat.gov.in
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-government-blue mb-2 text-lg">
                    {t("contact.officeHours")}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Monday - Friday
                    <br />
                    सकाळी ९.४५ ते सं. ६.१५
                    <br />
                    <span className="text-red-500 font-semibold">
                      {language === "mr"
                        ? "रविवार आणि सुट्टीच्या दिवशी बंद"
                        : "Closed on Sundays & Holidays"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-government-blue mb-4 text-lg">
                {t("contact.followUs")}
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
                {t("contact.sendUsMessage")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      {t("contact.fullName")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder={t("contact.enterName")}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      {t("contact.email")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder={t("contact.enterEmail")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      {t("contact.phoneNumber")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder={t("contact.enterPhone")}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      {t("contact.subject")}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors text-sm sm:text-base"
                    >
                      <option value="">{t("contact.selectSubject")}</option>
                      <option value="general">
                        {t("contact.generalInquiry")}
                      </option>
                      <option value="complaint">
                        {t("contact.complaint")}
                      </option>
                      <option value="suggestion">
                        {t("contact.suggestion")}
                      </option>
                      <option value="certificate">
                        {language === "mr" ? "प्रमाणपत्र" : "Certificate"}
                      </option>
                      <option value="scheme">
                        {language === "mr" ? "योजना" : "Scheme"}
                      </option>
                      <option value="other">
                        {language === "mr" ? "इतर" : "Other"}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    {t("contact.message")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder={t("contact.writeMessage")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A1931] hover:bg-government-orange text-white px-6 py-4 rounded-lg font-bold text-base sm:text-lg transition-colors duration-200 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  {t("contact.sendMessage")}
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 bg-[#0A1931] text-white">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {t("contact.locationMap")}
                </h3>
              </div>
              <div className="h-64 sm:h-96 bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2133198478436!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0704334e675%3A0x90e1e4ac2f2e29d4!2sMaharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 bg-red-500 text-white rounded-lg p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t("contact.emergencyContact")}
            </h2>
            <p className="text-base sm:text-lg mb-6">
              {t("contact.emergencyText") ||
                "For urgent matters, please call our emergency helpline"}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-xl sm:text-2xl font-bold">
              <FaPhone className="text-3xl sm:text-4xl rotate-90" />
              <span>1800-XXX-XXXX ({t("contact.tollFree")})</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
