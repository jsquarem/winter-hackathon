import React from 'react';
import Project from './Project';
import './ProjectOverview.css';

const sampleProject = {
  projectTitle: "Bring Some Magic To This Muggle Class",
  projectDescription: "Harry, who had been silent for the entirety of the conversation, choosing instead to use his Auror Spidey-senses to acutely observe the interaction, finally spoke up.",
  projectSchool: "Ghenghis Khan Elementary",
  projectWishList: "test wishlist"
}

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
