import React from 'react';
import TrendingTags from './TrendingTags';
import TopContributors from './TopContributors';
import JoinPrompt from './JoinPrompt';

const SideBar = () => (
  <div className="space-y-6">
    <TrendingTags />
    <TopContributors />
    <JoinPrompt />
  </div>
);

export default SideBar;