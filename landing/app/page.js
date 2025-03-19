import React from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Group from "./components/Group";
import Matrics from "./components/Matrics";
import Offer from "./components/Offer";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Section/>
      <Group/>
      <Matrics/>
      <Offer/>
    </div>
  );
}