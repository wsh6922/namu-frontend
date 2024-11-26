import { useState, useEffect } from "react";
import axios from 'axios';

const CategoryDropdown = ({ setBoardId }) => {

    const [categories, setCategories] = useState([]);
    const [selectedBoardId, setSelectedBoardId] = useState('');


    useEffect(() => {
        const axiosGetCategory = async () => {
            const response = await axios.get('/api/category/test');
            console.log(response.data.data);
            setCategories(response.data.data);
        }
        axiosGetCategory();
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedBoardId(value);
        setBoardId(value);
    };

    return (
        <div>
            <select
                id="category-select"
                className="btn_category"
                value={selectedBoardId}
                onChange={handleChange}
                required
            >
                <option value="">카테고리 선택</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.boardName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryDropdown;