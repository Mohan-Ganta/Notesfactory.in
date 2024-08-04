import React, { useEffect, useState } from 'react';
import axios from 'axios';
// {
        //     _id: '1',
        //     Products: ['P001', 'P002'],
        //     UserId: 'U001',
        //     Amount: 250,
        //     PaymentUTR: 'UTR12345',
        //     PaymentProof: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
        //     isApproved: false
        // },
        // {
        //     _id: '3',
        //     Products: ['P001', 'P002'],
        //     UserId: 'U001',
        //     Amount: 456,
        //     PaymentUTR: 'UTR12345',
        //     PaymentProof: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
        //     isApproved: false
        // },
        // {
        //     _id: '2',
        //     Products: ['P003', 'P004'],
        //     UserId: 'U002',
        //     Amount: 450,
        //     PaymentUTR: 'UTR67890',
        //     PaymentProof: 'https://www.andolasoft.com/images/new/famous-app/redbus-app.webp',
        //     isApproved: true
        // }
const ProductList = () => {
    const [productLists, setProductLists] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState('');

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/admin/getorders');
            setProductLists(response.data);
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const handleAccept = async (userId) => {
        try {
            await axios.get(`http://localhost:5000/purchases/approvepurchase/${userId}`);
            console.log('Purchase approved for user:', userId);
            fetchProductData(); 
        } catch (error) {
            console.error('Error approving purchase:', error);
        }
    };

    const handleReject = (id) => {
        console.log('Rejected:', id);
        // Implement reject logic if necessary
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
                            <td>{productList.Products.join(', ')}</td>
                            <td>{productList.UserId}</td>
                            <td>{productList.Amount}</td>
                            <td>{productList.PaymentUTR}</td>
                            <td>
                                <a href="#!" onClick={() => handleImageClick(productList.PaymentProof)}>View Proof</a>
                            </td>
                            <td>
                                <button className="accept-button" onClick={() => handleAccept(productList.UserId)}>Accept</button>
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
