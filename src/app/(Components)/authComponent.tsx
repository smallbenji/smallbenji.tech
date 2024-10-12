"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthComponent = () => {
	const { data: session } = useSession();

	return (
		<div>
			{session ? (
				<>
					{session.user?.email}
					<button onClick={() => signOut()}>Log out</button>
				</>
			) : (
				<>
					<button onClick={() => signIn("keycloak")}>Log in</button>
				</>
			)}
		</div>
	);
};

export default AuthComponent;
