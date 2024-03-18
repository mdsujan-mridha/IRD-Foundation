import { useState } from 'react';
import "../styles/globals.css";

function MyPage({ duas, categories, subCategories }) {
    const [selectedCategoryId, setSelectedCategoryId] = useState(1); // Default category ID
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(1); // Default subcategory ID

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setSelectedSubCategoryId(1); // Reset selected subcategory to default when category changes
    };

    const handleSubCategoryClick = (subCategoryId) => {
        setSelectedSubCategoryId(subCategoryId);
    };

    // Check if duas is an array before filtering
    const filteredDuas = Array.isArray(duas) ? duas.filter(dua => dua.cat_id === selectedCategoryId && dua.subcat_id === selectedSubCategoryId) : [];

    return (
        <>
            <div className="flex justify-between px-12">
                <div>
                    <h1> Category </h1>
                    {categories &&
                        categories.map((category) => (
                            <div key={category.cat_id} onClick={() => handleCategoryClick(category.cat_id)}>
                                <h1 className={`cursor-pointer ${selectedCategoryId === category.cat_id ? 'font-bold' : ''}`}>
                                    {category.cat_name_bn}
                                </h1>
                            </div>
                        ))}
                </div>
                <div>
                    <h1> Sub category </h1>
                    {subCategories &&
                        subCategories.filter(subCat => subCat.cat_id === selectedCategoryId)
                            .map((subCat) => (
                                <div key={subCat.subcat_id} onClick={() => handleSubCategoryClick(subCat.subcat_id)}>
                                    <h1 className={`cursor-pointer ${selectedSubCategoryId === subCat.subcat_id ? 'font-bold' : ''}`}>
                                        {subCat.subcat_name_bn}
                                    </h1>
                                </div>
                            ))}
                </div>
                <div>
                    <h1> All Dua </h1>
                    {filteredDuas.map((dua, index) => (
                        <div key={index}>
                            <h1> {dua.dua_name_bn} </h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MyPage;

export async function getStaticProps() {
    // Fetch data from APIs
    const res = await fetch('http://localhost:5000/api/v1/duas');
    const categoryResponse = await fetch('http://localhost:5000/api/v1/categories');
    const subCategoryResponse = await fetch('http://localhost:5000/api/v1/subcategories');

    const duas = await res.json();
    const categories = await categoryResponse.json();
    const subCategories = await subCategoryResponse.json();

    return {
        props: {
            duas:duas.data,
            categories: categories.categories,
            subCategories: subCategories.subCategory,
        },
    };
}
