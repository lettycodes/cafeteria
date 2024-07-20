import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import { Carousel, Container } from "react-bootstrap";

function Carrossel() {
  return (
    <>
      <main className="m-4">
        <h1 className="mb-4">Página inicial</h1>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                style={{ height: "700px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                style={{ height: "700px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                style={{ height: "700px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image4}
                alt="Third slide"
                style={{ height: "700px", objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image5}
                alt="Third slide"
                style={{ height: "700px", objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </main>
    </>
  );
}

export default Carrossel;
