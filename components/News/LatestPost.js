import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { articles } from "../../data/home";
import Card2 from "../Card/Card2";
import HeadingGroup from "../HadingGroup";

function LatestPost() {
    const [key, setKey] = useState("all");
    return ( 
        <>
        <div className="gap_96"></div>
        <section id="latest_episode">   
          <HeadingGroup heading='Latest Post' />
          <div className="gap_64"></div>

          <div className="container">
            <div className="latest_episode_tab podcast_tab">
            <Tabs
             id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-5 " >


              <Tab eventKey="all" title="All" >
                <div className="row">
                  <Card2 grid={"col-12 col-md-6"} data={articles} />
                </div>
              </Tab>


              <Tab eventKey="business" title="Business">
                <div className="row">
                  <Card2 grid={"col-12 col-md-6"} data={articles.filter((item) => { return item.type === 'business'})} />
                </div>
              </Tab>


              <Tab eventKey="comedy" title="Comedy">
                <div className="row">
                  <Card2 grid={"col-12 col-md-6"} data={articles.filter((item) => {return item.type === 'comedy'})} />
                </div>
              </Tab>

              <Tab eventKey="education" title="Education">
                <div className="row">
                  <Card2 grid={"col-12 col-md-6"} data={articles.filter((item)=> {return item.type === 'education'})} />
                </div>
              </Tab>


              <Tab eventKey="health" title="Health">
                <div className="row">
                  <Card2 grid={"col-12 col-md-6"} data={articles.filter((item)=>{return item.type === 'health'})} />
                </div>
              </Tab>

              <Tab eventKey="news" title="News">
                <div className="row">
                  <Card2 grid={"col-12 col-md-6"} data={articles.filter((item) => {return item.type === 'news'})} />
                </div>
              </Tab>

              <Tab eventKey="tech" title="Tech">
                <div className="row">
                  <Card2 grid={"col-12 col-md-6"} data={articles.filter((item) => {return item.type === 'tech'})} />
                </div>
              </Tab>


            </Tabs>

            </div>
          </div>
          <div className="gap_64"></div>
        </section>
        <div className="gap_64 d-none d-lg-block"></div>
        </>
     );
}

export default LatestPost;