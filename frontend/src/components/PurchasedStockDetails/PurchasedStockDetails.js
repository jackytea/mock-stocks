import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from "socket.io-client";
import InvestmentPrice from "../InvestmentPrice/InvestmentPrice";
import { getUserInfo } from "../../actions/auth";
import { getPurchase } from '../../actions/purchased';
import { useParams } from "react-router";

const PurchasedStockDetails = () => {
	const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
	const purchase = useSelector((state) => state.purchasedReducer);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getPurchase(id));
	}, [dispatch, id]);

	useEffect(() => {
		socket.connect();
		return () => {
			socket.disconnect();
		}
	}, [dispatch, socket]);

	return (
		!purchase ? <div>No purchased stock here.</div> :
			<div className="bg-white dark:bg-gray-800 pt-36 sm:pt-12">
				<div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
					<div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
						<div className="max-w-lg lg:mx-12 lg:order-2">
							<h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">{purchase.ticker}</h1>
							<p className="mt-4 text-gray-600 dark:text-gray-300">Stuff</p>
							<div className="flex">
								<div className="block">
									<div className="mt-6">
										<InvestmentPrice shares={purchase.shares} ticker={purchase.tickerBought} initialInvestment={purchase.initialInvestment} socket={socket} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center w-full h-full lg:w-1/2 text-center">

						<div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
							<img class="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />

							<div class="py-5 text-center">
								<a href="#" class="block text-2xl font-bold text-gray-800 dark:text-white">John Doe</a>
								<span class="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}

export default PurchasedStockDetails;