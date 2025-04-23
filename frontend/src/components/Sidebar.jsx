import React from "react";
// Remove the logo import temporarily
// import logo from "../assets/logo.jpg";

const Sidebar = () => {
  const menuItems = [
    { icon: "🏠", label: "Virtual Desk", submenu: ["Dashboard", "Calendar"] },
    { icon: "👥", label: "Companies and contacts" },
    { icon: "📢", label: "Marketing" },
    { icon: "💰", label: "Sales" },
    { icon: "📋", label: "Project Management" },
    { icon: "🎯", label: "Support" },
    { icon: "💼", label: "Accounting" },
    { icon: "🏢", label: "Company" },
    { icon: "🗄️", label: "Database" },
    { icon: "📊", label: "Reporting" },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r">
      <div className="flex items-center p-4 border-b">
        <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded">
          CRM
        </div>
        <span className="ml-2 text-sm font-medium">
          Customer relationship management
        </span>
      </div>

      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center">
              <span className="mr-2">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
              {item.submenu && (
                <span className="ml-auto">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
