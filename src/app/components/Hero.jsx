import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section className="relative w-full">
            <figure className="relative w-full h-[300px] md:h-[450px] lg:h-[620px]">
                <Image
                    src={"/assets/vegetable_banner.webp"}
                    alt="Fresh vegetable banner"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-4 md:px-16 lg:px-32 text-center md:text-left space-y-8">
                    <span className="text-orange-400 text-sm md:text-base lg:text-2xl font-light">
                        Fresh Vegetables
                    </span>
                    <h1 className="flex flex-col gap-2 md:gap-4">
                        <span className="text-2xl md:text-4xl lg:text-6xl font-bold">Organic Food</span>
                        <span className="text-2xl md:text-4xl lg:text-6xl font-medium md:font-light">
                            &amp; Healthy Tasty
                        </span>
                    </h1>
                    <button className="btn btn-outline btn-sm md:btn-md lg:btn-lg">
                        SHOP NOW
                    </button>
                </div>
            </figure>
        </section>
    );
};

export default Hero;