<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>
<body>
  <h1>Infinite Scroll Photo Gallery</h1>
  <p>A responsive photo gallery web application that fetches images from the Unsplash API and supports infinite scrolling.</p>

  <div class="section">
    <h2>Features</h2>
    <ul>
      <li>Responsive grid layout for photos.</li>
      <li>Infinite scrolling to dynamically load more photos.</li>
      <li>Error handling and loading indicators.</li>
      <li>Photographer's name displayed below each photo.</li>
      <li>Image hover effects for interactivity (bonus).</li>
    </ul>
  </div>

  <div class="section">
    <h2>Technologies Used</h2>
    <ul>
      <li>React.js</li>
      <li>Pure CSS for styling</li>
      <li>Unsplash API</li>
    </ul>
  </div>

  <div class="section">
    <h2>Installation</h2>
    <ol>
      <li>Clone the repository:
        <pre><code>git clone https://github.com/your-username/infinite-scroll-gallery.git</code></pre>
      </li>
      <li>Navigate to the project directory:
        <pre><code>cd infinite-scroll-gallery</code></pre>
      </li>
      <li>Install dependencies:
        <pre><code>npm install</code></pre>
      </li>
      <li>Create a <code>.env</code> file in the root directory and add your Unsplash API key:
        <pre><code>REACT_APP_API_KEY=your_unsplash_api_key</code></pre>
      </li>
      <li>Start the development server:
        <pre><code>npm start</code></pre>
      </li>
    </ol>
  </div>

  <div class="section">
    <h2>Live Demo</h2>
    <p>Check out the live application: <a href="">Live Demo</a></p>
  </div>

  <div class="section">
    <h2>How It Works</h2>
    <p>The application fetches photos from the Unsplash API and displays them in a responsive grid layout. Infinite scrolling is implemented using a scroll event listener, dynamically fetching new images when the user reaches the bottom of the page.</p>
  </div>

  <div class="section">
    <h2>Advanced Features (Bonus)</h2>
    <ul>
      <li>Image hover effects (zoom and shadow).</li>
      <li>Lazy loading for improved performance.</li>
      <li>Accessible design with alt tags for images.</li>
      <li>Error message display for network or API issues.</li>
    </ul>
  </div>


</body>
</html>
