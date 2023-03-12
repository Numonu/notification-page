import { Notification } from "../Notifications/Notification.jsx";
import { data } from "./data.js";
import "./board.css";
import { useState } from "react";

export function Board() {
	const [notis , setNotis] = useState([...data]);

	function readNoti(id){
		setNotis(notis.map(e => {
			if(e.id == id) return {
				...e,
				read: true
			}
			return e;
		}))
	}
	function readAll(){
		setNotis(notis.map(e => {
			return {
				...e,
				read:true
			}
		}));
	}

	return (
		<div className="content">
			<div className="board">
				<div className="board__header">
					<div className="board__title">
						Notifications<span className="board__count">3</span>
					</div>
					<div className="board__option" onClick={readAll}>Mark all has read</div>
				</div>
				<ul className="noti">
					{notis.map((e,index) => {
						return <Notification user={e} key={index} readNoti={readNoti}/>;
					})}
				</ul>
			</div>
		</div>
	);
}
