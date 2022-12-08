import React from 'react';
import Project from './Project';
import sampleProject from './sampleProject';
import './ProjectOverview.css';

export default function ProjectOverview() {
  return (
    <div class="project-overview">
    <div class="proj-1">
      
    <h6>Project Title</h6>
    <p>{sampleProject.projectTitle}</p>
    </div>
    <div class="proj-2">

    <h6>Project Description</h6>
    <p>{sampleProject.description}</p>
    </div>
    <div class="proj-3">

    <h6>School</h6>
    <p>{sampleProject.school}</p>
    </div>
    <div class="proj-4">
    <h6>My Wishlist</h6>
    </div>
    <p id="wish-item">{sampleProject.projectWishList}</p>
    <button type="button" className="publish-btn"></button>
    
    </div>
  )
}
