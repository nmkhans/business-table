import React from 'react';

const TableContent = ({ data }) => {
    console.log(data)
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={data.image} />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">
                            {data.title}
                        </div>
                        <div className="text-sm opacity-50">
                            {data.category}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {data.price} Taka
                <br />
                <span className="badge badge-ghost badge-sm">
                    {data.brand}
                </span>
            </td>
            <td>{data.stock}</td>
            <td>{data.star}</td>
        </tr>
    );
};

export default TableContent;