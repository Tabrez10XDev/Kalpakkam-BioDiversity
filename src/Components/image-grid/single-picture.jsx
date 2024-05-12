import {
  Image,
  SinglePictureContainer,
  Back,
  InfoCard,
  Name,
  PhotographerName,
  Avatar,
  Location,
} from "./styles";
import Chip from '@mui/material/Chip';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import Tree from './palm-tree.png'
import { useNavigate } from "react-router-dom";
import images from "../../images";
import { CloseIcon } from "../../images/CustomIcons";



const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const backVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: { opacity: 1, y: 0 },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 100,
    x: "-50%",
  },
  animate: { opacity: 1, y: 0, x: "-50%" },
};

const SinglePicture = ({
  isSelected,
  setSelectedImage,
  index,
  data: { creator, location, title, variant, name, ext, tags },
}) => {

  // const navigation = useNavigation();
  const navigate = useNavigate()

  const handleClick = (title) => {
    navigate(`/Info?tree=${title}`)
    console.info('You clicked the Chip.');
  };

  const goBack = () => {
    setSelectedImage(-1);
  };

  return (
    <SinglePictureContainer
      isSelected={isSelected}
      layoutId={`card-container--index-${index}`}
      transition={spring}
      variant={variant}
    >
      {isSelected && (
        <Back
          onClick={goBack}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={backVariants}
        >
          <CloseIcon />
        </Back>
      )}

      {console.log(ext)}
      <Image
        src={("https://biodiversity.srmist.edu.in/assets/images/" + encodeURIComponent(title) + "Place." + encodeURIComponent(ext ? ext.toLowerCase() : ext)).toString().replace("jpg", "jpeg")}
        alt={name}
        onClick={() => {
          setSelectedImage(index);
        }}
        isExpanded={isSelected}
        layoutId={`card-image--index-${index}`}
      />
      {isSelected && (
        <InfoCard
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={cardVariants}
        >
          <Location>{location}</Location>
          <Name>{title}</Name>

          {/* <Avatar
              image={
                !!creator.avatar
                  ? `${creator.avatar}?q=10&w=50`
                  : images.avatarFallback
              }
            /> */}
          {/* <PhotographerName>{creator.name}</PhotographerName> */}

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>

            {tags.map((ele, index) => {
              return (
                <Chip
                  label={ele}
                  onClick={()=>handleClick(ele)}
                  style={{ background: '#829D94', color: '#fff' }}
                  icon={<ParkOutlinedIcon style={{ color: '#fff' }} />}
                />
              )
            })}

{/* 
            <Chip
              label="Banyan tree"
              onClick={handleClick}
              style={{ background: '#829D94', color: '#fff' }}
              icon={<ParkOutlinedIcon style={{ color: '#fff' }} />}
            /> */}

          </div>



        </InfoCard>
      )}
    </SinglePictureContainer>
  );
};

export default SinglePicture;
