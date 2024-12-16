import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Pill, UserSquare2, ClipboardList, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Pill, label: "Medicines", path: "/dashboard/medicines" },
    { icon: ClipboardList, label: "Prescriptions", path: "/dashboard/prescriptions" },
    { icon: UserSquare2, label: "Pharmacists", path: "/dashboard/pharmacists" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        onClick={() => navigate(item.path)}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <item.icon className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700">{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => navigate("/")}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-8">{children}</main>
      </div>
    </SidebarProvider>
  );
};