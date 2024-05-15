import CreateProduct from "@/components/Pages/Profile/CreateProduct";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageProducts from "@/components/Pages/Profile/ManageProducts";
import EditProducts from "@/components/Pages/Profile/EditProducts";

const AdminPage = () => {
  return (
    <div className="py-10 min-h-screen">
      <Tabs defaultValue="account" className="w-[1000px] mx-auto">
        <TabsList>
          <TabsTrigger value="create">Create Product</TabsTrigger>
          <TabsTrigger value="manage">Manage Products</TabsTrigger>
          <TabsTrigger value="edit">Edit Products</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <CreateProduct />
        </TabsContent>
        <TabsContent value="manage">
          <ManageProducts />
        </TabsContent>
        <TabsContent value="edit">
          <EditProducts />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;
