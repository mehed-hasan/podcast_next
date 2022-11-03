import { recentEpisodes } from "../../data/home";
import Card1 from "../Card/Card1";

import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function LatestEpisodes() {
  const [key, setKey] = useState("all");
  return (
    <>
      <div className="gap_96"></div>
      <section id="latest_episode">
        <div className="heading_group text-center">
          <h2 className="heading_2">Latest Episode</h2>
        </div>
        <div className="gap_64"></div>

        <div className="container">
          <div className="latest_episode_tab podcast_tab">
            <Tabs
             id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" >


              <Tab eventKey="all" title="All" >
                <div className="row">
                  <Card1 grid={"col-12 col-md-6"} data={recentEpisodes} />
                </div>
              </Tab>


              <Tab eventKey="business" title="Business">
                <div className="row">
                  <Card1 grid={"col-12 col-md-6"} data={recentEpisodes.filter((item) => { return item.type === 'business'})} />
                </div>
              </Tab>


              <Tab eventKey="comedy" title="Comedy">
                <div className="row">
                  <Card1 grid={"col-12 col-md-6"} data={recentEpisodes.filter((item) => {return item.type === 'comedy'})} />
                </div>
              </Tab>

              <Tab eventKey="education" title="Education">
                <div className="row">
                  <Card1 grid={"col-12 col-md-6"} data={recentEpisodes.filter((item)=> {return item.type === 'education'})} />
                </div>
              </Tab>


              <Tab eventKey="health" title="Health">
                <div className="row">
                  <Card1 grid={"col-12 col-md-6"} data={recentEpisodes.filter((item)=>{return item.type === 'health'})} />
                </div>
              </Tab>

              <Tab eventKey="news" title="News">
                <div className="row">
                  <Card1 grid={"col-12 col-md-6"} data={recentEpisodes.filter((item) => {return item.type === 'news'})} />
                </div>
              </Tab>

              <Tab eventKey="tech" title="Tech">
                <div className="row">
                  <Card1 grid={"col-12 col-md-6"} data={recentEpisodes.filter((item) => {return item.type === 'tech'})} />
                </div>
              </Tab>


            </Tabs>

            <div className="gap_64"></div>
          </div>
        </div>
        <div className="gap_64"></div>
      </section>
      <div className="gap_64"></div>
    </>
  );
}

export default LatestEpisodes;
