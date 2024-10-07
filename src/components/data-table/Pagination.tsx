interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const maxVisiblePages = 5; // Max number of pages visible before shortening

    const getPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages - 1, currentPage + Math.floor(maxVisiblePages / 2));

        // first page
        pages.push(1);

        // Ellipsis before
        if (startPage > 2) {
            pages.push("...");
        }

        // middle page
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // ellipsis after
        if (endPage < totalPages - 1) {
            pages.push("...");
        }

        // last page
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="flex justify-center mt-4">
            {getPageNumbers().map((page, index) =>
                typeof page === 'number' ? (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        className={`mx-1 px-3 py-1 rounded-md ${page === currentPage ? 'bg-green-500 text-white' : 'bg-gray-300'
                            }`}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={index} className="mx-2">...</span>
                )
            )}
        </div>
    );
};

export default Pagination;
