import { useState } from 'react';
import './gallery.css';
import image1 from '../../assets/img/image (1).jpg';
import image2 from '../../assets/img/image (2).jpg';
import image3 from '../../assets/img/image (3).jpg';
import image4 from '../../assets/img/image (4).jpg';
import image5 from '../../assets/img/image (5).jpg';
import image6 from '../../assets/img/image (6).jpg';
import image7 from '../../assets/img/image (7).jpg';
import image8 from '../../assets/img/image (8).jpg';
import image9 from '../../assets/img/image (9).jpg';
import image10 from '../../assets/img/image (10).jpg';
import image11 from '../../assets/img/image (11).jpg';
import image12 from '../../assets/img/image (12).jpg';
import image13 from '../../assets/img/image (13).jpg';
import image14 from '../../assets/img/image (14).jpg';
import image15 from '../../assets/img/image (15).jpg';
import image16 from '../../assets/img/image (16).jpg';
import image17 from '../../assets/img/image (17).jpg';
import image18 from '../../assets/img/image (18).jpg';
import image19 from '../../assets/img/image (19).jpg';
import image20 from '../../assets/img/image (20).jpg';
import image21 from '../../assets/img/image (21).jpg';
import image22 from '../../assets/img/image (22).jpg';
import image23 from '../../assets/img/image (23).jpg';
import image24 from '../../assets/img/image (24).jpg';
import image25 from '../../assets/img/image (25).jpg';
import image26 from '../../assets/img/image (26).jpg';
import image27 from '../../assets/img/image (27).jpg';
import image28 from '../../assets/img/image (28).jpg';
import image29 from '../../assets/img/image (29).jpg';
import image30 from '../../assets/img/image (30).jpg';
import image31 from '../../assets/img/image (31).jpg';
import image32 from '../../assets/img/image (32).jpg';
import image33 from '../../assets/img/image (33).jpg';
import image34 from '../../assets/img/image (34).jpg';
import image35 from '../../assets/img/image (35).jpg';
import image36 from '../../assets/img/image (36).jpg';
import image37 from '../../assets/img/image (37).jpg';
import image38 from '../../assets/img/image (38).jpg';
import image39 from '../../assets/img/image (39).jpg';
import image40 from '../../assets/img/image (40).jpg';
import image41 from '../../assets/img/image (41).jpg';
import image42 from '../../assets/img/image (42).jpg';
import image43 from '../../assets/img/image (1).webp';
import image44 from '../../assets/img/image (44).jpg';
import image45 from '../../assets/img/image (45).jpg';
import image46 from '../../assets/img/image (46).jpg';

