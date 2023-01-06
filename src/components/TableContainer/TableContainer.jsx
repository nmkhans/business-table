import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useGetProductsQuery } from '../../redux/api/api';
import TableContent from '../TableContent/TableContent';
import ReactPaginate from 'react-paginate';

const TableContainer = () => {
    const [page, setPage] = useState(1);
    const [active, setActive] = useState(1);
    const [buttonStart, setButtonStart] = useState(0);
    const [buttonEnd, setButtonEnd] = useState(10);
    const [query, setQuery] = useState({
        pageno: page,
        perpage: 5,
        search: ""
    })
    const { register, handleSubmit } = useForm();
    const { data, isLoading } = useGetProductsQuery({
        pageno: query.pageno,
        perpage: query.perpage,
        search: query.search
    })

    if (isLoading) return "Loading..."

    const calculateBtn = () => {
        const totalData = data?.data[0]?.total[0]?.count;
        const perpage = query.perpage;
        const totalButtonAmount = Math.ceil(totalData / perpage);
        const buttonNo = [];
        for (let i = 0; i <= totalButtonAmount; i++) {
            buttonNo.push(i + 1)
        }
        return buttonNo;
    }

    const onSubmit = (data) => {
        const newQuery = {
            pageno: page,
            perpage: data.perpage,
            search: data.search
        }
        setQuery(newQuery)
    }

    const handleNextButton = () => {
        setButtonEnd(prev => prev + 10)
        setButtonStart(prev => prev + 10)
    }

    const handlePrevButton = () => {
        if (buttonStart !== 0) {
            setButtonEnd(prev => prev - 10)
            setButtonStart(prev => prev - 10)
        }
    }

    const handlePagination = (element) => {
        setPage(element);
        setActive(element)
        setQuery({
            ...query,
            pageno: element
        })
    }

    return (
        <div className="w-[90%] h-[90%] p-5 shadow-lg rounded-lg border border-slate-200">
            <div className="table__heading">
                <div className="heading__top flex justify-between">
                    <div className="heading__top__title basis-2/4">
                        <h2 className="text-2xl text-accent font-semibold">Product Table <span className="text-primary text-[40px]">.</span></h2>
                    </div>
                    <div className="basis-3/4">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between">
                            <div className="heading__top__select basis-1/3 mr-5">
                                <select
                                    className="select select-bordered w-full text-gray-400 font-normal"
                                    {...register("perpage")}
                                >
                                    <option value={5}>5 per page</option>
                                    <option value={10}>10 per page</option>
                                    <option value={20}>20 per page</option>
                                </select>
                            </div>
                            <div className="heading__top__search basis-3/4">
                                <div className="flex">
                                    <input type="text" placeholder="Search here..." className="input input-bordered w-full mr-2"
                                        {...register("search")}
                                    />
                                    <button type="submit" className="btn btn-primary hover:btn-secondary text-white">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="heading__bottom mt-5">
                    <h3 className="text-md text-accent">Showing {data?.data[0]?.rows?.length} of {data?.data[0]?.total[0]?.count} products</h3>
                </div>
            </div>
            <div className="table__content mt-5">
                <div className="overflow-y-scroll h-[320px] w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.data[0]?.rows?.map(data => <TableContent key={data._id} data={data} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="table__pagination mt-5">
                <button className="btn mr-2" onClick={handlePrevButton}>prev</button>
                {calculateBtn().slice(buttonStart, buttonEnd).map((element) => <button onClick={() => handlePagination(element)} className={`btn mx-1 ${active === element && "active"}`}>{element}</button>)}
                <button className="btn ml-2" onClick={handleNextButton}>next</button>
            </div>
        </div>
    );
};

export default TableContainer;