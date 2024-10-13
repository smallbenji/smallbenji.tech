import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

const RoleCanView = async ({
	children,
	role,
}: {
	children: React.ReactNode;
	role: string[];
}) => {
	const session = await getServerSession(authOptions);

	console.log(session);

	return (
		<>
			{session &&
			session?.user.roles?.some((roles) => role.includes(roles))
				? children
				: null}
		</>
	);
};

export default RoleCanView;
