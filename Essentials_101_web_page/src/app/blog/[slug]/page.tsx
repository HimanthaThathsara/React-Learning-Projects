import Image from "next/image";
import { notFound } from "next/navigation";
import { blog } from "@/data/blog";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/Footer";

export async function generateStaticParams() {
    return blog.map((item: blog) => ({
        slug: item.slug,
    }));
}

export default function PortfolioPage({ params }: { params: { slug: string } }) {
    const item = blog.find((item: blog) => item.slug === params.slug);

    if (!item) {
        notFound();
    }

    return (
        <main className="bg-black text-white min-h-screen">
            <Header />
            <div className="container mx-auto px-5 md:px-10 max-w-[1400px] py-12 md:py-20">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-[48px] md:text-[72px] font-normal leading-[1.1] text-white mb-4">
                        {item.title}
                    </h1>
                    <div className="flex flex-wrap gap-6 text-[16px] text-[#808080]">
                        <p>
                            <span className="text-white">Studio:</span> {item.studio}
                        </p>
                        <p>
                            <span className="text-white">Category:</span> {item.category}
                        </p>
                        <p>
                            <span className="text-white">Year:</span> {item.year}
                        </p>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative w-full aspect-[16/9] mb-12 overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Description */}
                <div className="mb-12">
                    <p className="text-[20px] md:text-[24px] leading-[1.6] text-white">
                        {item.description}
                    </p>
                </div>

                {/* Content */}
                <div className="prose-content mb-16">
                    <div
                        className="text-[16px] md:text-[18px] leading-[1.8] text-[#CCCCCC] space-y-6"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                </div>

                {/* Additional Images Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src={item.image}
                            alt={`${item.title} detail 1`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src={item.image}
                            alt={`${item.title} detail 2`}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
