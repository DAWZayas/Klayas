import React from 'react';

// our packages
import SeeClassroomButton from './SeeClassroomButton';

const ClassroomOwner = ({classroom}) => (
  <div className="col-md-3">
    <div className="panel panel-primary">
      <div className="panel-heading">
        {classroom.name}
      </div>
      <div className="panel-body">
        <SeeClassroomButton classroomId={classroom.id} />
      </div>
    </div>
  </div>
);

export default ClassroomOwner;
