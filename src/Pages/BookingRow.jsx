

const BookingRow = ({book, handleDeleteFormData, handleConfirm}) => {
    const {_id, image, price, date, service, status } = book
    console.log(book)
    return (
        <div>
            <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{service}</div>                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td>{price}</td>
                                    <td>{date}</td>
                                    <td>
                                    <button className="btn btn-secondary">{status}</button>
                                    </td>
                                    <td><button className="btn btn-warning" onClick={()=> handleDeleteFormData(_id)}>Delete</button></td>
                                    <td><button className="btn btn-ghost" onClick={() => handleConfirm(_id)}>Update</button></td>
                                </tr>
        </div>
    );
};

export default BookingRow;