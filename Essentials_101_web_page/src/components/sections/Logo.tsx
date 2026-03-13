import Link from "next/link";

export default function Logo() {
    return (
        <div className="col-span-1 md:col-span-3 flex items-start justify-start mb-10 md:mb-0 ">
            {/* Logo Column */}
            <Link href="/" className="block relative top-[-4px]">
                <span className="text-[24px] font-normal tracking-tight hover:font-bold hover:text-white">Essentials 101.</span>
            </Link>
        </div>
    );
}