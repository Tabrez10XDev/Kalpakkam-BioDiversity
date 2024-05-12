import React from "react";
// import { Butterfly } from "../Components/Canvas/Butterfly";
import { Butterflybg } from "./Canvas";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Button } from "@mui/material";
import tree from "./assets/treebg.jpg";
import Woodie from '../Components/assets/woodie.png'
import Card from './Card';
import Responsive from './Responsivecard';
import { useMediaQuery } from 'react-responsive'
import Responsivecard from "./Responsivecard";
import { DeviceSize } from "../Responsive/index";
import arrow from "./assets/arrow.svg";
import Downarrow from "./assets/down-arrow.svg";
import { useState } from "react";
import '../App.css'
import { db } from "../FirebaseConfig";
import { useEffect } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

// import ScrollButton from 'react-scroll-button';





const Home = () => {

    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const isDesktop = useMediaQuery({ maxWidth: DeviceSize.desktop });

    const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const [stackIndex, setStackIndex] = useState(0)
    const [treeList, setTreeList] = useState([])
    const [staticList, setStaticList] = useState([])
    const [paginationTreeList, setPaginationTreeList] = useState([]) 
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

    async function fetchTrees() {
        let temp = []
        let treeTemp = [{
            name: "name",
            scientificName: "namesss",
            ext1: "",
            ext2: "",
            ext3: "",
            ext4: "",
            uses: "uses",
            botanicalDes: "botanicalDes",
            commonName: "commo",
            tamilName: "tamil",
            scientificName: "scientificName",
            family: "family",
            kingdom: "kingdom",
            phylum: "phyl",
            class: "class",
            order: "order",
            genus: "genus",
            species: "species"
        }]

            setTreeList(treeTemp)
        
        setPaginationTreeList(treeTemp)
        setStaticList(temp)

    }


    useEffect(() => {
        fetchTrees()
    }, [])

    return (

        <section id="Home" >
            <Butterflybg />
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
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Trees"))
                    setTreeList(staticList.filter((tree) => tree.type === "Trees"))
                }} variant={stackIndex === 0 ? "contained" : "outlined"} style={stackIndex === 0 ? styles.selected : styles.unSelected}>Trees</Button>
                <Button onClick={() => {
                    setStackIndex(1)
                    setPage(1)
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Palm"))
                    setTreeList(staticList.filter((tree) => tree.type === "Palm"))
                }} variant={stackIndex === 1 ? "contained" : "outlined"} style={stackIndex === 1 ? styles.selected : styles.unSelected}>Palms</Button>
                <Button onClick={() => {
                    setStackIndex(2)
                    setPage(1)
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Climbers"))
                    setTreeList(staticList.filter((tree) => tree.type === "Climbers"))
                }} variant={stackIndex === 2 ? "contained" : "outlined"} style={stackIndex === 2 ? styles.selected : styles.unSelected}>Climbers</Button>
                <Button onClick={() => {
                    setStackIndex(3)
                    setPage(1)
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Creepers"))
                    setTreeList(staticList.filter((tree) => tree.type === "Creepers"))
                }} variant={stackIndex === 3 ? "contained" : "outlined"} style={stackIndex === 3 ? styles.selected : styles.unSelected}>Creepers</Button>
                <Button onClick={() => {
                    setStackIndex(4)
                    setPage(1)
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Flowering Shurbs"))
                    setTreeList(staticList.filter((tree) => tree.type === "Flowering Shurbs"))
                }} variant={stackIndex === 4 ? "contained" : "outlined"} style={stackIndex === 4 ? styles.selected : styles.unSelected}>Flowering Shrubs</Button>
                <Button onClick={() => {
                    setStackIndex(5)
                    setPage(1)
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Foliage Shurbs"))
                    setTreeList(staticList.filter((tree) => tree.type === "Foliage Shurbs"))
                }} variant={stackIndex === 5 ? "contained" : "outlined"} style={stackIndex === 5 ? styles.selected : styles.unSelected}>Foliage Shrubs</Button>
                <Button onClick={() => {
                    setStackIndex(6)
                    setPage(1)
                    console.log("---")
                    console.log(staticList.filter((tree) => tree.type === "Medicinal plants"))
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Medicinal Plants"))
                    setTreeList(staticList.filter((tree) => tree.type === "Medicinal Plants"))
                }} variant={stackIndex === 6 ? "contained" : "outlined"} style={stackIndex === 6 ? styles.selected : styles.unSelected}>Medicinal plants</Button>
                <Button onClick={() => {
                    setStackIndex(7)
                    setPage(1)
                    setPaginationTreeList(staticList.filter((tree) => tree.type === "Indoor Plants"))
                    setTreeList(staticList.filter((tree) => tree.type === "Indoor Plants"))
                }} variant={stackIndex === 7 ? "contained" : "outlined"} style={stackIndex === 7 ? styles.selected : styles.unSelected}>Indoor plants</Button>
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
                    treeList.slice(0,page*10).map((ele, index) => {
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
        borderRadius: 20,
        backgroundColor: '#252525',
        marginLeft: 20,
        marginTop: 20
    },
    unSelected: {
        borderRadius: 20,
        borderColor: '#767676',
        color: '#767676',
        marginLeft: 20,
        marginTop: 20
    }
};




export default Home;