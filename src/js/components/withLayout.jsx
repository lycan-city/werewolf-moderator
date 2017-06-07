import React from 'react';

import Header from './Header';

export default (BodyComponent, { Footer, Heading }, title) => ({ ...props }) => (
  <div >
    <Header name={title} />
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        {Heading ?
          <div class="panel-heading">
            <Heading {...props} />
          </div>
            : null}
        <div class="panel-body">
          <BodyComponent {...props} />
        </div>
        <div class="panel-footer">
          <Footer {...props} />
        </div>
      </div>
    </div>
  </div>
  );
