import { useEffect } from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Nav from "./Nav";
const LandingPage = () => {
  useEffect(() => {
    // Get all carousel containers
    const carouselContainers = document.querySelectorAll(".carousel-container");

    // Iterate over each carousel container
    carouselContainers.forEach((container) => {
      const slide = container.querySelector(".carousel-slide");
      const prevBtn = container.querySelector(".carousel-prev");
      const nextBtn = container.querySelector(".carousel-next");

      let position = 0;

      // Function to slide the carousel to the specified position
      const slideToPosition = (newPosition) => {
        slide.style.transform = `translateX(${newPosition}px)`;
        position = newPosition;
      };

      // Event listener for the previous button
      prevBtn.addEventListener("click", () => {
        if (position < 0) {
          slideToPosition(position + slide.offsetWidth);
        }
      });

      // Event listener for the next button
      nextBtn.addEventListener("click", () => {
        if (position > -slide.offsetWidth * (slide.children.length - 1)) {
          slideToPosition(position - slide.offsetWidth);
        }
      });
    });
  }, []);

  return (
    <><Nav />
    <div className="land">


      <br />
      <br />


      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.webp?b=1&s=170667a&w=0&k=20&c=O6ROn4qlooIZo8xb124PcS3A3XncKnDRuASWJb3Jk3Y="
              alt="Image 1" />
            <img
              src="https://media.istockphoto.com/id/1363024026/photo/two-adirondack-chairs-and-a-yellow-canoe.webp?b=1&s=170667a&w=0&k=20&c=NvYwmgs2tQrZGsb3BxZvT74W-JTURxmv1eQCvp9P40k="
              alt="Image 2" />
            <img
              src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlyYm5ifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image 3" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image 4" />
            <img
              src="https://plus.unsplash.com/premium_photo-1681922761181-ee59fa91edc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image 5" />
            <img
              src="https://images.unsplash.com/photo-1613850011958-cfb3e7364058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 6" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 7" />
            <img
              src="https://images.unsplash.com/photo-1571635685743-db0db8e31d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 8" />
            <img
              src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 9" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1651375773887-6bafd073f37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVhJTIwaGluJTIwZGlzdHJpY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 10" />
            <img
              src="https://images.unsplash.com/photo-1571635685743-db0db8e31d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 11" />
            <img
              src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>


      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 10" />
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 11" />
            <img
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 10" />
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 11" />
            <img
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1602595688238-9fffe12d5af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1440854098/photo/scandinavian-style-modern-living-room-with-entertainment-center.webp?b=1&s=170667a&w=0&k=20&c=H3FbGTnaqUYjA-CE_TPf-Mtvsa04e5VhlSklNEDbwGg="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1422162778/photo/stylish-room-interior-with-sleeper-sofa-near-white-wall-additional-place-for-guest.webp?b=1&s=170667a&w=0&k=20&c=3mswQ57tUyw16lIWGpYZ3W7mqmT9Lr1eoxEDKrfcucI="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.webp?b=1&s=170667a&w=0&k=20&c=7n4U6vnFtYrX-FE84s2GXIzqkBIkvPTAE2uG8mB8MLA="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1422162778/photo/stylish-room-interior-with-sleeper-sofa-near-white-wall-additional-place-for-guest.webp?b=1&s=170667a&w=0&k=20&c=3mswQ57tUyw16lIWGpYZ3W7mqmT9Lr1eoxEDKrfcucI="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1675585981855-c933229c5adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVhJTIwaGluJTIwZGlzdHJpY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image 10" />
            <img
              src="https://images.unsplash.com/photo-1676222628343-3ed01466736b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1YSUyMGhpbiUyMGRpc3RyaWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1142558830/photo/fisherman-village-in-pran-buri-near-hua-hin-thailand.webp?b=1&s=170667a&w=0&k=20&c=aQTcQDlJ-W3QbbhGLDWD6amEYKfPihzjY_tO2s-6Hvg="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1395507586/photo/interior-of-modern-cafe-with-beautiful-furniture.webp?b=1&s=170667a&w=0&k=20&c=ykK0LndGPDNDCRZEt9j6bwp9yu59ZLd_L2HK4qv4KNo="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1153144361/photo/old-french-canadian-style-apartment-in-montreal.webp?b=1&s=170667a&w=0&k=20&c=6jqFqpPs8OD542Cr0X_Q_Pk98zsuS95TN-sDRrWKUvQ="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1495903451/photo/living-room-interior-with-sofa-coffee-table-barbell-and-dumbbells-training-at-home-with.webp?b=1&s=170667a&w=0&k=20&c=lnc3XuxFfwDcoX1u37pR-jUoYLgSgJHli2K7k4Mn8SQ="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1346260292/photo/new-condos-calgary-alberta-canada.webp?b=1&s=170667a&w=0&k=20&c=LdT1fUh0nI-fIkWmfoZcMqK6Mq4Ubf0k5UEwqu1gLX4="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1372309567/photo/cheerful-african-woman-opening-door-welcoming-you-standing-at-home.webp?b=1&s=170667a&w=0&k=20&c=n3pgh2dtvjqY5EMP3-gOXZncgLHpl7mLwQkBJFn7Mz4="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1339701223/photo/young-embraced-couple-looking-through-the-window-of-their-new-apartment.webp?b=1&s=170667a&w=0&k=20&c=ucb7qfRyd-RPJyNnubYFnMm40aqFdiwJUENBCoOCmYw="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1435808362/photo/modern-elegant-kitchen-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=R6Gr2RiSzHPtVyUCMm369VNYGx9DPLmuSaw541gDVfM="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1414164958/photo/luxury-modern-beach-house-and-hotel-sea-view-3d-rendering.jpg?s=612x612&w=0&k=20&c=zIFRFKG4ZvHV4ZbXBisNuLy6foiBej34Fl9RJc16kIU="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1357529184/photo/3d-render-of-a-contemporary-living-room-interior.jpg?s=612x612&w=0&k=20&c=YuMefC7wfoc6Qitx7iyjmnjFBdtb94CyuITVCDrHTB8="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1407725880/photo/orlando-florida-luxury-lifestyle-apartments-buildings-with-three-floors-by-lake-water.jpg?s=612x612&w=0&k=20&c=6h8caR7iIP_LaNH5B3GE4WEGciLRWsaFGGBpf06fG-o="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=612x612&w=0&k=20&c=l0cel7NC2iNNB9I7NBqOoiF9wpLiRFWdIDd8MCYFVqg="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1407524985/photo/cityscape-of-a-residential-area-with-modern-apartment-buildings-new-green-urban-landscape-in.jpg?s=612x612&w=0&k=20&c=xyGhc476UjkYfWv930nBOFRgvjrWM28i4jHi2bldFYE="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1373329869/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=VBzd-UExnctNDY9rfqUc5Ys8IUyBmELYT0R2SSZ1_L4="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1145034668/photo/modern-european-complex-of-apartment-buildings.jpg?s=612x612&w=0&k=20&c=pSb6puLESZcZJeng_vQ7ahxIVeLu3mEhniTRR0qHBhY="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1362129126/photo/for-rent-real-estate-sign-in-front-of-a-row-of-apartment-condominiums-balconies-and-garage.jpg?s=612x612&w=0&k=20&c=EAEuX5nuAlgo0Ji1HNZMU9lMKwplMeDRlu_XSFeXOTI="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1393538022/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=JA6u4z_Mj2ZWHKPJqnATqpUPlrGBzavUXRhNE-5RYTw="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1365678941/photo/green-living.jpg?s=612x612&w=0&k=20&c=0mh9hAjvwgLxGSa7H9IVkofG6aOHQhsBW80pZ9Cwxd8="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1419530786/photo/modern-white-kitchen-with-rectangular-breakfast-kitchen-island-with-stools.jpg?s=612x612&w=0&k=20&c=e8WcasSr1VbqOOBwQwF_imwbNclOmdWMc8xSWLACdic="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1422948049/photo/living-room-interior-in-warm-tones-with-green-sofa-which-is-behind-the-kitchen.jpg?s=612x612&w=0&k=20&c=jllwu065-_DFMimtsHthztDmMd1d2nb90CUBEK_SaZc="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>


      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1344083240/photo/modern-living-room.jpg?s=612x612&w=0&k=20&c=yyaXPu8ENPlzOtDuhmbiqbvTU-DoTnmPyRwQ-ro7h0k="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1346633426/photo/multi-family-homes-featuring-townhomes-ranch-level-and-multi-level-residences-western-usa.jpg?s=612x612&w=0&k=20&c=WUcmpQ9ewKgHSnE_FN9H1W7j2O1uQ1-uKbXK9itb8bE="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1365678881/photo/green-buildings.jpg?s=612x612&w=0&k=20&c=HAbi74mkR3hRor-fR2B4qqDFcG3DnK-WKVEUpTwuHX4="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>



      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1440377588/photo/empty-living-room-in-townhouse-or-apartment-for-rent-or-moving-in.jpg?s=612x612&w=0&k=20&c=FYjGYEShaU0Yowkmibujhx6sUbt9qE0mQqiLvABXLz8="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1400184510/photo/smart-home-automation-system-with-in-living-room-with-blurred-background.jpg?s=612x612&w=0&k=20&c=3F-f-P8XHI_kGENhA9iEmbTEJu_AcyupXK8nKwF04VA="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1367228032/photo/condos-orlando-florida-usa.jpg?s=612x612&w=0&k=20&c=_2Jk_R21Gcqo10_jZbSeetI2Ayq_yyksICPHDR1FN6o="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>


      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1344082102/photo/large-glass-enclosed-balcony.jpg?s=612x612&w=0&k=20&c=gBTXgxCX8xue75LN1B6z21U_0htla88yyRpxs2to-hA="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1449163384/photo/view-of-balcony-in-mid-beach-in-miami-beach.jpg?s=612x612&w=0&k=20&c=QVacmJyCNwZlzfAuECceFNCWtazVfW_UATYo4LcgCZY="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>


      <div className="allc">
        <div className="carousel-container">
          <div className="carousel-slide">
            <img
              src="https://media.istockphoto.com/id/1347692934/photo/newbuild-block-of-flats-in-the-uk.jpg?s=612x612&w=0&k=20&c=X-NRn9U2qBjKT6hagdpUVxleR0T8vL03WNdNRctJ2i4="
              alt="Image 10" />
            <img
              src="https://media.istockphoto.com/id/1383581794/photo/modern-apartment-buildings-with-shops-on-ground-level-along-a-narrow-street-in-a-city-centre.jpg?s=612x612&w=0&k=20&c=hU9BOQbram-3yIbqJSuwKWaDAVRc6YjLTUPK3ciw4gY="
              alt="Image 11" />
            <img
              src="https://media.istockphoto.com/id/1425142611/photo/3d-rendering-of-a-full-furnished-living-room.jpg?s=612x612&w=0&k=20&c=F7E0Di5S-CWr82GPmzMGfuBtDftSCq1yyL-oIQv-xyk="
              alt="Image 12" />
          </div>
          <div className="carousel-prev">&lt;</div>
          <div className="carousel-next">&gt;</div>
        </div>
        <div className="alld">
          <div className="dex">
            <p>
              <strong>lorem ipsum</strong>
              <br />
              <span>20.23/night</span>
            </p>

          </div>
          <div className="rating"><StarOutlineIcon />5.3</div>
        </div>
      </div>

    </div></>
  );
};

export default LandingPage;
