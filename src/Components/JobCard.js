import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import { Modal } from "react-bootstrap";
function JobCard({item}) {
    // console.log(item)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div>
        <div className={Style.jobCard}>
          <div className={`d-flex ${Style.jobpostDate}`}>
            <div>⏳</div>
            <div className="ps-2">Posted 10 days ago</div>
          </div>
          <div className="d-flex align-content-center ">
            <div className={`${Style.companyImg}`}>
              <img
                width={100}
                src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1711092299539_00e8b.png"
              />
            </div>
            <div className={` ms-2 ${Style.CompanyInfo}`}>
              <div className={`${Style.companyName}`}>fyno</div>
              <div className={`${Style.JobRole}`}>{item.jobRole}</div>
              <div className={`${Style.JobLocation}`}>{item.location}</div>
            </div>
          </div>
          <div className={`${Style.JobBudget}`}>
            Estimated Salary: ₹18 - 35 LPA ✅
          </div>
          <div className={`${Style.AboutCompnaySection}`}>
            <div className={`${Style.title}`}>About Company</div>
            <div style={{ fontWeight: "500" }}>About us</div>
            <div className={`${Style.jobDescription}`}>
             {item.jobDetailsFromCompany}
            </div>
          </div>
          <div onClick={handleShow} className={`${Style.viewJobSection}`}>
            View Job
          </div>
          <div className={`${Style.ExperienceSection}`}>
            <div className={`${Style.ExperienceTitle}`}>Mininum Experience</div>
            <div className={`${Style.TotalExp}`}>2 years</div>
          </div>
          <div className={`${Style.jobBtns}`}>
            <button className={`${Style.EasyApply}`}>⚡ Easy Apply</button>
            <button className={`${Style.Referral}`}>
              <div className={`${Style.ReferralImg}`}>
                {Array(2)
                  .fill(true)
                  .map((item, index) => (
                    <div key={index}>
                      <img
                        alt="referral-img"
                        src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=30"
                      />
                      <div className={`${Style.dot}`}></div>
                    </div>
                  ))}
              </div>
              <div className="ms-2">Unlock referral asks</div>
            </button>
          </div>
        </div>
      </div>

      {/* For View Job Details */}
      <Modal
        className={`${Style.JobDetailsPopup}`}
        centered
        show={show}
        onHide={handleClose}
      >
        <div className={`${Style.JDDetails}`}>
          <h5>Job Description</h5>
          <div className={`${Style.AboutCompnaySection}`}>
            <div>
              <div className={`${Style.title}`}>About Company :</div>
              <div
                style={{
                  fontSize: ".8rem",
                  fontWeight: "400",
                  padding: "1rem 0",
                }}
              >
                Due Diligence AI that runs comprehensive financial, legal,
                regulatory and reputational risk analysis on any given target.
              </div>
            </div>
            <div style={{ fontWeight: "400", fontSize: "1rem" }}>
              About us :
            </div>
            <div className={`${Style.jobDescription}`}>
            {item.jobDetailsFromCompany}
            </div>
            <div style={{ fontWeight: "400", fontSize: "1rem" }}>
              Job Summary :
            </div>
            <div className={`${Style.jobDescription}`}>
              We are on the lookout for a React Developer with a minimum of 2
              years of experience, proficient in integrating third-party cloud
              services, deploying React applications, and knowledgeable in state
              management, CSS, and Next.js. The ideal candidate will develop,
              maintain, and enhance high-quality web applications, ensuring both
              functionality and aesthetic appeal.
            </div>
            <div style={{ fontWeight: "400", fontSize: "1rem" }}>
              Key Responsibilities :
            </div>
            <div className={`${Style.jobDescription}`}>
              Build and refine front-end components and libraries. Translate
              designs into high-quality code, ensuring both functionality and
              visual fidelity. Optimize application performance for a wide range
              of devices and browsers. Monitor and adjust post-deployment
              performance. Work closely with UI/UX designers and back-end
              developers. Engage in code reviews and actively participate in
              team meetings.
            </div>
            <div style={{ fontWeight: "400", fontSize: "1rem" }}>
              Qualifications :
            </div>
            <div className={`${Style.jobDescription}`}>
              Bachelor’s degree in Computer Science, IT, or related field. At
              least 2 years in React development. Deep understanding of React.js
              and its core principles. Experience with state management tools
              (Redux, Context API). Proficiency in CSS and experience with CSS
              preprocessors ( Tailwind CSS, SASS and LESS). Familiarity with
              Next.js. Experience with RESTful APIs and modern authorization
              mechanisms (e.g., JWT). Knowledge in deploying React applications.
              Familiarity with front-end development tools (Babel, Webpack,
              NPM). Strong problem-solving skills, along with excellent
              analytical and communication abilities. Ability to work
              effectively in a fast-paced, team-oriented environment.
            </div>
            <div style={{ fontWeight: "400", fontSize: "1rem" }}>Skills :</div>
            <div className={`${Style.jobDescription}`}>
              front-end development tools,jwt,html,next.js,state management
              tools,restful apis,css,javascript,redux,deploying react
              applications,react.js,nextjs,tailwind css,reactjs
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default JobCard;
