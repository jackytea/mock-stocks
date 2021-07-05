import React, { useEffect } from "react";
import socketIOClient from "socket.io-client";
import InvestmentPrice from "../InvestmentPrice/InvestmentPrice";
import { getPurchase } from '../../actions/purchased';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";

const PurchasedStock = () => {
	const socket = socketIOClient(process.env.REACT_APP_STOCKS_API, { transports: ['websocket', 'polling', 'flashsocket'] });
	const purchase = useSelector((state) => state.purchasedReducer);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		socket.connect();
		dispatch(getPurchase(id));
		return () => {
      socket.disconnect();
    }
	}, [dispatch, id, socket]);


	return (
		!purchase ? <div>No purchased stock here.</div> :
			<div>Purchased something {purchase.tickerBought}
				<InvestmentPrice shares={purchase.shares} ticker={purchase.tickerBought} socket={socket} />
			</div>
	);
}

export default PurchasedStock;