// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../DashboardSidebarComp/styles/mentorship.css";
// import PlatinumCard from "../DashboardSidebarComp/platinumCard";

// const Mentorship = ({ darkMode }) => {
//   const [activeTab, setActiveTab] = useState("sessions");
//   const [activeSubTab, setActiveSubTab] = useState("platinum");
//   const [userData, setUserData] = useState(null);

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";
//   const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!accessToken) return;

//       try {
//         const res = await axios.get(USER_API_URL, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setUserData(res.data);
//       } catch (err) {
//         console.error("Error fetching user:", err);
//       }
//     };

//     fetchUser();
//   }, [accessToken]);

//   return (
//     <div className="container mt-4">
//       {/* Primary Navigation Tabs */}
//       <ul className="nav nav-tabs nav-platinum-tab">
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === "sessions" ? "active" : ""}`}
//             onClick={() => setActiveTab("sessions")}
//           >
//             Manage My Sessions
//           </button>
//         </li>
//         <li className="nav-item">
//           <button
//             className={`nav-link ${activeTab === "pricing" ? "active" : ""}`}
//             onClick={() => setActiveTab("pricing")}
//           >
//             View All Price Plans
//           </button>
//         </li>

//         {/* Only show this button if user is platinum */}
//         {userData?.subscription_status === "platinum" && (
//           <div className="premium-login">
//             <a href="/platinum-dashboard" className="theme_btn">
//               Premium Login
//             </a>
//           </div>
//         )}
//       </ul>

//       <div className={`tab-content mt-3 ${darkMode ? "dark-mode-tab" : ""}`}>
//         {activeTab === "sessions" && (
//           <div className="tab-pane fade show active">
//             <h5>Sessions available:</h5>
//             <p>
//               <strong>0</strong> Starter | <strong>0</strong> Intermediate |{" "}
//               <strong>0</strong> Advanced | <strong>9</strong> Platinum |{" "}
//               <strong>16</strong> Emerald
//             </p>

//             <ul className="nav nav-tabs nav-platinum-tab">
//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${
//                     activeSubTab === "platinum" ? "active" : ""
//                   }`}
//                   onClick={() => setActiveSubTab("platinum")}
//                 >
//                   Platinum
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className={`nav-link ${
//                     activeSubTab === "emerald" ? "active" : ""
//                   }`}
//                   onClick={() => setActiveSubTab("emerald")}
//                 >
//                   Emerald
//                 </button>
//               </li>
//             </ul>

//             <div className="tab-content mt-3 tab-platinum p-0">
//               {activeSubTab === "platinum" && (
//                 <div className="tab-pane fade show active">
//                   <div
//                     className={`card level-card ${darkMode ? "dark-mode" : ""}`}
//                   >
//                     <div className="card-body p-5">
//                       <h4 className="text-primary">Platinum Level</h4>
//                       <p>
//                         Personalized coaching and equipping users with key
//                         resources for options trading.
//                       </p>
//                       <p>
//                         <strong>Includes:</strong> 12 one-on-one meetings, live
//                         stream access, and exclusive alerts.
//                       </p>
//                       <button className="theme_btn">
//                         Join Telegram Alerts
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeSubTab === "emerald" && (
//                 <div className="tab-pane fade show active">
//                   <div
//                     className={`card level-card ${darkMode ? "dark-mode" : ""}`}
//                   >
//                     <div className="card-body p-5">
//                       <h4 className="text-success">Emerald Level</h4>
//                       <p>
//                         Advanced mentorship with real-time trading analysis and
//                         premium market insights.
//                       </p>
//                       <p>
//                         <strong>Includes:</strong> 16 personalized sessions,
//                         expert guidance, and trading strategies.
//                       </p>
//                       <button className="theme_btn">
//                         Join Telegram Alerts
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}

//         {activeTab === "pricing" && (
//           <div className="tab-pane fade show active">
//             <h5>Pricing Plans</h5>
//             <p>Details </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Mentorship;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../DashboardSidebarComp/styles/mentorship.css";
// import PlatinumCard from "../DashboardSidebarComp/platinumCard";

// const Mentorship = ({ darkMode }) => {
//   const [activeTab, setActiveTab] = useState("sessions");
//   const [activeSubTab, setActiveSubTab] = useState("platinum");
//   const [userData, setUserData] = useState(null);

//   const accessToken = localStorage.getItem("accessToken");
//   const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
//     ? process.env.REACT_APP_API_URL
//     : process.env.REACT_APP_API_URL + "/";
//   const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

//   useEffect(() => {
//     const fetchUser = async () => {
//       if (!accessToken) return;

//       try {
//         const res = await axios.get(USER_API_URL, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setUserData(res.data);
//       } catch (err) {
//         console.error("Error fetching user:", err);
//       }
//     };

//     fetchUser();
//   }, [accessToken]);

//   // ⛔ if user is NOT platinum, just show PlatinumCard
//   if (userData && userData.subscription_status !== "platinum") {
//     return (
//       <div className="container mt-5">
//         <PlatinumCard />
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-4">
//       {/* Tabs */}
//       <ul className="nav nav-tabs nav-platinum-tab">
//         <div className="premium-login">
//           <a href="/platinum-dashboard" className="theme_btn">
//             Premium Login
//           </a>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Mentorship;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../DashboardSidebarComp/styles/mentorship.css";
import PlatinumCard from "../DashboardSidebarComp/platinumCard";

const Mentorship = ({ darkMode }) => {
  const [userData, setUserData] = useState(null);
  const accessToken = localStorage.getItem("accessToken");
  const API_BASE_URL = process.env.REACT_APP_API_URL?.endsWith("/")
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL + "/";
  const USER_API_URL = `${API_BASE_URL}api/user/profile/`;

  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) return;

      try {
        const res = await axios.get(USER_API_URL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [accessToken]);

  // ✅ If user is platinum, redirect automatically
  useEffect(() => {
    if (userData?.subscription_status === "platinum") {
      window.location.href = "/platinum-dashboard";
    }
  }, [userData]);

  // ⛔ If user is NOT platinum, show PlatinumCard
  if (userData && userData.subscription_status !== "platinum") {
    return (
      <div className="container mt-5">
        <PlatinumCard />
      </div>
    );
  }

  //  While loading user data, show nothing or a loader
  if (!userData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return null;
};

export default Mentorship;