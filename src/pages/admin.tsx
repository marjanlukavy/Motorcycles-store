import CreateProduct from "@/components/Pages/Profile/CreateProduct";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageProducts from "@/components/Pages/Profile/ManageProducts";

const AdminPage = () => {
  return (
    <div className="py-10 min-h-screen">
      <Tabs defaultValue="account" className="w-[1000px] mx-auto">
        <TabsList>
          <TabsTrigger value="create">Create Product</TabsTrigger>
          <TabsTrigger value="manage">Manage Products</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <CreateProduct />
        </TabsContent>
        <TabsContent value="manage">
          <ManageProducts />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;
