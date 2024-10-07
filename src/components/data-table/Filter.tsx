import { FaSearch } from "react-icons/fa";

interface FilterProps {
    searchTerm: string;
    onSearchTermChange: (term: string) => void;
}

const Filter: React.FC<FilterProps> = ({ searchTerm, onSearchTermChange }) => (
    <div className="flex mb-4 w-auto items-center border border-green-500 p-1 rounded-xl">
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
            placeholder="Search..."
            className="border-none p-2 rounded-lg w-full outline-none"
        />
        <FaSearch className="text-green-500 text-xl ml-2" />
    </div>
);

export default Filter;
