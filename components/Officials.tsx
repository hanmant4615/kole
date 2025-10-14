"use client";

import React from "react";
import { FaUserTie } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Officials = () => {
  const { t } = useLanguage();

  const officials = [
    {
      id: 1,
      MarathiName: "श्री. नामदेव गणू पारवे",
      EnglishName: "Mr. Namdev Ganu Parve",
      positionKey: "officials.sarpanch",
      image: "/images/official1.jpg",
      phone: "+91-7066141001",
    },
    {
      id: 2,
      MarathiName: "श्री. इंद्रजीत रविंद्र पाटील",
      EnglishName: "Mr. Indrajit Ravindra Patil",
      positionKey: "officials.upSarpanch",
      image: "/images/official2.jpg",
      phone: "+91-8999854783",
    },
    {
      id: 3,
      MarathiName: "उमरफारुक इकबाल मुल्ला",
      EnglishName: "Umar Farooq Iqbal Mulla",
      positionKey: "officials.secretary",
      image: "/images/official3.jpg",
      phone: "+91-9922729924",
    },
    {
      id: 4,
      MarathiName: "श्री. अक्षय बापुसाहेब कांबळे",
      EnglishName: "Mr. Akshay Bapusaheb Kamble",
      positionKey: "officials.member",
      image: "/images/official3.jpg",
      phone: "+91-9881266379",
    },
    {
      id: 5,
      MarathiName: "सौ. रुपाली प्रकाश कोळेकर ",
      EnglishName: "Mrs. Rupali Prakash Kolekar",
      positionKey: "officials.member",
      image: "/images/official3.jpg",
      phone: "+91-9975149589",
    },
    {
      id: 6,
      MarathiName: "सौ. पुष्पा जितेंद्र डुबल",
      EnglishName: "Mrs. Pushpa Jitendra Dubal",
      positionKey: "officials.member",
      image: "/images/official3.jpg",
      phone: "+91-8999008001",
    },
    {
      id: 7,
      MarathiName: "सौ. विनाली सिद्धार्थ कांबळे",
      EnglishName: "Mrs. Vinali Siddharth Kamble",
      positionKey: "officials.member",
      image: "/images/official3.jpg",
      phone: "+91-7620974833",
    },
    {
      id: 8,
      MarathiName: "श्री. विश्वास आण्णा पारवे",
      EnglishName: "Mr. Vishwas Anna Parve",
      positionKey: "officials.member",
      image: "/images/official3.jpg",
      phone: "+91-9881351002",
    },
    {
      id: 9,
      MarathiName: "सौ. शैलजा संजय कोळेकर",
      EnglishName: "Mrs. Shailaja Sanjay Kolekar",
      positionKey: "officials.member",
      image: "/images/official3.jpg",
      phone: "+91-7263032571",
    },
    {
      id: 10,
      MarathiName: "संतोष भिमराव पाटील",
      EnglishName: "Santosh Bhimrao Patil",
      positionKey: "officials.Police_Patil",
      image: "/images/official3.jpg",
      phone: "+91-9270001001",
    },
    {
      id: 11,
      MarathiName: "संतोष जयवंत जगताप ",
      EnglishName: "Santosh Jaywant Jagtap",
      positionKey: "officials.President",
      image: "/images/official3.jpg",
      phone: "+91-9689845978",
    },
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4 flex items-center">
          <FaUserTie className="text-2xl mr-3" />
          <h2 className="text-2xl font-bold">{t("officials.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officials.map((official) => (
              <div
                key={official.id}
                className="text-center group hover:shadow-xl transition-shadow duration-200 p-6 rounded-lg border border-gray-200"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-government-orange to-government-green p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
                    <FaUserTie className="text-5xl text-gray-400" />
                  </div>
                </div>
                <h3 className="font-bold text-2xl text-government-blue mb-2">
                  {official.MarathiName}
                </h3>
                <h3 className="font-bold text-2xl text-government-blue mb-2">
                  {official.EnglishName}
                </h3>
                <p className="text-gray-600 text-lg">{official.phone}</p>
                <p className="text-government-orange font-semibold text-lg mt-2">
                  {t(official.positionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officials;
