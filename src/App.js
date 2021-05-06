/**
 * Created by Looker Data Applications Team
 * 2021
 */
 import React, { useState, useEffect, useCallback } from "react";
 import styled from "styled-components";
 import { LookerEmbedSDK } from "@looker/embed-sdk";
 import { Switch, Route, BrowserRouter } from 'react-router-dom'
 import {
   ComponentsProvider,
   Heading,
   InputDateRange
 } from "@looker/components";
 // import { SDK } from "./pblsession";
 import "./styles.css";
 import Sidebar from "./components/sidebar/sidebar";
 import { useParams } from 'react-router';

 
 const looker_host = "https://demo.looker.com:19999";
 LookerEmbedSDK.init(looker_host, "/auth");
 
 // let sdk = SDK({ base_url, token_endpoint });
 
export const App = () => {
   return (
     // <div id="App">
     //   <ComponentsProvider>
     //     <Heading>Looker Embed</Heading>
     //     <Embed />
     //   </ComponentsProvider>
     // </div>
     <div className="App">
       {/* <ComponentsProvider> */}
         {/* <PageLayout> */}
           <Sidebar />
           {/* <Heading>Looker Embed</Heading> */}
           {/* <Embed /> */}
         {/* </PageLayout> */}
       {/* </ComponentsProvider> */}
     </div>
   );
 }

 
 export const Embed = () => {

  const params = useParams()
  console.log(params)

   
   const [dashboardEmbedded, setDashboardEmbedded] = useState(false);
   const [selectedDate, setSelectedDate] = useState({
     //
     from: new Date(),
     to: new Date()
   });
   const [dashboard, setDashboard] = useState(); //
  //  const id = 4608;
 
   useEffect(() => {
     createUrlAndEmbedDashboard();
   }, []);
 
   let createUrlAndEmbedDashboard = async () => {
     // const embed_url = await sdk.ok(
     //   sdk.create_embed_url_as_me({
     //     target_url: `https://dat.dev.looker.com/embed/dashboards-next/7?embed_domain=${document.location.origin}&sdk=2`
     //   })
     // );
 
     LookerEmbedSDK.init("https://demo.looker.com");
     LookerEmbedSDK.createDashboardWithId(params.id)
       .appendTo(document.getElementById("App"))
       .withClassName("embeddedDashboard")
       .build()
       .connect()
       .then((dashboard) => {
         setDashboardEmbedded(true);
         setDashboard(dashboard); //
       });
   };

   useEffect(() => {
    if (dashboard) {
      // If the dashboard exists, update the state filter
      dashboard.loadDashboard(params.id)
    }
  },[params.id])
 
   // const handleChange = (dateRange) => {
   //   //
   //   setSelectedDate(dateRange);
   //   updateFilters(dateRange);
   // };
 
   // const updateFilters = (newRange) => {
   //   //
   //   if (Object.keys(dashboard).length) {
   //     const oneDay = 24 * 60 * 60 * 1000;
   //     const diffDays = Math.round(
   //       Math.abs((newRange.from - newRange.to) / oneDay)
   //     );
   //     const stringToUse = `last ${diffDays} days`;
   //     dashboard.updateFilters({ "Created Date": stringToUse });
   //     dashboard.run();
   //   }
   // };
 
   return (
     <div id="EmbedContainer">
       {/* <InputDateRange
         onChange={handleChange}
         defaultValue={selectedDate}
         value={selectedDate}
       /> */}
     </div>
   );
 }

 
 const PageLayout = styled.div`
   display: grid;
   grid-template-columns: 200px auto;
 `;
 