const ImageGallery = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      <div className="gallery__container">
        <div className="main">
        <div className="img-box" data-value="1">
            <img src={image1} alt="" onClick={() => handleImageClick(image1)} />
        </div>
        <div className="img-box" data-value="2">
            <img src={image2} alt="" onClick={() => handleImageClick(image2)} />
        </div>
        <div className="img-box" data-value="3">
            <img src={image3} alt="" onClick={() => handleImageClick(image3)} />
        </div>
        <div className="img-box" data-value="4">
            <img src={image4} alt='' onClick={() => handleImageClick(image5)}/>
        </div>
        <div className="img-box" data-value="5">
            <img src={image5} alt="" onClick={() => handleImageClick(image5)} />
        </div>
        <div className="img-box" data-value="6">
            <img src={image6} alt="" onClick={() => handleImageClick(image6)} />
        </div>
        <div className="img-box" data-value="7">
            <img src={image7} alt="" onClick={() => handleImageClick(image7)} />
        </div>   
        <div className="img-box" data-value="8">
            <img src={image8} alt="" onClick={() => handleImageClick(image8)} />
        </div>
        <div className="img-box" data-value="9">
            <img src={image9} alt="" onClick={() => handleImageClick(image9)} />
        </div>
        <div className="img-box" data-value="10">
            <img src={image10} alt="" onClick={() => handleImageClick(image10)} />
        </div>
        <div className="img-box" data-value="11">
            <img src={image11} alt="" onClick={() => handleImageClick(image11)} />
        </div>
        <div className="img-box" data-value="12">
            <img src={image12} alt="" onClick={() => handleImageClick(image12)} />
        </div>
        <div className="img-box" data-value="13">
            <img src={image13} alt="" onClick={() => handleImageClick(image13)} />
        </div>
        <div className="img-box" data-value="14">
            <img src={image14} alt="" onClick={() => handleImageClick(image14)} />
        </div>
        <div className="img-box" data-value="15">
            <img src={image15} alt="" onClick={() => handleImageClick(image15)} />
        </div>   
        <div className="img-box" data-value="16">
            <img src={image16} alt="" onClick={() => handleImageClick(image16)} />
        </div>
        <div className="img-box" data-value="17">
            <img src={image17} alt="" onClick={() => handleImageClick(image17)} />
        </div>
        <div className="img-box" data-value="18">
            <img src={image18} alt="" onClick={() => handleImageClick(image18)} />
        </div>
        <div className="img-box" data-value="19">
            <img src={image19} alt="" onClick={() => handleImageClick(image19)} />
        </div>
        <div className="img-box" data-value="20">
            <img src={image20} alt="" onClick={() => handleImageClick(image20)} />
        </div>
        <div className="img-box" data-value="21">
            <img src={image21} alt="" onClick={() => handleImageClick(image21)} />
        </div>
        <div className="img-box" data-value="22">
            <img src={image22} alt="" onClick={() => handleImageClick(image22)} />
        </div>
        <div className="img-box" data-value="23">
            <img src={image23} alt="" onClick={() => handleImageClick(image23)} />
        </div>   
        <div className="img-box" data-value="24">
            <img src={image24} alt="" onClick={() => handleImageClick(image24)} />
        </div>
        <div className="img-box" data-value="25">
            <img src={image25} alt="" onClick={() => handleImageClick(image25)} />
        </div>
        <div className="img-box" data-value="26">
            <img src={image26} alt="" onClick={() => handleImageClick(image26)} />
        </div>
        <div className="img-box" data-value="27">
            <img src={image27} alt="" onClick={() => handleImageClick(image27)} />
        </div>
        <div className="img-box" data-value="28">
            <img src={image28} alt="" onClick={() => handleImageClick(image28)} />
        </div>
        <div className="img-box" data-value="29">
            <img src={image29} alt="" onClick={() => handleImageClick(image29)} />
        </div>
        <div className="img-box" data-value="30">
            <img src={image30} alt="" onClick={() => handleImageClick(image30)} />
        </div>
        <div className="img-box" data-value="31">
            <img src={image31} alt="" onClick={() => handleImageClick(image31)} />
        </div>   
        <div className="img-box" data-value="32">
            <img src={image32} alt="" onClick={() => handleImageClick(image32)} />
        </div>
        <div className="img-box" data-value="33">
            <img src={image33} alt="" onClick={() => handleImageClick(image33)} />
        </div>
        <div className="img-box" data-value="34">
            <img src={image34} alt="" onClick={() => handleImageClick(image34)} />
        </div>
        <div className="img-box" data-value="34">
            <img src={image34} alt="" onClick={() => handleImageClick(image34)} />
        </div>
        <div className="img-box" data-value="35">
            <img src={image35} alt="" onClick={() => handleImageClick(image35)} />
        </div>
        <div className="img-box" data-value="36">
            <img src={image36} alt="" onClick={() => handleImageClick(image36)} />
        </div>
        <div className="img-box" data-value="37">
            <img src={image37} alt="" onClick={() => handleImageClick(image37)} />
        </div>
        <div className="img-box" data-value="38">
            <img src={image38} alt="" onClick={() => handleImageClick(image38)} />
        </div>   
        <div className="img-box" data-value="39">
            <img src={image39} alt="" onClick={() => handleImageClick(image39)} />
        </div>
        <div className="img-box" data-value="40">
            <img src={image40} alt="" onClick={() => handleImageClick(image40)} />
        </div>
        <div className="img-box" data-value="41">
            <img src={image41} alt="" onClick={() => handleImageClick(image41)} />
        </div>
        <div className="img-box" data-value="42">
            <img src={image42} alt="" onClick={() => handleImageClick(image42)} />
        </div>
        <div className="img-box" data-value="43">
            <img src={image43} alt="" onClick={() => handleImageClick(image43)} />
        </div>
        <div className="img-box" data-value="44">
            <img src={image44} alt="" onClick={() => handleImageClick(image44)} />
        </div>
        <div className="img-box" data-value="45">
            <img src={image45} alt="" onClick={() => handleImageClick(image45)} />
        </div>
        <div className="img-box" data-value="46">
            <img src={image46} alt="" onClick={() => handleImageClick(image46)} />
        </div>   
      </div>

      {isOverlayOpen && (
        <div className="overlay">
          <span className="close" onClick={handleCloseOverlay}>&times;</span>
          <img src={currentImage} alt="" />
        </div>
      )}
      </div>
    </>
  );
};

export default ImageGallery;