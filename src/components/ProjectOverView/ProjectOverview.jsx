import React from 'react';
import Button from 'react-bootstrap/Button';
import WishListItem from '../WishListItem/WishListItem';
import Container from 'react-bootstrap/Container';
import './ProjectOverview.css';

export default function ProjectOverview({ project, user, formSubmitHandler }) {
  console.log(user, '<-user in overview');
  console.log(project, '<-project in overview');
  // const project = {
  //   title: 'Bring Some Magic To This Muggle Class',
  //   description:
  //     'Harry, who had been silent for the entirety of the conversation, choosing instead to use his Auror Spidey-senses to acutely observe the interaction, finally spoke up.',
  //   school: 'Ghenghis Khan Elementary',
  //   wishList: []
  // };

  return (
    <Container>
      <div className="row">
        <div className="col-12">
          <div className="project-overview">
            <div className="row mt-5">
              <div className="col-12">
                <h4>Project Title</h4>
                <p>{project.projectTitle}</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h5>Project Description</h5>
                <p>{project.projectDescription}</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h5>School</h5>
                <p>The school</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h5>
                  My Wishlist ({project.wishList.length} item
                  {project.wishList.length > 1 ? 's' : ''})
                </h5>
                <WishListItem wishListItem={project.wishList[0]} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mt-5">
                <Button
                  variant="success text-white"
                  onClick={formSubmitHandler}
                >
                  Publish Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
