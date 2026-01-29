import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VisionMission } from "@/components/VisionMission";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Gallery } from "@/components/Gallery";
import { Certificates } from "@/components/Certificates";
import { GeminiAssistant } from "@/components/GeminiAssistant";
import { Footer } from "@/components/Footer";
import { CallToAction } from "@/components/CallToAction";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="bg-brand-dark min-h-screen text-gray-800">
            <Navbar />
            <main>
                <Hero />
                <VisionMission />
                <About />
                <Products />
                <Gallery />
                <Certificates />
                <CallToAction />
            </main>
            <Footer />
            <GeminiAssistant />
        </div>
    );
}
