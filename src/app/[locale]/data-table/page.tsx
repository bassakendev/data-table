"use client";

// pages/index.tsx
import Filter from '@/src/components/data-table/Filter';
import Pagination from '@/src/components/data-table/Pagination';
import UserTable from '@/src/components/data-table/UserTable';
import { UserService } from '@/src/core/services/user_service/service';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { User } from '../../../core/types/user';

export default function DataTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState(true);
    const [itemsPerPage, setItemsPerPage] = useState<number>(5);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const userservice: UserService = new UserService();

    // Load users
    const loadUsers = async () => {
        const fetchedUsers = await userservice.getAll();
        setLoading(false);
        setUsers(fetchedUsers);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    // Filter users
    const filteredUsers = users.filter((user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        || user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        || user.age.toString().toLowerCase().includes(searchTerm.toLowerCase())
        || user.phone.toLowerCase().includes(searchTerm.toLowerCase())
        || user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const displayedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => setCurrentPage(page);

    return (
        <div className="min-h-screen text-white">
            {loading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}

            {!loading && (<main className='p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16'>
                <h1 className="text-3xl font-bold mb-6">Users List</h1>
                <div className='flex flex-row justify-between'>
                    <div className="flex mb-4 items-center ">
                        <label>
                            Users per page :
                            <select
                                value={itemsPerPage}
                                onChange={(e) => {
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                }}
                                className="ml-2 p-2 border text-black rounded-lg outline-none border-green-600"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                        </label>
                        <FaUser className='text-lg text-green-600 ml-2'></FaUser>
                    </div>
                    <Filter
                        searchTerm={searchTerm}
                        onSearchTermChange={(term) => {
                            setSearchTerm(term);
                            setCurrentPage(1);
                        }}
                    />
                </div>

                {/* Tableau des utilisateurs */}
                <UserTable users={displayedUsers} />

                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                /></main>)
            }
        </div>
    );
}
