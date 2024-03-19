import { useState } from 'react';
import "../styles/globals.css";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import GridViewIcon from '@mui/icons-material/GridView';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));



function MyPage({ duas, categories, subCategories }) {
    const [expandedCategoryId, setExpandedCategoryId] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(1); // Default category ID
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(1); // Default subcategory ID

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setSelectedSubCategoryId(1); // Reset selected subcategory to default when category changes

    };

    const handleSubCategoryClick = (subCategoryId) => {
        setSelectedSubCategoryId(subCategoryId);
    };
    const handleAccordionChange = (categoryId) => {
        setExpandedCategoryId(expandedCategoryId === categoryId ? null : categoryId);
    };

    // Check if duas is an array before filtering
    const filteredDuas = Array.isArray(duas) ? duas.filter(dua => dua.cat_id === selectedCategoryId && dua.subcat_id === selectedSubCategoryId) : [];

    return (
        <>
            <div className="py-10 flex px-12 gap-5">
                <div className='w-1/12 h-[70vh] rounded-md bg-slate-50 shadow-md mx-auto flex justify-center items-center gap-5 flex-col'>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 shadow-lg'>
                        <OtherHousesIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 shadow-lg'>
                        <GridViewIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 shadow-lg'>
                        <LightbulbOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 shadow-lg'>
                        <TurnedInNotOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 shadow-lg'>
                        <HealthAndSafetyOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 shadow-lg'>
                        <ImportContactsOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-300 shadow-lg'>
                        <SpaOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                </div>

                <div className="w-11/12  pt-12">
                    <div className='flex justify-between items-center py-5'>
                        <h1 className='text-2xl font-bold'> Dua Page </h1>
                        <div className='flex justify-center items-center w-3/5 relative pb-5'>
                            <input
                                type="text"
                                placeholder='Search by Dua Name'
                                className='h-10 w-56 border-2 rounded-lg outline-none pl-5 absolute top-0 left-auto right-10 bottom-0'
                            />
                            <button className='h-9 w-10 bg-slate-200 rounded-md ml-[-41px] absolute top-0 left-auto right-10'> <SearchOutlinedIcon /> </button>
                        </div>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </StyledBadge>

                    </div>
                    <div className='flex justify-between '>
                        <div className='w-1/6 h-[70vh] rounded-md bg-slate-50 shadow-md flex justify-center items-center gap-2 flex-col px-2'>
                            {categories &&
                                categories.map((category) => (
                                    <Accordion key={category.cat_id} expanded={expandedCategoryId === category.cat_id} onChange={() => handleAccordionChange(category.cat_id)}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls={`category-${category.cat_id}-content`}
                                            id={`category-${category.cat_id}-header`}
                                        >
                                            <div key={category.cat_id} onClick={() => handleCategoryClick(category.cat_id)} className='h-14 w-full px-5 bg-white shadow-md rounded-md flex justify-between items-center'>
                                                <img src={`https://duaruqyah.com/assets/icon/${category?.cat_icon}.svg`} alt={category.cat_icon} />
                                                <div>
                                                    <h1 className={`cursor-pointer ${selectedCategoryId === category.cat_id ? 'font-bold' : ''}`}>
                                                        {category.cat_name_en}
                                                    </h1>
                                                    <span> Subcategory:7 </span>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {subCategories &&
                                                subCategories.filter(subCat => subCat.cat_id === selectedCategoryId)
                                                    .map((subCat) => (
                                                        <div key={subCat.subcat_id} onClick={() => handleSubCategoryClick(subCat.subcat_id)}>
                                                            <h1 className={`cursor-pointer ${selectedSubCategoryId === subCat.subcat_id ? 'font-bold' : ''}`}>
                                                                {subCat.subcat_name_bn}
                                                            </h1>
                                                        </div>
                                                    ))}
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                        </div>
                        <div className='w-3/5 h-[100vh] rounded-md bg-slate-50 shadow-md'>
                            {filteredDuas.map((dua, index) => (
                                <div key={index}>
                                    <h1> {dua.dua_name_bn} </h1>
                                </div>
                            ))}
                        </div>

                        <div className='w-1/6 h-[70vh] rounded-md bg-slate-50 shadow-md'>

                        </div>
                    </div>
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
            duas: duas.data,
            categories: categories.categories,
            subCategories: subCategories.subCategory,
        },
    };
}
