'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer/Footer";

import routes from "@/data/routes";


export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname()

    const [open, setOpen] = useState(true);
    const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

    useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
        );
    }, []);

    useEffect(() => {
        getActiveRoute(routes);
    }, [pathname]);

    const getActiveRoute = (routes: any) => {
        let activeRoute = "Main Dashboard";
        for (let i = 0; i < routes.length; i++) {
            if (window.location.href.indexOf(routes[i].path) !== -1) {
                setCurrentRoute(routes[i].name);
            }
        }
        return activeRoute;
    };

    return (
        <>
            <section className="flex h-full w-full">
                <Sidebar open={open} onClose={() => setOpen(false)} />
                {/* Navbar & Main Content */}
                <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
                    {/* Main Content */}
                    <main className='mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]' >
                        {/* Routes */}
                        <div className="h-full">
                            <Navbar
                                onOpenSidenav={() => setOpen(true)}
                                brandText={currentRoute}
                            />

                            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                                {children}
                            </div>

                            <div className="p-3">
                                <Footer />
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}