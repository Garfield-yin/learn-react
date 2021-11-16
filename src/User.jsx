function formatName(user) {
	return `${user.firstName} ${user.lastName}`;
}

const user = {
	firstName: "Garfield",
	lastName: "Yin",
};
const element = <h1>Hello {formatName(user)}!</h1>;

function User() {
	return element;
}
export default User;
