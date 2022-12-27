
import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
    const handlePageClick = ()=>{
        console.log('click')   
    }
    return (
        <div>
            <ReactPaginate 
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={15}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            />
        </div>
    );
};

export default Pagination;