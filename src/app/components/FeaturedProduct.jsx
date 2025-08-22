import dbConnect, { collectionNamesObj } from '@/library/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedProduct = async () => {
    const vegetablesCollection = dbConnect(collectionNamesObj.vegetablesCollection);
    const data = await vegetablesCollection.find({}).limit(8).toArray();

    return (
        <div className="my-24">
            <div className='w-11/12 mx-auto'>
                {/* Title */}
                <div className="text-center mb-10">
                    <p className="text-orange-400 font-medium uppercase tracking-wide">
                        BEST ONLINE STORE
                    </p>
                    <h1 className="text-4xl font-bold text-green-600">
                        Featured Vegetables
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Discover our most popular and fresh vegetables of the season
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-12 gap-6 container mx-auto">
                    {data.map((vg, index) => (
                        <div
                            key={index}
                            className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-2xl shadow-md hover:shadow-lg border border-green-600 hover:border-orange-400 transition-all duration-500 delay-200 hover:scale-105"
                        >
                            {/* Image */}
                            <div className="w-full h-56 overflow-hidden rounded-t-2xl relative">
                                <Image
                                    src={vg.image}
                                    alt={vg.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-400"
                                    priority
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 space-y-3">
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-xl font-semibold text-green-700">
                                        {vg.name}
                                    </h3>

                                    <p className="text-lg font-semibold text-orange-400">
                                        {vg.price}
                                    </p>
                                </div>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {vg.description}
                                </p>

                                {/* Details Link */}
                                <Link
                                    href={`/vegetables/${vg._id}`}
                                    className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-gradient-to-br from-green-700 to-green-600 rounded-lg hover:bg-green-700 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;