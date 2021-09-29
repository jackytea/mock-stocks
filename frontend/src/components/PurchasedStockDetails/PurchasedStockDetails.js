import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import { getStock } from '../../actions/stocks';
import { getPurchase } from '../../actions/purchased';
import { useParams } from "react-router";
import CurrentPrice from "../CurrentPrice/CurrentPrice";
import InvestmentPrice from "../InvestmentPrice/InvestmentPrice";
import PurchasedStockDetailsSkeleton from "./PurchasedStockDetailsSkeleton";

const PurchasedStockDetails = (props) => {
	const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
	const purchase = useSelector((state) => state.purchasedReducer);
	const stock = useSelector((state) => state.stocksReducer);
	const dispatch = useDispatch();
	const { id } = useParams();
	const { state } = useLocation();

	useEffect(() => {
		dispatch(getPurchase(id));
	}, [dispatch, id]);

	useEffect(() => {
		dispatch(getStock(id));
	}, [dispatch, id]);

	useEffect(() => {
		socket.connect();
		return () => {
			socket.disconnect();
		}
	}, [dispatch, socket]);

	return (
		!purchase?._id || !stock?._id ? <PurchasedStockDetailsSkeleton /> :
			<div className="bg-white dark:bg-gray-800 pt-24 lg:pt-16 md:pt-32 sm:pt-32">
				<div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
					<div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
						<div className="max-w-lg lg:mx-12 lg:order-2">
							<h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Investing {purchase.shares}  {purchase.shares > 0 ? "shares" : "share"} in <strong>{stock.exchange} : {purchase.tickerBought}</strong>.</h1>
							<p className="mt-4 text-gray-600 dark:text-gray-300">{stock.description}</p>
							<div className="flex items-start sm:items-center flex-col p-6 sm:p-0 sm:flex-row ">
								<div className="block">
									<div className="mt-6">
										<h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">Initial Investment</h1>
										<span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
											<span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
											</span>
											<span className="relative text-blue-500 dark:text-blue-400">
												${parseFloat(purchase.initialInvestment).toFixed(2)}
											</span>
										</span>
									</div>
									<div className="mt-6">
										<h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">Total Value</h1>
										<InvestmentPrice shares={purchase.shares} ticker={purchase.tickerBought} initialInvestment={purchase.initialInvestment} socket={socket} />
									</div>
								</div>
								<div className="ml-0 sm:ml-8 block">
									<div className="mt-6">
										<h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">Shares Bought</h1>
										<span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
											<span aria-hidden="true" className="absolute inset-0 bg-blue-200 dark:bg-blue-700 opacity-50 rounded-full">
											</span>
											<span className="relative text-blue-500 dark:text-blue-400">
												{purchase.shares} shares
											</span>
										</span>
									</div>
									<div className="mt-6">
										<h1 className="text-xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl mb-2">Purchase Hash</h1>
										<span className="relative inline-block px-3 py-1 font-semibold text-indigo-900 leading-tight">
											<span aria-hidden="true" className="absolute inset-0 bg-indigo-200 dark:bg-indigo-700 opacity-50 rounded-full">
											</span>
											<span className="relative text-indigo-500 dark:text-indigo-400">
												#{purchase.stock}
											</span>
										</span>
									</div>
								</div>
							</div>
							{
								state &&
								<div onClick={() => { window.history.replaceState({}, document.title); window.location.reload(); }} className="cursor-pointer mt-6 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
									<div className="flex items-center justify-center w-12 bg-blue-500">
										<svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
											<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
										</svg>
									</div>

									<div className="px-4 py-2 -mx-3">
										<div className="mx-3">
											<span className="font-semibold text-blue-500 dark:text-blue-400">Info</span>
											<p className="text-xs text-gray-600 dark:text-gray-200">Looks like you just bought / updated this investment. Your funds may not be updated away. Click here to refresh the funding amount in the top bar.</p>
										</div>
									</div>
								</div>
							}
						</div>
					</div>
					<div className="flex items-center justify-center w-full h-full lg:w-1/2 text-center">
						<div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
							<img className="object-contain object-center w-full h-56 p-12 bg-gray-100 dark:bg-gray-700" src={stock.icon} alt={stock.name} />
							<div className="px-6 py-4 flex flex-col justify-center items-center">
								<div className="flex items-center justify-center mt-4 text-gray-700 dark:text-gray-200">
									<h1 className="text-md font-medium tracking-wide text-gray-800 dark:text-white">Current Price: &nbsp; </h1>
									<CurrentPrice currentPrice={stock.currentPrice} ticker={stock.ticker} socket={socket} />
								</div>

								<div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
									<h1 className="text-md font-medium tracking-wide text-gray-800 dark:text-white">Trend: &nbsp; </h1>
									{(stock.currentPrice / stock.initialPrice).toFixed(2) > 1 ?
										<span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span aria-hidden="true" className="absolute inset-0 bg-green-200 dark:bg-green-700 opacity-50 rounded-full">
											</span>
											<span className="relative text-green-500 dark:text-green-400">
												+ %{Math.abs((1 - (stock.currentPrice / stock.initialPrice)) * 100).toFixed(2)} up all time.
											</span>
										</span>
										:
										<span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
											<span aria-hidden="true" className="absolute inset-0 bg-red-200 dark:bg-red-700 opacity-50 rounded-full">
											</span>
											<span className="relative text-red-500 dark:text-red-400">
												- %{Math.abs((1 - (stock.currentPrice / stock.initialPrice)) * 100).toFixed(2)} down all time.
											</span>
										</span>
									}
								</div>
                <div className="mt-6 mb-2 text-gray-700 dark:text-gray-200 text-center flex flex-wrap sm:block">
									<Link to={`/transaction/${stock._id}`} className="w-full px-10 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-600">
										Buy / Sell Shares
									</Link>
									<Link to={`/stock/${stock._id}`} className="mt-2 sm:mt-0 ml-0 sm:ml-2 w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-400 rounded-md dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-600">
										Stock Details
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}

export default PurchasedStockDetails;