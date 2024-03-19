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
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import LivingOutlinedIcon from '@mui/icons-material/LivingOutlined';
import ToggleOffTwoToneIcon from '@mui/icons-material/ToggleOffTwoTone';
import VolunteerActivismTwoToneIcon from '@mui/icons-material/VolunteerActivismTwoTone';

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

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    accordion: {
        '&.Mui-expanded': {
            margin: 0,
        },
    },
    accordionSummary: {
        marginBottom: -1, // Adjust this value to control the expansion direction
    },
}));


function MyPage({ duas, categories, subCategories }) {


    const [audio, setAudio] = useState(null);
    const [expandedCategoryId, setExpandedCategoryId] = useState(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState(1); // Default category ID
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(1); // Default subcategory ID

    const handleCategoryClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setSelectedSubCategoryId(1);
        // Reset selected subcategory to default when category changes

    };

    const handleSubCategoryClick = (subCategoryId) => {
        setSelectedSubCategoryId(subCategoryId);
    };
    const handleAccordionChange = (categoryId) => {
        setExpandedCategoryId(expandedCategoryId === categoryId ? null : categoryId);
    };

    // handle audio 
    const playAudio = (audioUrl) => {
        if (audio) {
            audio.pause(); // Pause currently playing audio if any
        }
        const newAudio = new Audio(audioUrl);
        newAudio.play();
        setAudio(newAudio);
    };
    // count sub category 
    const countSubCategories = (categoryId) => {
        return subCategories.filter(subCat => subCat.cat_id === categoryId).length;
    };

    // count duas
    const countDuas = (categoryId) => {
        return duas.filter(dua => dua.cat_id === categoryId).length;
    };
    // Check if duas is an array before filtering
    const filteredDuas = Array.isArray(duas) ? duas.filter(dua => dua.cat_id === selectedCategoryId && dua.subcat_id === selectedSubCategoryId) : [];


    return (
        <>
            <div className="py-10 flex lg:px-12 gap-5 flex-col lg:flex-row px-5">
                <div className='w-full lg:w-[100px] h-20 lg:h-[70vh] rounded-md bg-slate-50 shadow-md mx-auto flex justify-center items-center gap-5 lg:flex-col relative flex-row'>
                    <div className='lg:absolute lg:top-10 lg:bottom-auto'>
                        <img src="https://duaruqyah.com/assets/dua-logo.svg" alt="logo" />
                    </div>

                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-200 shadow-lg'>
                        <OtherHousesIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-200 shadow-lg'>
                        <GridViewIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-200 shadow-lg'>
                        <LightbulbOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-200 shadow-lg'>
                        <TurnedInNotOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-200 shadow-lg'>
                        <HealthAndSafetyOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-200 shadow-lg'>
                        <ImportContactsOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-slate-200 shadow-lg'>
                        <SpaOutlinedIcon style={{ fontSize: 25, color: "gray" }} />
                    </div>
                    <div className='w-12 h-12 rounded-lg bg-green-600 lg:absolute lg:top-auto lg:bottom-5 flex justify-center items-center'>
                        <VolunteerActivismTwoToneIcon style={{ color: "white" }} />
                    </div>
                </div>

                <div className="w-full pt-12">
                    <div className='lg:flex justify-between items-center py-5 hidden'>
                        <h1 className='text-2xl font-bold'> Dua Page </h1>
                        <div className='flex justify-center items-center w-3/5 relative pb-5'>
                            <input
                                type="text"
                                placeholder='Search by Dua Name'
                                className='h-10 w-72 border-2 rounded-lg outline-none pl-5 absolute top-0 left-auto right-10 bottom-0'
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
                    <div className='flex justify-between flex-col lg:flex-row w-full'>
                        <div className='w-full lg:w-[350px] h-[70vh] bg-slate-50 shadow-md flex justify-center items-center gap-2 flex-col rounded-b-lg'>
                            <div className=' bg-green-600 w-full h-16 rounded-t-lg flex justify-center items-center'>
                                <h1 className='text-white font-bold'> Categories </h1>
                            </div>
                            <div className="overflow-y-auto h-[60vh] scrollbar-thin scrollbar-track-gray-400">
                                {categories &&
                                    categories.map((category) => (
                                        <StyledAccordion key={category.cat_id} expanded={expandedCategoryId === category.cat_id} onChange={() => handleAccordionChange(category.cat_id)} >
                                            <AccordionSummary
                                                aria-controls={`category-${category.cat_id}-content`}
                                                id={`category-${category.cat_id}-header`}
                                            >
                                                <div key={category.cat_id} onClick={() => handleCategoryClick(category.cat_id)} className='flex justify-between items-center gap-4 w-full'>
                                                    <div className='flex gap-2 items-center'>
                                                        <img src={`https://duaruqyah.com/assets/icon/${category?.cat_icon}.svg`} alt={category.cat_icon} />
                                                        <div>
                                                            <h1 className={`cursor-pointer text-lg font-bold text-gray-500${selectedCategoryId === category.cat_id ? '' : ''}`}>
                                                                {category.cat_name_en}
                                                            </h1>
                                                            <span className='text-gray-500 opacity-70 text-md'> Subcategory: {countSubCategories(category.cat_id)}</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-end items-end gap-1 border-l-2 border-gray-200 px-2'>
                                                        <h1> {countDuas(category.cat_id)} </h1>
                                                        <h1 className='text-gray-400 text-sm font-bold'> Duas </h1>

                                                    </div>
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                {subCategories &&
                                                    subCategories.filter(subCat => subCat.cat_id === selectedCategoryId)
                                                        .map((subCat) => (
                                                            <div key={subCat.subcat_id} onClick={() => handleSubCategoryClick(subCat.subcat_id)} className='border-l-2 border-dotted border-green-600 py-5 flex items-center gap-2'>
                                                                <div className='w-1.5 h-1.5 rounded-full bg-green-600 ml-[-4px]'></div>
                                                                <h1 className={`cursor-pointer text-sm font-bold text-gray-600 opacity-70${selectedSubCategoryId === subCat.subcat_id ? '' : ''}`}>
                                                                    {subCat.subcat_name_en}
                                                                </h1>
                                                            </div>
                                                        ))}
                                            </AccordionDetails>
                                        </StyledAccordion>
                                    ))}
                            </div>
                        </div>
                        <div className='w-full lg:w-3/5 h-[90vh]'>
                            <div className='flex flex-col overflow-y-scroll gap-2 h-[80vh] w-full scrollbar-thin scrollbar-track-gray-400'>
                                <div className='w-full rounded-xl bg-white flex justify-start items-center px-10 py-5'>
                                    <h1 className='text-md font-bold'> <span className='text-green-600'>section:</span> {categories.find(category => category.cat_id === selectedCategoryId)?.cat_name_en} </h1>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                    {filteredDuas.map((dua, index) => (
                                        <div key={index} className='h-auto w-full bg-white rounded-md px-5 py-5'>
                                            <div className='flex gap-2 items-center'>
                                                <img src="https://duaruqyah.com/assets/duacard.svg" alt="dua" />
                                                <h1 className='text-green-600 font-bold text-lg'> {dua?.dua_name_en} </h1>
                                            </div>
                                            <div className='py-5'>
                                                <p className='font-bold text-lg opacity-70'> {dua?.top_en} </p>
                                                <p className='font-bold text-2xl opacity-70 px-5 py-5 pl-10 leading-10 text-right'> {dua?.dua_arabic} </p>
                                                {
                                                    dua?.transliteration_en ? <p className='text-lg font-semibold italic opacity-75'> Transliteration: {dua?.transliteration_en} </p> : ""
                                                }
                                                {
                                                    dua?.translation_en ? <p className='text-lg font-semibold opacity-75'> Translation: {dua?.translation_en} </p> : ""
                                                }
                                                <p className='text-lg text-green-600 font-bold pt-5'> Reference:  </p>
                                                <p className='text-lg font-bold pt-2 opacity-70'> {dua?.refference_en} </p>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    {
                                                        dua?.audio !== null ? <button className='w-12 h-12 bg-green-600 rounded-full' onClick={() => playAudio(dua.audio)}>
                                                            <PlayArrowIcon style={{ fontSize: 30, color: 'white' }} />
                                                        </button> : ""
                                                    }
                                                </div>
                                                <div className='flex gap-5 item'>
                                                    <ContentCopyOutlinedIcon style={{ fontSize: 20, color: "black", opacity: 60 }} />
                                                    <TurnedInNotOutlinedIcon style={{ fontSize: 20, color: "black", opacity: 60 }} />
                                                    <LightbulbOutlinedIcon style={{ fontSize: 20, color: "black", opacity: 60 }} />
                                                    <ShareOutlinedIcon style={{ fontSize: 20, color: "black", opacity: 60 }} />
                                                    <ReportGmailerrorredOutlinedIcon style={{ fontSize: 20, color: "black", opacity: 60 }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/6 h-[70vh] rounded-md bg-slate-50 shadow-md px-5'>
                            <h1 className='text-2xl font-bold text-center py-5'> Settings </h1>
                            <div className='flex gap-5 flex-col'>
                                <div className='flex px-2  items-center bg-slate-100 rounded-md h-16 gap-2'>
                                    <span className='w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center'> <TranslateOutlinedIcon style={{ opacity: 60, color: "gray" }} /> </span>
                                    <h1 className='text-md font-bold opacity-60'>  Language Settings  </h1>
                                </div>
                                <div className='flex px-2  items-center bg-slate-100 rounded-md h-16 gap-2'>
                                    <span className='w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center'> <LivingOutlinedIcon style={{ opacity: 60, color: "gray" }} /> </span>
                                    <h1 className='text-md font-bold opacity-60'>  General Settings  </h1>
                                </div>
                                <div className='flex px-2  items-center bg-slate-100 rounded-md h-16 gap-2'>
                                    <span className='w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center'> <GridViewIcon style={{ opacity: 60, color: "gray" }} /> </span>
                                    <h1 className='text-md font-bold opacity-60'>  Font Settings </h1>
                                </div>
                                <div className='flex px-2  items-center bg-slate-100 rounded-md h-16 gap-2 border-l-8 border-green-600'>
                                    <span className='w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center'> <GridViewIcon style={{ opacity: 60, color: "gray" }} /> </span>
                                    <h1 className='text-md font-bold opacity-60'>  Appearance Settings  </h1>
                                </div>
                                <div className='flex justify-between items-center h-20 border-b-2 border-l-2 border-r-2 p-2 rounded-b-md'>
                                    <h1 className='text-xl font-bold text-gray-700 opacity-80'>  Night Mode  </h1>
                                    <span> <ToggleOffTwoToneIcon style={{ color: "gray" }} />  </span>
                                </div>
                            </div>
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