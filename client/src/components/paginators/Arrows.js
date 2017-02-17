import React from 'react';
import {IconButton} from 'material-ui';

export default ({click, pageIndex, nClassroom, classroomsLength}) => (
  <div className="row">
    <div className="col-xs-6" style={{textAlign: 'right'}}>
      <IconButton
        iconClassName="fa fa-angle-left"
        disabled={pageIndex === 0}
        onTouchTap={() => click(-1)}
      />
    </div>
    <div className="col-xs-6" style={{textAlign: 'left'}}>
      <IconButton
        iconClassName="fa fa-angle-right"
        disabled={(pageIndex + 1) * nClassroom >= classroomsLength}
        onTouchTap={() => click(+1)}
      />
    </div>
  </div>
);
