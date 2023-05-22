import React from "react";
import Loading from "../../components/public/Loading";
import { useState, useEffect } from "react";
import { getListUsers } from "../../requests/users.request";
import UserEdit from "../../components/admin/UserEdit";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Button from "../../components/Button";
import Pagination from "../../components/public/Pagination";
const ListUser = () => {
	const [state, setState] = useState({
		take: 10,
		skip: 0,
		page: 1,
		keyword: "",
	});
	const [total, setTotal] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [userEdit, setUserEdit] = useState({});
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const numOfPages = Math.ceil(total / state.take);
	const endPointImg =
		process.env.REACT_APP_END_POINT_IMAGE || "http://localhost:4001";
	const fetchData = async () => {
		try {
			setLoading(true);

			const res = await getListUsers(
				state.take,
				state.skip,
				state.keyword,
			);
			if (res.status === "success") {
				setUsers(res.users);
				setTotal(res.total);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const [debounce, setDebounce] = useState("");

	useEffect(() => {
		const temp = setTimeout(() => {
			setState((prev) => ({
				...prev,
				keyword: debounce,
			}));
		}, 1000);

		return () => clearTimeout(temp);
	}, [debounce]);

	useEffect(() => {
		fetchData();
	}, [state, showModal]);

	const handleStateChange = (e) => {
		setState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleUpdate = (e, user) => {
		e.preventDefault();
		setUserEdit(user);
		setShowModal(true);
	};

	const handleRemove = (e, id) => {
		e.preventDefault();
	};

	return (
		<div>
			<div>
				{showModal && (
					<UserEdit
						user={userEdit}
						onClickHide={() => setShowModal(false)}
					/>
				)}
			</div>
			<div
				style={{
					margin: "12px",
					border: "1px solid #ccc",
					borderRadius: "22px",
					display: "inline-block",
					padding: "4px 12px",
				}}>
				<input
					style={{
						outline: "none",
						border: "none",
						padding: "4px 8px",
						backgroundColor: "transparent",
						fontSize: "16px",
					}}
					onChange={(e) => setDebounce(e.target.value)}
					value={debounce}
					type="text"
					placeholder="Search?"
				/>
				<span style={{ fontSize: "16px" }}>
					<BsSearch />
				</span>
			</div>
			{loading ? (
				<Loading />
			) : (
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Avatar</th>
							<th>Name</th>
							<th>Email</th>

							<th>Role</th>

							<th colSpan={2}></th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr>
								<td>{user.id}</td>
								<td style={{ objectFit: "cover" }}>
									<img
										class="product-image"
										style={{
											height: "100px",
											width: "100px",
										}}
										src={
											user?.avatar
												? `${endPointImg}/${user.avatar}`
												: ""
										}
										alt="User image"
									/>
								</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>

								<td>
									<button
										onClick={(e) => handleUpdate(e, user)}
										class="edit-button">
										Edit
									</button>
								</td>
								<td>
									<button
										onClick={(e) =>
											handleRemove(e, user.id)
										}
										class="delete-button">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}

			<Pagination
				handleStateChange={handleStateChange}
				numOfPages={numOfPages}
				state={state}
				setState={setState}
			/>
		</div>
	);
};

export default ListUser;
