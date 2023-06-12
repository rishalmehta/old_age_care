import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Live Longer - Senior Citizen Edition</h1>
      
      <div className="card mb-4">
        <h2 className="card-header bg-primary text-white">Health Tips</h2>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Stay physically active by engaging in regular exercise.</li>
            <li className="list-group-item">Maintain a healthy diet rich in fruits, vegetables, and whole grains.</li>
            <li className="list-group-item">Get enough sleep and prioritize a consistent sleep schedule.</li>
            <li className="list-group-item">Stay socially connected with friends, family, and community.</li>
            <li className="list-group-item">Regularly visit your healthcare provider for check-ups and screenings.</li>
          </ul>
        </div>
      </div>
      
      <div className="card mb-4">
        <h2 className="card-header bg-primary text-white">Activities Zone</h2>
        <div className="card-body">
          <p>Here are some fun activity and exercise videos to help you stay active:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="https://youtu.be/yxWm49zICNI" target="_blank" rel="noopener noreferrer">fun activity exercise</a>
            </li>
            <li className="list-group-item">
              <a href="https://youtu.be/kRogdOOMw8I" target="_blank" rel="noopener noreferrer">breathing exercise for senior and elderly</a>
            </li>
            <li className="list-group-item">
              <a href="https://youtu.be/5rJPwLkXzvg" target="_blank" rel="noopener noreferrer">easy yoga for senior citizens and above</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="card mb-4">
        <h2 className="card-header bg-primary text-white">Nutrition Guide</h2>
        <div className="card-body">
          <p>Follow these nutrition tips for a healthy diet:</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Include a variety of fruits and vegetables in your meals.</li>
            <li className="list-group-item">Choose whole grains over refined grains.</li>
            <li className="list-group-item">Limit your intake of added sugars and salt.</li>
            <li className="list-group-item">Include lean proteins such as fish, poultry, and legumes.</li>
            <li className="list-group-item">Stay hydrated by drinking enough water throughout the day.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
