import React from 'react';
import TrendingTags from './SideBarComp/TrendingTags';
import TopContributors from './SideBarComp/TopContributors';
import Join from './SideBarComp/Join';

const SideBar = () => (
  <div className="space-y-6 sticky top-20 right-10">
    <TrendingTags />
    <TopContributors />
    <Join />
  </div>
);

export default SideBar;