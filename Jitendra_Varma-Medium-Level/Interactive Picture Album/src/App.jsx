import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";
import LoadMoreButton from "./components/LoadMoreButton";

const initialImages = [
  {
    src: "https://i0.wp.com/picjumbo.com/wp-content/uploads/magical-spring-forest-scenery-during-morning-breeze-free-photo.jpg?w=600&quality=80",
    category: "Nature",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMCRmUEnlesylDD3Z44DKyOgg07tXt2yxDzCWXPuJXKf2MOcnq9EiwS4DEow_Ie2UJYI&usqp=CAU",
    category: "Nature",
  },
  {
    src: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1717545600&semt=sph",
    category: "Nature",
  },
  {
    src: "https://img.freepik.com/free-photo/view-spectacular-nature-landscape_23-2150763636.jpg",
    category: "Nature",
  },
  {
    src: "https://img.freepik.com/free-photo/mountain-landscape-day-time_23-2150724985.jpg",
    category: "Nature",
  },

  {
    src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
    category: "Food",
  },
  {
    src:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-485610450-1522163314.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
    category:"Food",
  },
  {
    src: "https://assets3.thrillist.com/v1/image/3130793/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
    category: "Food",
  },
  {
    src: "https://media.istockphoto.com/id/1306511050/photo/hamburger-with-flying-ingredients-on-blue-studio-background-fast-food-cuisine-concept.webp?b=1&s=170667a&w=0&k=20&c=FIhtKF1Ok6ai-gbUkd0yImYzLQEQtmq50JM26UmSRv8=",
    category: "Food",
  },
  {
    src:"https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
    category:"Food",
  },
  {
    src: "https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill",
    category: "Food",
  },

  {
    src: "https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg",
    category: "Sport",
  },
  {
    src: "https://www.hindustantimes.com/ht-img/img/2023/11/12/1600x900/India-Cricket-WCup-68_1699809986420_1699810043017.jpg",
    category: "Sport",
  },
  {
    src:'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg',
    category:"Sport",
  },
  {
    src: "https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg",
    category: "Sport",
  },
  {
    src: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl/f_auto/primary/hem4fi2cf78phjflxxrr",
    category: "Sport",
  },

  {
    src: "https://thumbs.dreamstime.com/b/exotic-tropical-resort-jetty-near-cancun-mexico-travel-vacations-concept-tourism-87825663.jpg",
    category: "Travel",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCj_3U_c4XJxEvzO7MspFFGm0e6wYwYXBtkHM5cZjlQrsWm8QqVKptazvxyBfCKPMS5jc&usqp=CAU",
    category: "Travel",
  },
  {
    src: "https://images.unsplash.com/photo-1507237615867-0d4d2ad6b2d1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Travel",
  },
  {
    src: "https://us.123rf.com/450wm/nd3000/nd30001906/nd3000190601519/124813547-group-of-backpackers-and-young-friends-traveling-and-having-fun-together.jpg?ver=6",
    category: "Travel",
  },
  {
    src:"https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?cs=srgb&dl=pexels-george-desipris-792381.jpg&fm=jpg",
    category:"Animal",
  },
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0Au6KMF9u-vu2fnUAZZCNLYxOXpfP9SRBQ&s",
    category:"Animal",
  },
  {
    src:"https://images.unsplash.com/photo-1592670130429-fa412d400f50?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    category:"Animal",
  },
  {
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIK_dzjnmoFopN-Tti8pDSgDA3R8NvHYnAg&s",
    category:"Technology",
  },
  {
    src:"https://cdn.pixabay.com/photo/2021/10/11/17/54/technology-6701504_640.jpg",
    category:"Technology",
  }
];

const App = () => {

  const imagesPerLoad = 4;

  // const [allImages,setAllImages]=useState(initialImages);
  const [images, setImages] = useState(initialImages.slice(0, imagesPerLoad));
  const [loadedImages, setLoadedImages] = useState(imagesPerLoad);
  const [filter, setFilter] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    if (filter === "All") {
      setImages(initialImages.slice(0,8));
      setLoadedImages(8);
      setShowBtn(true);
    } else {
      const filteredImages = initialImages.filter(
        (img) => filter === 'All' || img.category === filter
      );
      setImages(filteredImages.slice(0, imagesPerLoad));
      setLoadedImages(imagesPerLoad);
      setShowBtn(filteredImages.length > imagesPerLoad);
    }
  }, [filter]);

  const loadImages = () => {
    const nextImages = initialImages
      .filter((img) => filter === 'All' ||img.category === filter)
      .slice(loadedImages, loadedImages + imagesPerLoad);
    setImages((prev) => [...prev, ...nextImages]);
    setLoadedImages((prev) => prev + imagesPerLoad);

    if (
      loadedImages + imagesPerLoad >=
      initialImages.filter((img) =>filter === 'All' ||img.category === filter)
        .length
    ) {
      setShowBtn(false);
    }
  };

  const openLightbox = (src) => {
    setLightboxImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header setFilter={setFilter} setAllImages={initialImages} filter={filter}/>
      <Gallery images={images} openLightbox={openLightbox} />
      {showBtn && <LoadMoreButton loadMore={loadImages} />}
      <Lightbox
        isOpen={lightboxOpen}
        image={lightboxImage}
        closeLightbox={closeLightbox}
      />
    </div>
  );
};

export default App;
