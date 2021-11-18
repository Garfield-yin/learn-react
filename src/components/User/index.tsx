interface User {
	firstName: string;
	lastName: string;
}

function formatName(user: User) {
	return `${user.firstName} ${user.lastName}`;
}

const user: User = {
	firstName: "Garfield",
	lastName: "Yin",
};
function UserElement() {
	return <h1>Hello, {formatName(user)}!</h1>;
}

export default UserElement;
