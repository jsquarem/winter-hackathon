import React from 'react';
import Project from './Project';
import sampleProject from './sampleProject';
import './ProjectOverview.css';

export default function ProjectOverview() {
  return (
    <div class="project-overview">
    <div id="proj-1">
    <h6>Project Title</h6>
    <p>{sampleProject.projectTitle}</p>
    </div>

    <div id="proj-2">
    <h6>Project Description</h6>
    <p>{sampleProject.description}</p>
    </div>

    <div id="proj-3">
    <h6>School</h6>
    <p>{sampleProject.school}</p>
    </div>

    <div id="proj-4">
    <h6>My Wishlist</h6>
    <p id="wish-item">{sampleProject.projectWishList}</p>
    </div>
    <button type="button" className="publish-btn"></button>

    
    </div>
  )
}
