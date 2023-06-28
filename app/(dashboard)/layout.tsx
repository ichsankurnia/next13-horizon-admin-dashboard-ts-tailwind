import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer/Footer";
import SidebarProvider from "@/providers/SidebarProvider";


export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <SidebarProvider>
                <section className="flex h-full w-full">
                    <Sidebar />

                    {/* Navbar & Main Content */}
                    <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">

                        {/* Main Content */}
                        <main className='mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]' >
                            {/* Routes */}
                            <div className="h-full">
                                <Navbar />

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
            </SidebarProvider>
        </>
    );
}