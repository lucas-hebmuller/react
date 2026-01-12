import ImageDisplay from "./ImageDisplay";

function Home() {
  return (
    <div id="home" className="site-main">
      <div className="container">
        <section className="intro">
          <h2>Website created using React</h2>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo eveniet qui dignissimos ab? Nisi vitae incidunt recusandae totam commodi fuga eveniet corrupti doloribus suscipit sunt, voluptatibus aperiam expedita perspiciatis assumenda? </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil at architecto voluptates qui deserunt repellat eveniet, maiores recusandae! Ipsum similique corporis voluptate reprehenderit est praesentium ipsam aliquid. Ipsum, placeat?</p>
        </section>

        <ImageDisplay src={"https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"} alt={"example image"}/>

        <section className="about" id="about">
          <h2>About Us</h2>
          <p>
            React practice exercise
          </p>
        </section>

        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <p><a href="https://github.com/lucas-hebmuller" target="_blank">GitHub</a></p>
        </section>
      </div>
    </div>
  );
}

export default Home;
