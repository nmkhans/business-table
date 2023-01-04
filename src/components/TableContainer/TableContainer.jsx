import React from 'react';

const TableContainer = () => {
    return (
        <div className="w-[90%] h-[80%] p-5 shadow-lg rounded-lg border border-slate-200">
            <div className="table__heading">
                <div className="heading__top flex justify-between">
                    <div className="heading__top__title basis-2/4">
                        <h2 className="text-2xl text-accent font-semibold">Product Table <span className="text-primary text-[40px]">.</span></h2>
                    </div>
                    <div className="basis-3/4">
                        <form className="flex justify-between">
                            <div className="heading__top__select basis-1/3 mr-5">
                                <select className="select select-bordered w-full text-gray-400 font-normal">
                                    <option>5 per page</option>
                                    <option>10 per page</option>
                                    <option>20per page</option>
                                </select>
                            </div>
                            <div className="heading__top__search basis-3/4">
                                <div className="flex">
                                    <input type="text" placeholder="Search here..." className="input input-bordered w-full mr-2" />
                                    <button type="submit" className="btn btn-primary hover:btn-secondary text-white">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="heading__bottom mt-5">
                    <h3 className="text-md text-accent">Showing 10 of 2500 products</h3>
                </div>
            </div>
        </div>
    );
};

export default TableContainer;