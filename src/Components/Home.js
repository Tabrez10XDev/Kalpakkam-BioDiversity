import React from "react";
import { Hero } from "./Canvas";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Button } from "@mui/material";
import Card from './Card';
import { useMediaQuery } from 'react-responsive'
import Responsivecard from "./Responsivecard";
import { DeviceSize } from "../Responsive/index";
import arrow from "./assets/arrow.svg";
import Downarrow from "./assets/down-arrow.svg";
import { useState } from "react";
import '../App.css'
import { TREES } from "../data";

// import ScrollButton from 'react-scroll-button';





const Home = () => {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const isDesktop = useMediaQuery({ maxWidth: DeviceSize.desktop });

    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const [stackIndex, setStackIndex] = useState(0)
    const [treeList, setTreeList] = useState(TREES)
    const [staticList, setStaticList] = useState(TREES)
    const [paginationTreeList, setPaginationTreeList] = useState(TREES) 
    const [page, setPage] = useState(1)
    const [countState, setCountState] = useState({})

    const [scrollTop, setScrollTop] = React.useState(false);
    React.useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 760,
            behavior: "smooth",
        });
    };

  

    return (

        <section id="Home" >
            <Hero />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {scrollTop && (
                    <div onClick={bottomToTop} className="backToTop" style={{ zIndex: 20, position: 'relative', top: -140, height: 45, width: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                        <p style={{ color: "#ffff" }}>Click to Scroll</p>

                        <img src={Downarrow} style={{ alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }} />



                    </div>  
                )}

            </div>





            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 0, flexWrap: 'wrap' }}>
                <Button onClick={() => {
                    setStackIndex(0)
                    setPage(1)
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "tree"))
                    setTreeList(staticList.filter((tree) => tree.type === "tree"))
                }} variant={stackIndex === 0 ? "contained" : "outlined"} style={stackIndex === 0 ? styles.selected : styles.unSelected}>Trees</Button>
                <Button onClick={() => {
                    setStackIndex(1)
                    setPage(1)
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Palm"))
                    setTreeList(staticList.filter((tree) => tree.type === "Palm"))
                }} variant={stackIndex === 1 ? "contained" : "outlined"} style={stackIndex === 1 ? styles.selected : styles.unSelected}>Palms</Button>
            </div>



            <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', marginTop: 32, }}>
                <Pagination
                    count={alphabet.length}
                    variant="outlined"
                    onChange={(event, value) => {
                        setPage(1)
                        setTreeList(paginationTreeList.filter((tree) =>  tree.name.startsWith(alphabet[value - 1]) ) )
                    }}
                    renderItem={(item) => (
                        <PaginationItem  {...item} page={alphabet[item.page - 1]} />
                    )}
                />
            </div>

            <div className="card-container" id="treecard" style={{ display: 'flex', flexDirection: 'row', marginTop: 32, justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap' }}>

                {
                    treeList.slice(0,page*20).map((ele, index) => {
                        return (
                            isMobile ?
                                <Responsivecard data={ele} />
                                :
                                <Card data={ele} />
                        )
                    })
                }

                {/* {isMobile && <Responsivecard />}
                {isMobile && <Responsivecard />}
                {isMobile && <Responsivecard />}
                {isMobile && <Responsivecard />}



                {!isDesktop && <Card />}
                {!isDesktop && <Card />}
                {!isDesktop && <Card />}
                {!isDesktop && <Card />} */}



            </div>


            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: 32 }} >
                <Button  onClick={()=>{setPage(page+1)}} variant="contained" style={{ backgroundColor: '#252525', borderRadius: 20 }} >
                    View more
                    <img src={arrow} style={{ height: 24, width: 24 }} />

                </Button>
            </div>











        </section>
    )





}




const styles = {
    selected: {
        borderRadius: 0,
        backgroundColor: '#252525',
        marginTop: 20,
        width:'45vw',
    },
    unSelected: {
        borderRadius: 0,
        borderColor: '#767676',
        color: '#767676',
        marginTop: 20,
        width:'45vw',
    }
};




export default Home;