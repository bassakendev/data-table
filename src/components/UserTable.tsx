import { User } from "../core/types/user";

interface UserTableProps {
    users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => (
    <table className="min-w-full border">
        <thead className="bg-green-500">
            <tr>
                <th className="py-2 border-2 text-white text-sm text-justify pl-4 border-green-500">N°</th>
                <th className="py-2 border text-white text-sm text-justify pl-4">First Name</th>
                <th className="py-2 border text-white text-sm text-justify pl-4 hidden sm:table-cell">Last Name</th>
                <th className="py-2 border-2 text-white text-sm text-justify pl-4 hidden md:table-cell border-green-500">Email</th>
                <th className="py-2 border text-white text-sm text-justify pl-4 hidden lg:table-cell">Phone</th>
                <th className="py-2 border text-white text-sm text-justify pl-4 hidden xl:table-cell">Age</th>
                <th className="py-2 border-2 text-white text-sm text-justify pl-4 hidden xl:table-cell border-green-500">Gender</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, i) => (
                <tr key={user.id}>
                    <td className="py-2 border-2 text-justify text-sm pl-4 border-green-500">{i + 1}</td>
                    <td className="py-2 border text-justify text-sm pl-4 border-green-500">{user.firstName}</td>
                    <td className="py-2 border text-justify text-sm pl-4 hidden sm:table-cell border-green-500">{user.lastName}</td>
                    <td className="py-2 border-2 text-justify text-sm pl-4 hidden md:table-cell border-green-500">{user.email}</td>
                    <td className="py-2 border text-justify text-sm pl-4 hidden lg:table-cell border-green-500">{user.phone}</td>
                    <td className="py-2 border text-justify text-sm pl-4 hidden xl:table-cell border-green-500">{user.age}</td>
                    <td className="py-2 border-2 text-justify text-sm pl-4 hidden xl:table-cell border-green-500">{user.gender}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default UserTable;
