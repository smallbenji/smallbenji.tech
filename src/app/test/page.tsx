import React from "react";
import AuthComponent from "../../components/authComponent";
import RoleCanView from "../../components/roleCanView";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Test = async () => {
	const session = await getServerSession(authOptions);

	return (
		<>
			<h1>Test</h1>

			<AuthComponent />

			<RoleCanView role={["admin", "TestRole"]}>
				<h1>Yeps</h1>
			</RoleCanView>
		</>
	);
};

export default Test;
