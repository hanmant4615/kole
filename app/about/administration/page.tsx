"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaUserTie,
  FaUsers,
  FaClipboardList,
  FaBalanceScale,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function AdministrationPage() {
  const { t, language } = useLanguage();

  const electedMembers = [
    {
      name: "श्री/श्रीमती राजेश पाटील / Mr./Mrs. Rajesh Patil",
      position: "Sarpanch / सरपंच",
      ward: "All Wards / सर्व वार्ड",
      phone: "+91-XXXXX-XXXXX",
      email: "sarpanch@grampanchayat.gov.in",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "श्री/श्रीमती सुनिता देशमुख / Mr./Mrs. Sunita Deshmukh",
      position: "Up-Sarpanch / उपसरपंच",
      ward: "All Wards / सर्व वार्ड",
      phone: "+91-XXXXX-XXXXX",
      email: "upsarpanch@grampanchayat.gov.in",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "श्री अनिल शर्मा / Mr. Anil Sharma",
      position: "Ward Member / वार्ड सदस्य",
      ward: "Ward 1 / वार्ड 1",
      phone: "+91-XXXXX-XXXXX",
      email: "ward1@grampanchayat.gov.in",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "श्रीमती मीना कुमार / Mrs. Meena Kumar",
      position: "Ward Member / वार्ड सदस्य",
      ward: "Ward 2 / वार्ड 2",
      phone: "+91-XXXXX-XXXXX",
      email: "ward2@grampanchayat.gov.in",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "श्री विकास जाधव / Mr. Vikas Jadhav",
      position: "Ward Member / वार्ड सदस्य",
      ward: "Ward 3 / वार्ड 3",
      phone: "+91-XXXXX-XXXXX",
      email: "ward3@grampanchayat.gov.in",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "श्रीमती प्रिया वर्मा / Mrs. Priya Verma",
      position: "Ward Member / वार्ड सदस्य",
      ward: "Ward 4 / वार्ड 4",
      phone: "+91-XXXXX-XXXXX",
      email: "ward4@grampanchayat.gov.in",
      image: "https://via.placeholder.com/150",
    },
  ];

  const administrativeStaff = [
    {
      name: "श्री रमेश कुलकर्णी / Mr. Ramesh Kulkarni",
      position: "Gram Sevak / ग्राम सेवक",
      department: "Administration / प्रशासन",
      phone: "+91-XXXXX-XXXXX",
      email: "gramsevak@grampanchayat.gov.in",
    },
    {
      name: "श्रीमती स्मिता राणे / Mrs. Smita Rane",
      position: "Secretary / सचिव",
      department: "Administration / प्रशासन",
      phone: "+91-XXXXX-XXXXX",
      email: "secretary@grampanchayat.gov.in",
    },
    {
      name: "श्री संदीप पवार / Mr. Sandeep Pawar",
      position: "Accountant / लेखापाल",
      department: "Finance / वित्त",
      phone: "+91-XXXXX-XXXXX",
      email: "accountant@grampanchayat.gov.in",
    },
    {
      name: "श्रीमती अनिता भोसले / Mrs. Anita Bhosale",
      position: "Health Worker / आरोग्य कार्यकर्ता",
      department: "Health / आरोग्य",
      phone: "+91-XXXXX-XXXXX",
      email: "health@grampanchayat.gov.in",
    },
  ];

  const committees = [
    {
      nameKey: "admin.standingCommittee",
      icon: FaClipboardList,
      members: 5,
      responsibilityKey: "admin.standingResp",
    },
    {
      nameKey: "admin.financeCommittee",
      icon: FaBalanceScale,
      members: 4,
      responsibilityKey: "admin.financeResp",
    },
    {
      nameKey: "admin.developmentCommittee",
      icon: FaUsers,
      members: 6,
      responsibilityKey: "admin.developmentResp",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.administration")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("admin.subtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaUserTie className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("admin.aboutAdministration")}
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {t("admin.adminText1")}
          </p>
        </section>

        {/* Elected Members */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.electedReps")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electedMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-government-blue to-government-green p-4 text-white text-center">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {language === "mr"
                      ? member.position.includes("Sarpanch")
                        ? "सरपंच"
                        : member.position.includes("Up-Sarpanch")
                        ? "उपसरपंच"
                        : "वार्ड सदस्य"
                      : member.position.split(" / ")[0]}
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-government-blue mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">{member.ward}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaPhoneAlt className="text-government-orange" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaEnvelope className="text-government-orange" />
                      <span className="break-all">{member.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Staff */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.adminStaff")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {administrativeStaff.map((staff, index) => (
              <div
                key={index}
                className="border-l-4 border-government-orange pl-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2">
                  {staff.name}
                </h3>
                <p className="text-government-orange font-semibold mb-1">
                  {staff.position}
                </p>
                <p className="text-gray-600 text-sm mb-3">{staff.department}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaPhoneAlt className="text-government-orange text-xs" />
                    <span>{staff.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaEnvelope className="text-government-orange text-xs" />
                    <span className="break-all">{staff.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Committees */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.panchayatCommittees")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committees.map((committee, index) => {
              const Icon = committee.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="text-4xl text-government-orange mb-4" />
                  <h3 className="text-xl font-bold text-government-blue mb-3">
                    {t(committee.nameKey)}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.members")}:
                      </span>{" "}
                      {committee.members}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.responsibility")}:
                      </span>
                      <br />
                      {t(committee.responsibilityKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Governance Structure */}
        <section className="bg-gradient-to-r from-government-orange to-government-green text-white rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("admin.governanceStructure")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("admin.electedBody")}
              </h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>
                  • {t("admin.sarpanch")} - {t("admin.electedHead")}
                </li>
                <li>
                  • {t("admin.upSarpanch")} - {t("admin.deputyHead")}
                </li>
                <li>
                  • {t("admin.wardMember")} - {t("admin.wardMembers4")}
                </li>
                <li>
                  • {t("admin.standingCommittee")} -{" "}
                  {t("admin.standingCommitteeMembers")}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t("admin.functions")}</h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• {t("admin.function1")}</li>
                <li>• {t("admin.function2")}</li>
                <li>• {t("admin.function3")}</li>
                <li>• {t("admin.function4")}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
