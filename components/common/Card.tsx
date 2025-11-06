import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, image, description }) => {
    return (
        <div className="border rounded-lg shadow p-4">
            {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded" />}
            <h3 className="text-xl font-bold mt-2">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
        </div>
    );
};

export default Card;
