import "./notification.css";
export function Notification({ user , readNoti }) {
	return (
		<li className="noti__item" onClick={() => readNoti(user.id)}>
			<div className="noti__user-panel">
				<img src={user.url} alt="person image" className="noti__icon" />
			</div>
			<div className="noti__message-panel">
				<h1 className="noti__title">
					<span className="noti__user-name">{user.name}</span>{" "}
					<span>{user.content}</span>
					{user.relevant && <span className="noti__user-relevant">{user.relevant}</span>}
					{!user.read && <span className="noti__new" id="noti-unread"></span>}
				</h1>
				<h2 className="noti__time">{user.time}</h2>
				{user.message && <div className="noti__message">{user.message}</div>}
			</div>
		</li>
	);
}
