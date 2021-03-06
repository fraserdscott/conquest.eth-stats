import React from 'react';
import { SUBGRAPH_URL } from '..';

function UsefulLinks() {
  return (
    <div>
      <h1>Useful Links</h1>
      <ul>
        <li>
          <a href="https://knowledge.conquest.etherplay.io/">conquest.eth Knowledge Base</a>
        </li>
        <li>
          <a href="https://youtu.be/4rO4b1SsONU">"A game on L2" by Ronan Sandford</a>
        </li>
        <li>
          <a href="https://beta.conquest.etherplay.io/">Current game build</a>
        </li>
        <li>
          <a href={SUBGRAPH_URL}>Current Subgraph</a>
        </li>
        <li>
          <a href="https://etherplay.medium.com/">Conquest.eth Medium</a>
        </li>
      </ul>

    </div>
  );
}

export default UsefulLinks;
