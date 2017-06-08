import React from 'react';

export default ({ role, amount }) => (
  <div class="media">
    <div class="media-left media-middle">
      <img class="media-object" src="https://dummyimage.com/85x85/000/fff" alt="..." />
    </div>
    <div class="media-body">
      <h4 class="media-heading">{role}</h4>
      Total: <span>{amount}</span>
    </div>
  </div>
);
