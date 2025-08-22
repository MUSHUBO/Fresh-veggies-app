import dbConnect, { collectionNamesObj } from '@/library/dbConnect';
import { Heart, ShoppingCart, X } from 'lucide-react';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

export default async function VegetableDetails({ params }) {
    const { id } = params;

    let vegetable = null;
    try {
        const vegetablesCollection = await dbConnect(collectionNamesObj.vegetablesCollection);
        vegetable = await vegetablesCollection.findOne({ _id: new ObjectId(id) });
    } catch (err) {

    }

    if (!vegetable) {
        return (
            <div className="container mx-auto py-12 text-center">
                <h2 className="inline-flex items-center gap-2 text-2xl font-bold text-red-500">
                    <X className="w-6 h-6" /> Product not found
                </h2>
            </div>
        );
    }

    const { name, image, description, price, nutrition, origin, availability } = vegetable;

    return (
        <div className="container w-11/12 mx-auto min-h-screen py-12">
            {/* Product wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
                {/* Product Image */}
                <div className="flex justify-center">
                    <Image
                        src={image}
                        alt={name}
                        width={700}
                        height={600}
                        className="rounded-2xl shadow-lg object-cover"
                        priority
                    />
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-4xl font-bold text-green-600 mb-4">{name}</h1>

                    <p className="text-gray-600 text-lg mb-4">
                        {description}
                    </p>

                    <div className="text-2xl font-semibold text-orange-500 mb-6">
                        Price: {price || 'N/A'}
                    </div>

                    {/* Extra Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-700">
                        <p><span className="font-semibold">Nutrition:</span> {nutrition || 'Source of Fiber & Antioxidants'}</p>
                        <p><span className="font-semibold">Origin:</span> {origin || 'Rajshahi, Bangladesh'}</p>
                        <p><span className="font-semibold">Availability:</span> {availability || 'Winter season'} </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition">
                            <ShoppingCart className="w-5 h-5" /> Add to Cart
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-300 transition">
                            <Heart className="w-5 h-5 text-green-500 fill-current" /> Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Description Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Product</h2>
                <p className="text-gray-600 leading-relaxed">
                    {description ||
                        "This vegetable is freshly harvested and carefully selected to ensure the highest quality. Perfect for everyday cooking, salads, and healthy meals."}
                </p>
            </div>
        </div>
    );
}