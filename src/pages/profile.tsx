import CreateProduct from "@/components/Pages/Profile/CreateProduct";
import useUser from "@/store/user.store";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !user) {
    return null;
  }

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col gap-3">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="relative w-24 h-24 rounded-full">
            <Image
              src={user.profilePicture || "https://via.placeholder.com/150"}
              alt={user.name || ""}
              fill
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Profile Information
          </h3>
          <div className="mt-4">
            <p className="text-gray-600">
              <strong>UID:</strong> {user.uid}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
