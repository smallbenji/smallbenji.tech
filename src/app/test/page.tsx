import React from "react";
import RoleCanView from "../../components/roleCanView";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Test = async () => {
	const session = await getServerSession(authOptions);

	return (
		<>
			<h1>Test</h1>

			<RoleCanView role={["admin", "TestRole"]}>
				<h1>Yeps</h1>
			</RoleCanView>
		</>
	);
};

export default Test;
