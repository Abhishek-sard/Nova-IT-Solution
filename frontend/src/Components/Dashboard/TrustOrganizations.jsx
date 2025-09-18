import React from "react";
import AdminActions from "./AdminActions";

const TrustedOrganizations = () => {
  const orgs = [
    { id: 1, img: "/trusted/org1.png" },
    { id: 2, img: "/trusted/org2.png" },
    { id: 3, img: "/trusted/org3.png" },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {orgs.map((org) => (
          <img
            key={org.id}
            src={org.img}
            alt="Organization"
            className="w-full h-24 object-contain border rounded shadow-sm"
          />
        ))}
      </div>
      <AdminActions />
    </div>
  );
};

export default TrustedOrganizations;
