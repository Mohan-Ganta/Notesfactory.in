// ProductList.js
import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [productLists, setProductLists] = useState([
        {
            _id: '1',
            ProductIds: ['P001', 'P002'],
            UserId: 'U001',
            Amount: 250,
            PaymentUTR: 'UTR12345',
            PaymentProof: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
            isApproved: false
        },
        {
            _id: '3',
            ProductIds: ['P001', 'P002'],
            UserId: 'U001',
            Amount: 456,
            PaymentUTR: 'UTR12345',
            PaymentProof: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
            isApproved: false
        },
        {
            _id: '2',
            ProductIds: ['P003', 'P004'],
            UserId: 'U002',
            Amount: 450,
            PaymentUTR: 'UTR67890',
            PaymentProof: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
            isApproved: true
        }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState('');

    const handleAccept = (id) => {
        console.log('Accepted:', id);
    };

    const handleReject = (id) => {
        console.log('Rejected:', id);
    };

    const handleImageClick = (url) => {
        setModalImageUrl(url);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalImageUrl('');
    };

    const unacceptedProductLists = productLists.filter(productList => !productList.isApproved);

    return (
        <div className="product-list-container">
            <h2>Product Lists</h2>
            <table className="product-list-table">
                <thead>
                    <tr>
                        <th>Product IDs</th>
                        <th>User ID</th>
                        <th>Amount</th>
                        <th>Payment UTR</th>
                        <th>Payment Proof</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {unacceptedProductLists.map((productList) => (
                        <tr key={productList._id}>
                            <td>{productList.ProductIds.join(', ')}</td>
                            <td>{productList.UserId}</td>
                            <td>{productList.Amount}</td>
                            <td>{productList.PaymentUTR}</td>
                            <td>
                                <a href="#!" onClick={() => handleImageClick(productList.PaymentProof)}>View Proof</a>
                            </td>
                            <td>
                                <button className="accept-button" onClick={() => handleAccept(productList._id)}>Accept</button>
                                <button className="reject-button" onClick={() => handleReject(productList._id)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <img src={modalImageUrl} alt="Payment Proof" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
